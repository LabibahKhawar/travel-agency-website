import { useMemo } from "react";
import { Link, useParams } from "react-router-dom";
const VALID = ["hunza", "skardu", "naran", "swat"];

const DATA = {
  hunza: {
    title: "Hunza Activities",
    cover:
      "https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=1600&q=70",
    bullets: [
      "Attabad Lake boating & viewpoints",
      "Passu Cones photography stops",
      "Baltit & Altit Fort heritage visit",
      "Local bazaar & dry fruits",
    ],
  },
  skardu: {
    title: "Skardu Activities",
    cover:
      "https://images.unsplash.com/photo-1549887534-1541e9326642?auto=format&fit=crop&w=1600&q=70",
    bullets: [
      "Shangrila (Lower Kachura) visit",
      "Upper Kachura Lake walk",
      "Deosai jeep safari (seasonal)",
      "Shigar / Khaplu heritage route (optional)",
    ],
  },
  naran: {
    title: "Naran Activities",
    cover:
      "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=1600&q=70",
    bullets: [
      "Saif-ul-Malook Lake day trip",
      "Babusar Top viewpoint",
      "Lulusar Lake stop",
      "Scenic roadtrip photo points",
    ],
  },
  swat: {
    title: "Swat Activities",
    cover:
      "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1600&q=70",
    bullets: [
      "Kalam valley exploration",
      "Mahodand Lake picnic & boating",
      "Malam Jabba chairlift (seasonal)",
      "River-side tea & rest stops",
    ],
  },
};

export default function AreaActivities() {
  const { area } = useParams();

  const safeArea = useMemo(() => {
    const a = (area || "").toLowerCase();
    return VALID.includes(a) ? a : null;
  }, [area]);

  if (!safeArea) {
    return (
      <div className="container" style={{ padding: "18px 0" }}>
        <div className="card" style={{ padding: 16 }}>
          <b>Area not found</b>
          <p style={{ marginTop: 8, opacity: 0.75 }}>
            Please go back and choose Hunza, Skardu, Naran or Swat.
          </p>
          <Link className="btn btnPrimary" to="/">
            Back to Home
          </Link>
        </div>
      </div>
    );
  }

  const info = DATA[safeArea];

  return (
    <div className="container" style={{ padding: "18px 0" }}>
      <div className="card" style={{ overflow: "hidden" }}>
        <div style={{ position: "relative", height: 260 }}>
          <img
            src={info.cover}
            alt={info.title}
            style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
          />
          <div
            style={{
              position: "absolute",
              inset: 0,
              background: "linear-gradient(180deg, rgba(0,0,0,.05), rgba(0,0,0,.65))",
            }}
          />
          <div style={{ position: "absolute", left: 18, right: 18, bottom: 14, color: "#fff" }}>
            <h1 style={{ margin: 0, fontSize: 28 }}>{info.title}</h1>
            <p style={{ margin: "6px 0 0", opacity: 0.9 }}>
              Suggested activities for your tour plan.
            </p>
          </div>
        </div>

        <div style={{ padding: 16 }}>
          <b>Highlights</b>
          <ul style={{ margin: "10px 0 0", paddingLeft: 18, color: "rgba(15,23,42,.86)" }}>
            {info.bullets.map((b) => (
              <li key={b} style={{ marginBottom: 6 }}>
                {b}
              </li>
            ))}
          </ul>

          <div style={{ marginTop: 14, display: "flex", gap: 10, flexWrap: "wrap" }}>
            <Link className="btn" to="/">
              Back
            </Link>
            <Link className="btn btnPrimary" to="/contact">
              Get Custom Plan
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
