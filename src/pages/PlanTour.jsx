import { useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AREAS, recommendPackageAdvanced, areaHeroImage } from "../data/tourPlannerData";

// ✅ Images Import
import d1 from "../assets/d1.jpg"; import d2 from "../assets/d2.jpg"; import d3 from "../assets/d3.jpg";
import d4 from "../assets/d4.jpg"; import d5 from "../assets/d5.jpg"; import d6 from "../assets/d6.jpg";
import d7 from "../assets/d7.jpg"; import d8 from "../assets/d8.jpg"; import d9 from "../assets/d9.jpg";
import d10 from "../assets/d10.jpg"; import d11 from "../assets/d11.jpg"; import d12 from "../assets/d12.jpg";
import d13 from "../assets/d13.jpg"; import d14 from "../assets/d14.jpg"; import d15 from "../assets/d15.jpg"; 
import d16 from "../assets/d16.jpg";

const destPics = [d1, d2, d3, d4, d5, d6, d7, d8, d9, d10, d11, d12, d13, d14, d15, d16];

export default function PlanTour() {
  const navigate = useNavigate();
  const [area, setArea] = useState("Hunza");
  const [days, setDays] = useState(5);
  const [persons, setPersons] = useState(2);
  const [totalBudget, setTotalBudget] = useState(80000);

  const dynamicPlan = useMemo(() => {
    const pppd = Number(totalBudget) / (Number(persons) * Number(days));
    let tier = pppd > 15000 ? "premium" : pppd > 7500 ? "mid" : "budget";

    const areaMapping = {
      Hunza: { offset: 0, destinations: ["Attabad Lake", "Baltit Fort", "Passu Cones", "Eagle Nest", "Hussaini Bridge", "Khunjerab"] },
      Skardu: { offset: 4, destinations: ["Shangrila Lake", "Deosai Plains", "Upper Kachura", "Katpana Desert", "Shigar Fort", "Manthoka"] },
      Swat: { offset: 8, destinations: ["Malam Jabba", "Kalam Valley", "Mahodand Lake", "Fizagat Park", "White Palace", "Madyan"] },
      Naran: { offset: 12, destinations: ["Saif-ul-Malook", "Babusar Top", "Lulusar Lake", "Pyala Lake", "Kunhar River", "Jalalkhad"] }
    };

    const currentArea = areaMapping[area] || areaMapping.Hunza;
    const itemCount = tier === "budget" ? 2 : tier === "mid" ? 4 : 6;
    const activities = ["Sightseeing", "Photography", "Jeep Safari", "Local Food", "Hiking", "Boating"].slice(0, itemCount);

    const res = recommendPackageAdvanced({ area, days, budget: tier });

    return {
      tier: tier.toUpperCase(),
      pppd: Math.round(pppd),
      dests: currentArea.destinations.slice(0, itemCount),
      acts: activities,
      imgStart: currentArea.offset,
      route: res?.route?.path || ["Islamabad", "Gateway", area]
    };
  }, [area, days, persons, totalBudget]);

  return (
    <div style={{ background: "#f1f5f9", minHeight: "100vh", padding: "40px 20px" }}>
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        
        {/* 📸 TOP HERO IMAGE (Added this as per your demand) */}
        <div style={{ width: "100%", height: "350px", borderRadius: "30px", overflow: "hidden", marginBottom: "30px", position: "relative", boxShadow: "0 15px 35px rgba(0,0,0,0.1)" }}>
          <img src={areaHeroImage(area)} style={{ width: "100%", height: "100%", objectFit: "cover" }} alt={area} />
          <div style={{ position: "absolute", bottom: "0", left: "0", right: "0", background: "linear-gradient(transparent, rgba(0,0,0,0.7))", padding: "40px", color: "#fff" }}>
             <h1 style={{ margin: 0, fontSize: "40px", fontWeight: "900" }}>{area} Expedition</h1>
             <p style={{ margin: 0, opacity: 0.9 }}>Personalized {dynamicPlan.tier} Itinerary</p>
          </div>
        </div>

        {/* --- DYNAMIC HEADER --- */}
        <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "30px" }} className="mobileStack">
          <div>
            <h2 style={{ color: "#1e3a8a", fontWeight: "800", margin: 0 }}>Smart Demand Planner</h2>
            <p style={{ color: "#64748b" }}>Optimized for <b>{persons} Persons</b> and <b>{days} Days</b></p>
          </div>
          <div style={{ background: "#1e3a8a", color: "#fff", padding: "12px 25px", borderRadius: "15px", textAlign: "right" }}>
            <div style={{ fontSize: "11px", opacity: 0.8 }}>BUDGET PER HEAD</div>
            <div style={{ fontSize: "20px", fontWeight: "800" }}>Rs. {dynamicPlan.pppd.toLocaleString()}</div>
          </div>
        </div>

        {/* --- BUDGET & PERSONS CONTROLS --- */}
        <div style={{ background: "#fff", padding: "30px", borderRadius: "25px", boxShadow: "0 10px 30px rgba(0,0,0,0.05)", marginBottom: "30px" }}>
          <div style={{ display: "grid", gridTemplateColumns: "1.5fr 1fr 0.6fr 0.6fr", gap: "20px" }} className="mobileStack">
            <div>
              <label style={{fontSize: "11px", fontWeight: "900", color: "#94a3b8"}}>TOTAL BUDGET DEMAND (PKR)</label>
              <input type="range" min="20000" max="500000" step="5000" value={totalBudget} onChange={e => setTotalBudget(e.target.value)} style={{width: "100%", accentColor: "#1e3a8a", marginTop: "10px"}} />
              <div style={{textAlign: "center", fontWeight: "900", color: "#1e3a8a", fontSize: "18px"}}>Rs. {Number(totalBudget).toLocaleString()}</div>
            </div>
            <div>
              <label style={{fontSize: "11px", fontWeight: "900", color: "#94a3b8"}}>DESTINATION</label>
              <select className="ui-select" value={area} onChange={e => setArea(e.target.value)}>{AREAS.map(a => <option key={a}>{a}</option>)}</select>
            </div>
            <div><label style={{fontSize: "11px", fontWeight: "900", color: "#94a3b8"}}>PERSONS</label><input className="ui-select" type="number" value={persons} onChange={e => setPersons(e.target.value)} min="1" /></div>
            <div><label style={{fontSize: "11px", fontWeight: "900", color: "#94a3b8"}}>DAYS</label><input className="ui-select" type="number" value={days} onChange={e => setDays(e.target.value)} min="2" /></div>
          </div>
        </div>

        {/* --- DYNAMIC RESULTS --- */}
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "25px", marginBottom: "40px" }} className="mobileStack">
          <div className="panel">
            <h3 style={{ color: "#0077b6", marginBottom: "20px" }}>📍 {area} Destinations</h3>
            {dynamicPlan.dests.map((d, i) => (
              <div key={i} className="list-item">
                <img src={destPics[(dynamicPlan.imgStart + i) % 16]} alt={d} />
                <span style={{fontWeight: "700", color: "#334155"}}>{d}</span>
              </div>
            ))}
          </div>
          <div className="panel">
            <h3 style={{ color: "#059669", marginBottom: "20px" }}>🎡 Planned Activities</h3>
            {dynamicPlan.acts.map((a, i) => (
              <div key={i} className="list-item">
                <img src={destPics[(dynamicPlan.imgStart + i + 2) % 16]} alt={a} />
                <span style={{fontWeight: "700", color: "#334155"}}>{a}</span>
              </div>
            ))}
          </div>
        </div>

        {/* --- ALTERNATE PACKAGES --- */}
        <h2 style={{ color: "#1e3a8a", marginBottom: "20px" }}>🌟 Alternate Regions</h2>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "20px" }}>
          {AREAS.filter(a => a !== area).slice(0, 3).map((altArea, idx) => (
            <div key={idx} className="alt-card" onClick={() => { setArea(altArea); window.scrollTo(0,0); }}>
              <img src={areaHeroImage(altArea)} style={{ width: "100%", height: "180px", objectFit: "cover" }} />
              <div style={{ padding: "20px" }}>
                <h4 style={{ margin: "0 0 10px 0", color: "#1e3a8a" }}>Explore {altArea} Plan</h4>
                <button className="alt-btn">Switch Plan</button>
              </div>
            </div>
          ))}
        </div>

      </div>

      <style>{`
        .ui-select { width: 100%; padding: 12px; border-radius: 12px; border: 1px solid #cbd5e1; margin-top: 8px; font-weight: bold; outline: none; }
        .panel { background: #fff; padding: 25px; border-radius: 25px; box-shadow: 0 10px 30px rgba(0,0,0,0.03); }
        .list-item { display: flex; align-items: center; gap: 15px; margin-bottom: 12px; background: #f8fafc; padding: 10px; border-radius: 15px; border: 1px solid #f1f5f9; }
        .list-item img { width: 55px; height: 55px; border-radius: 12px; object-fit: cover; }
        .alt-card { background: #fff; border-radius: 20px; overflow: hidden; box-shadow: 0 10px 25px rgba(0,0,0,0.05); cursor: pointer; transition: 0.3s; }
        .alt-card:hover { transform: translateY(-5px); }
        .alt-btn { width: 100%; padding: 10px; border: 2px solid #1e3a8a; background: transparent; color: #1e3a8a; border-radius: 25px; font-weight: 800; }
        @media (max-width: 850px) { .mobileStack { grid-template-columns: 1fr !important; } }
      `}</style>
    </div>
  );
}