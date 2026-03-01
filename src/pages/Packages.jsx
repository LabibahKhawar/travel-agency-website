import { useEffect, useMemo, useState } from "react";
import { supabase } from "../lib/supabaseClient";
import { offlinePackages } from "../components/data/offlinePackages";
import PackageCard from "../components/PackageCard";

const CACHE_KEY = "nt_cached_packages_v1";

export default function Packages() {
  const [packages, setPackages] = useState([]);
  const [status, setStatus] = useState("Loading packages...");
  const [loading, setLoading] = useState(true);

  const cached = useMemo(() => {
    try {
      const raw = localStorage.getItem(CACHE_KEY);
      const parsed = JSON.parse(raw);
      return Array.isArray(parsed) ? parsed : null;
    } catch {
      return null;
    }
  }, []);

  useEffect(() => {
    let ignore = false;

    async function loadPackages() {
      setLoading(true);

      if (!navigator.onLine) {
        const offlineData =
          cached && cached.length > 0 ? cached : offlinePackages;

        if (!ignore) {
          setPackages(offlineData);
          setStatus(
            cached && cached.length > 0
              ? "Offline: showing cached packages."
              : "Offline: showing built-in packages."
          );
          setLoading(false);
        }
        return;
      }

      try {
        const { data, error } = await supabase
          .from("packages")
          .select("*")
          .order("created_at", { ascending: false });

        if (error) throw error;

        const finalData =
          data && data.length > 0 ? data : offlinePackages;

        localStorage.setItem(CACHE_KEY, JSON.stringify(finalData));

        if (!ignore) {
          setPackages(finalData);
          setStatus(
            data && data.length > 0
              ? "Loaded from database."
              : "Database empty: showing built-in packages."
          );
          setLoading(false);
        }
      } catch (err) {
        const fallback =
          cached && cached.length > 0 ? cached : offlinePackages;

        if (!ignore) {
          setPackages(fallback);
          setStatus(
            cached && cached.length > 0
              ? "Database error: showing cached packages."
              : "Database error: showing built-in packages."
          );
          setLoading(false);
        }
      }
    }

    loadPackages();

    return () => {
      ignore = true;
    };
  }, [cached]);

  return (
    <div className="section">
      <div className="container">
        <h1 className="sectionTitle">Packages</h1>

        <p className="sectionSub">
          Browse our available Northern Pakistan tours. Open any package to view
          details and book.
        </p>

        <div className="card" style={{ padding: 12, marginBottom: 14 }}>
          <b>Status:</b>{" "}
          <span style={{ opacity: 0.8 }}>{status}</span>
        </div>

        {loading ? (
          <div className="card" style={{ padding: 14 }}>
            Loading...
          </div>
        ) : (
          <div
            className="grid4"
            style={{ gridTemplateColumns: "repeat(3, 1fr)" }}
          >
            {(packages || []).map((pkg) => (
              <PackageCard key={pkg.id} p={pkg} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
