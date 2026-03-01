import { useEffect, useMemo, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { supabase } from "../lib/supabaseClient";
import { offlinePackages } from "./data/offlinePackages";

const CACHE_KEY = "nt_cached_packages_v1";

export default function PackagesCarousel() {
  const [packages, setPackages] = useState([]);
  const railRef = useRef(null);
  const [drag, setDrag] = useState({ active: false, startX: 0, scrollLeft: 0 });

  const isOnline = useMemo(() => {
    return typeof navigator !== "undefined" ? navigator.onLine : true;
  }, []);

  const readCache = () => {
    try {
      const raw = localStorage.getItem(CACHE_KEY);
      return raw ? JSON.parse(raw) : null;
    } catch { return null; }
  };

  const writeCache = (data) => {
    try { localStorage.setItem(CACHE_KEY, JSON.stringify(data)); } catch {}
  };

  useEffect(() => {
    const init = async () => {
      if (!isOnline) {
        const cached = readCache();
        setPackages(cached || offlinePackages);
        return;
      }
      try {
        const { data, error } = await supabase
          .from("packages")
          .select("id,title,location,duration_days,price_pkr,images,featured,created_at")
          .order("featured", { ascending: false })
          .limit(20);

        if (error) throw error;
        if (data && data.length > 0) {
          setPackages(data);
          writeCache(data);
        } else {
          const cached = readCache();
          setPackages(cached || offlinePackages);
        }
      } catch (err) {
        const cached = readCache();
        setPackages(cached || offlinePackages);
      }
    };
    init();
  }, [isOnline]);

  const scrollByCards = (dir = 1) => {
    if (railRef.current) {
      railRef.current.scrollBy({ left: dir * 340, behavior: "smooth" });
    }
  };

  const onMouseDown = (e) => {
    if (!railRef.current) return;
    setDrag({ active: true, startX: e.pageX - railRef.current.offsetLeft, scrollLeft: railRef.current.scrollLeft });
  };
  const onMouseMove = (e) => {
    if (!railRef.current || !drag.active) return;
    e.preventDefault();
    const x = e.pageX - railRef.current.offsetLeft;
    const walk = (x - drag.startX) * 1.5;
    railRef.current.scrollLeft = drag.scrollLeft - walk;
  };
  const endDrag = () => setDrag(s => ({ ...s, active: false }));

  return (
    <div className="packagesWrapper">
      <div className="carouselHead centeredHead" style={{ marginBottom: '20px', marginTop: '10px' }}>
        <div style={{ textAlign: 'center', width: '100%' }}>
            <h2 className="sectionTitle" style={{ fontWeight: '800', fontSize: '2.5rem', marginBottom: '10px' }}>
              Top Packages
            </h2>
        </div>

        <div className="carouselControls">
          <button className="iconBtn" onClick={() => scrollByCards(-1)}>‹</button>
          <button className="iconBtn" onClick={() => scrollByCards(1)}>›</button>
        </div>
      </div>
      <div
        ref={railRef}
        className={`carouselRail ${drag.active ? "isDragging" : ""}`}
        onMouseDown={onMouseDown}
        onMouseLeave={endDrag}
        onMouseUp={endDrag}
        onMouseMove={onMouseMove}
      >
        {packages.map((p) => {
          const img = p.images && p.images[0] ? p.images[0] : "/assets/package-fallback.jpg";
          
          return (
            <div key={p.id} className="tourCard">
              <div className="tourMedia">
                <img src={img} alt={p.title} draggable="false" />
              </div>

              <div className="tourBody">
                <div>
                  <h3 className="tourTitle">{p.title}</h3>
                  <div className="tourLocation">📍 {p.location} • {p.duration_days} Days</div>
                </div>

                <div className="tourBottom">
                  <div className="tourPrice">Rs {p.price_pkr.toLocaleString()}</div>
                  <Link to={`/package/${p.id}`} className="tourCta">
                    View Details
                  </Link>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

