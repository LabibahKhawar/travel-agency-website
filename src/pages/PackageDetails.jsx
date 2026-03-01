import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { supabase } from "../lib/supabaseClient";
import BookingForm from "../components/BookingForm";

export default function PackageDetails() {
  const { id } = useParams();
  const [pkg, setPkg] = useState(null);
  const [loading, setLoading] = useState(true);
  const [errorMsg, setErrorMsg] = useState("");

  useEffect(() => {
    const load = async () => {
      setLoading(true);
      setErrorMsg("");

      const { data, error } = await supabase
        .from("packages")
        .select("*")
        .eq("id", id)
        .single();

      if (error) {
        setErrorMsg(error.message);
        setPkg(null);
      } else {
        setPkg(data);
      }

      setLoading(false);
    };

    load();
  }, [id]);

  if (loading) {
    return <div className="container" style={{ padding: "18px 0" }}>Loading...</div>;
  }

  if (errorMsg || !pkg) {
    return (
      <div className="container" style={{ padding: "18px 0" }}>
        <div className="card" style={{ padding: 14 }}>
          Could not load package.
        </div>
      </div>
    );
  }

  return (
    <div className="container" style={{ padding: "18px 0" }}>
      <div style={{ display: "grid", gridTemplateColumns: "2fr 1fr", gap: 16 }}>
        <div className="card">
          <img
            src={pkg.images?.[0]}
            alt={pkg.title}
            style={{ width: "100%", height: 280, objectFit: "cover" }}
          />
          <div style={{ padding: 14 }}>
            <h2 style={{ marginTop: 0 }}>{pkg.title}</h2>
            <p style={{ color: "rgba(255,255,255,.7)" }}>
              {pkg.location} • {pkg.duration_days} days
            </p>
            <p style={{ fontWeight: 900, fontSize: 18 }}>
              PKR {Number(pkg.price_pkr).toLocaleString()}
            </p>
          </div>
        </div>

        <BookingForm packageId={pkg.id} />
      </div>
    </div>
  );
}
