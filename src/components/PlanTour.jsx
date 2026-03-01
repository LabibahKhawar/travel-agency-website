import { useMemo, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  AREAS,
  recommendPackageAdvanced,
  areaHeroImage,
} from "../data/tourPlannerData";
import act1 from "../assets/1.jpg"; import act2 from "../assets/2.jpg";
import act3 from "../assets/3.jpg"; import act4 from "../assets/4.jpg";
import act5 from "../assets/5.jpg"; import act6 from "../assets/6.jpg";
import act7 from "../assets/7.jpg"; import act8 from "../assets/8.jpg";
import act9 from "../assets/9.jpg"; import act10 from "../assets/10.jpg";
import act11 from "../assets/11.jpg"; import act12 from "../assets/12.jpg";
import act13 from "../assets/13.jpg"; import act14 from "../assets/14.jpg";
import act15 from "../assets/15.jpg"; import act16 from "../assets/16.jpg";

const activityPics = [
  act1, act2, act3, act4, act5, act6, act7, act8, 
  act9, act10, act11, act12, act13, act14, act15, act16
];

export default function PlanTour() {
  const navigate = useNavigate();
  const [area, setArea] = useState("Hunza");
  const [days, setDays] = useState(5);
  const [budget, setBudget] = useState("mid");

  const result = useMemo(() => {
    return recommendPackageAdvanced({ area, days: Number(days), groupType: "family", budget });
  }, [area, days, budget]);

  const inputGroupStyle = { marginBottom: "15px" };
  const labelStyle = { display: "block", fontSize: "13px", fontWeight: "600", color: "#64748b", marginBottom: "5px" };

  return (
    <div style={{ background: "#eff3f6", minHeight: "100vh", padding: "40px 20px", fontFamily: "sans-serif" }}>
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        
        {/* --- HEADER --- */}
        <div style={{ marginBottom: "30px" }}>
          <div style={{ color: "#0077b6", fontSize: "14px", fontWeight: "600" }}>Plan Tour</div>
          <h1 style={{ fontSize: "36px", fontWeight: "900", color: "#1e3a8a", margin: "5px 0" }}>Personalized Tour Plan</h1>
          <p style={{ color: "#64748b" }}>Aapke budget aur pasand ke mutabiq best milabu.</p>
        </div>
        <div className="mobileStack" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "25px", marginBottom: "25px" }}>
          <div style={{ background: "#fff", borderRadius: "20px", padding: "25px", boxShadow: "0 10px 25px rgba(0,0,0,0.05)" }}>
            <div style={{ fontSize: "12px", color: "#94a3b8", fontWeight: "700", textTransform: "uppercase" }}>area</div>
            <h2 style={{ fontSize: "20px", margin: "10px 0", color: "#1e3a8a" }}>AREAS recommenda/Advanced(</h2>
            <div style={{ fontSize: "14px", color: "#64748b", marginBottom: "20px" }}>area Hero image data</div>
            <div style={{ borderRadius: "20px", overflow: "hidden", height: "220px" }}>
              <img src={areaHeroImage(area)} style={{ width: "100%", height: "100%", objectFit: "cover" }} alt={area} />
            </div>
          </div>
          <div style={{ background: "#fff", borderRadius: "20px", padding: "25px", boxShadow: "0 10px 25px rgba(0,0,0,0.05)" }}>
            <h2 style={{ fontSize: "18px", marginBottom: "20px", color: "#334155" }}>Selected Route</h2>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "15px" }}>
              <div style={inputGroupStyle}>
                <label style={labelStyle}>Kahan Jana Hai?</label>
                <select className="inputCustom" value={area} onChange={(e) => setArea(e.target.value)}>{AREAS.map(a => <option key={a}>{a}</option>)}</select>
              </div>
              <div style={inputGroupStyle}>
                <label style={labelStyle}>Kitne Din? (2-12)</label>
                <input className="inputCustom" type="number" value={days} onChange={(e) => setDays(e.target.value)} />
              </div>
            </div>

            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "15px" }}>
              <div style={inputGroupStyle}>
                <label style={labelStyle}>days</label>
                <select className="inputCustom" value={days} onChange={(e) => setDays(e.target.value)}><option value={days}>{days} Days</option></select>
              </div>
              <div style={inputGroupStyle}>
                <label style={labelStyle}>Budget</label>
                <select className="inputCustom" value={budget} onChange={(e) => setBudget(e.target.value)}>
                  <option value="budget">Budget (Sasta)</option>
                  <option value="mid">Mid (Behtreen)</option>
                  <option value="premium">Premium (Luxury)</option>
                </select>
              </div>
            </div>
            <div style={{ background: "#f8fafc", padding: "15px", borderRadius: "12px", border: "1px solid #e2e8f0", marginTop: "10px" }}>
              <div style={{ fontSize: "11px", color: "#94a3b8", marginBottom: "8px" }}>Path / Route</div>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "5px", fontSize: "12px", fontWeight: "700" }}>
                {result.route?.path.slice(0, 4).map((p, i) => (
                  <span key={i} style={{ background: i % 2 === 0 ? "#1e3a8a" : "#0077b6", color: "#fff", padding: "2px 8px", borderRadius: "4px" }}>{p}</span>
                ))}
              </div>
            </div>

            <button onClick={() => navigate('/contact')} style={{ width: "100%", background: "#1e3a8a", color: "#fff", border: "none", padding: "12px", borderRadius: "25px", marginTop: "20px", fontWeight: "700", cursor: "pointer" }}>
              Continue Booking
            </button>
          </div>
        </div>
        <div className="mobileStack" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "25px" }}>
          <div style={{ background: "#fff", borderRadius: "20px", padding: "25px", boxShadow: "0 10px 25px rgba(0,0,0,0.05)" }}>
            <h3 style={{ fontSize: "18px", color: "#1e3a8a", marginBottom: "20px", display: "flex", alignItems: "center", gap: "10px" }}>🏨 Hotels</h3>
            {result.hotels.filter(h => h.priceTier === budget).map((h, i) => (
              <div key={i} style={{ display: "flex", alignItems: "center", gap: "15px", background: "#f8fafc", padding: "12px", borderRadius: "15px", marginBottom: "10px", border: "1px solid #f1f5f9" }}>
                <img src={`https://picsum.photos/seed/${h.name}/200`} style={{ width: "50px", height: "50px", borderRadius: "10px", objectFit: "cover" }} alt="" />
                <div style={{ flex: 1 }}>
                  <div style={{ fontWeight: "700", fontSize: "14px" }}>{h.name}</div>
                  <div style={{ fontSize: "11px", color: "#64748b" }}>{h.notes}</div>
                  <div style={{ color: "#f59e0b", fontSize: "12px" }}>⭐⭐⭐⭐⭐</div>
                </div>
              </div>
            ))}
          </div>
          <div style={{ background: "#fff", borderRadius: "20px", padding: "25px", boxShadow: "0 10px 25px rgba(0,0,0,0.05)" }}>
            <h3 style={{ fontSize: "18px", color: "#1e3a8a", marginBottom: "20px", display: "flex", alignItems: "center", gap: "10px" }}>🏕️ Activities</h3>
            {result.activities.slice(0, 4).map((act, i) => (
              <div key={i} style={{ display: "flex", alignItems: "center", gap: "15px", background: "#f8fafc", padding: "12px", borderRadius: "15px", marginBottom: "10px", border: "1px solid #f1f5f9" }}>
                <img src={activityPics[i % 16]} style={{ width: "50px", height: "50px", borderRadius: "10px", objectFit: "cover" }} alt="" />
                <div style={{ flex: 1 }}>
                  <div style={{ fontWeight: "700", fontSize: "14px" }}>{act}</div>
                  <div style={{ fontSize: "11px", color: "#64748b" }}>Exciting tour activity</div>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>

      <style>{`
        .inputCustom {
          width: 100%;
          padding: 10px;
          border-radius: 8px;
          border: 1px solid #e2e8f0;
          font-size: 14px;
          outline: none;
          background: #fff;
        }
        @media (max-width: 900px) {
          .mobileStack { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </div>
  );
}
