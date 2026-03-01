import { useEffect, useState } from "react";
import { supabase } from "../lib/supabaseClient";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

export default function PackagesSlider() {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [errorMsg, setErrorMsg] = useState("");

  useEffect(() => {
    const load = async () => {
      setLoading(true);
      setErrorMsg("");

      const { data, error } = await supabase
        .from("packages")
        .select("*")
        .order("featured", { ascending: false })
        .order("created_at", { ascending: false });

      if (error) {
        setErrorMsg(error.message);
        setItems([]);
      } else {
        setItems(data || []);
      }

      setLoading(false);
    };

    load();
  }, []);

  if (loading) {
    return (
      <div className="section">
        <div className="container">
          <p style={{ color: "rgba(255,255,255,.7)" }}>
            Loading packages...
          </p>
        </div>
      </div>
    );
  }

  if (errorMsg) {
    return (
      <div className="section">
        <div className="container">
          <div className="card" style={{ padding: 14 }}>
            <b>Could not load packages</b>
            <p style={{ color: "rgba(255,255,255,.7)" }}>{errorMsg}</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="section">
      <div className="container">
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "end",
            gap: 12,
            flexWrap: "wrap",
            marginBottom: 14,
          }}
        >
          <div>
            <h2 className="sectionTitle" style={{ marginBottom: 6 }}>
              Popular Packages
            </h2>
            <p className="sectionSub" style={{ marginBottom: 0 }}>
              Featured tours selected for comfort and experience.
            </p>
          </div>

          <a className="btn" href="/packages">
            View all
          </a>
        </div>

        <Swiper
          spaceBetween={16}
          slidesPerView={1.1}
          breakpoints={{
            640: { slidesPerView: 2.1 },
            1024: { slidesPerView: 3.1 },
          }}
        >
          {items.map((p) => (
            <SwiperSlide key={p.id}>
              <div className="card">
                <div style={{ height: 190 }}>
                  {p.images?.length ? (
                    <img
                      src={p.images[0]}
                      alt={p.title}
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                      }}
                    />
                  ) : (
                    <div
                      style={{
                        height: "100%",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        color: "rgba(255,255,255,.6)",
                      }}
                    >
                      Image not available
                    </div>
                  )}
                </div>

                <div style={{ padding: 14 }}>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      gap: 10,
                    }}
                  >
                    <h3 style={{ margin: 0, fontSize: 18 }}>{p.title}</h3>
                    {p.featured && <span className="badge">Featured</span>}
                  </div>

                  <p style={{ color: "rgba(255,255,255,.7)", margin: "8px 0" }}>
                    {p.location} • {p.duration_days} days
                  </p>

                  <p style={{ fontWeight: 900, margin: "10px 0" }}>
                    PKR {Number(p.price_pkr).toLocaleString()}
                  </p>

                  <a className="btn btnPrimary" href={`/package/${p.id}`}>
                    View details
                  </a>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}
