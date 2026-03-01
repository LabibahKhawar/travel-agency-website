import { Link } from "react-router-dom";

export default function PackageCard({ p }) {
  if (!p) return null;

  const img = p?.images?.[0] || "/assets/package-fallback.jpg";
  const price = Number(p?.price_pkr || 0).toLocaleString();

  return (
    <div className="card" style={{ overflow: "hidden" }}>
      <div style={{ height: 180, background: "rgba(255,255,255,0.03)" }}>
        <img
          src={img}
          alt={p?.title || "Package"}
          style={{ width: "100%", height: "100%", objectFit: "cover" }}
          onError={(e) => (e.currentTarget.src = "/assets/package-fallback.jpg")}
        />
      </div>

      <div style={{ padding: 14 }}>
        <div style={{ display: "flex", justifyContent: "space-between", gap: 10 }}>
          <h3 style={{ margin: 0, fontSize: 18, lineHeight: 1.2 }}>
            {p?.title}
          </h3>

          {p?.featured ? <span className="badge">Featured</span> : null}
        </div>

        <p style={{ margin: "8px 0", color: "rgba(255,255,255,.7)" }}>
          {p?.location} • {p?.duration_days} days
        </p>

        <p style={{ margin: "10px 0", fontWeight: 900 }}>
          PKR {price}
        </p>

        <Link className="btn btnPrimary" to={`/package/${p?.id}`}>
          View details
        </Link>
      </div>
    </div>
  );
}
