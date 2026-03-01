import React from "react";
import { Link } from "react-router-dom";

// ✅ CUSTOM DATA (Is order mein cards show honge)
const orderedDestinations = [
  {
    id: 1,
    title: "Hunza Valley",
    area: "Hunza",
    meta: "Mountains, Forts & Culture",
    img: "https://images.unsplash.com/photo-1548265008-86c8f95c52c0?w=800&q=80", // Passu Cones
  },
  {
    id: 4, // ID match karni chahiye data file se
    title: "Naran Kaghan",
    area: "Naran",
    meta: "Saif-ul-Malook & Rafting",
    img: "https://images.unsplash.com/photo-1566552881519-50c87290f335?w=800&q=80", // Lake
  },
  {
    id: 3,
    title: "Swat Valley",
    area: "Swat",
    meta: "Switzerland of East",
    img: "https://images.unsplash.com/photo-1627905646269-851825703621?w=800&q=80", // Mahodand
  },
  {
    id: 2,
    title: "Skardu Valley",
    area: "Skardu",
    meta: "Cold Desert & Lakes",
    img: "https://images.unsplash.com/photo-1631444067562-904301506319?w=800&q=80", // Deosai
  },
];

export default function Destinations() {
  return (
    <div className="section" style={{ padding: "40px 0" }}>
      <div className="container">
        
        {/* --- Header --- */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "end",
            marginBottom: "40px",
            borderBottom: "1px solid #e5e7eb",
            paddingBottom: "20px"
          }}
        >
          <div>
            <h2 className="sectionTitle" style={{ marginBottom: "5px", fontSize: "2.5rem", fontWeight: "800" }}>
              Top Destinations
            </h2>
            <p className="sectionSub" style={{ color: "#6b7280", margin: 0 }}>
              Explore our most popular locations.
            </p>
          </div>

          <Link className="btn btnOutline" to="/" style={{ borderColor: "#0077b6", color: "#0077b6" }}>
            ← Back Home
          </Link>
        </div>

        {/* --- 🔥 GRID LAYOUT (Specific Order) --- */}
        <div style={{ 
          display: "grid", 
          gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", 
          gap: "30px",
          paddingBottom: "40px"
        }}>
          
          {orderedDestinations.map((d) => (
            <div key={d.id} className="hotelCard" style={{ display: "flex", flexDirection: "column", height: "100%" }}>
              
              {/* 1. Image Area */}
              <div className="hotelMedia" style={{ height: "250px", position: "relative" }}>
                <img 
                  src={d.img} 
                  alt={d.title} 
                  loading="lazy" 
                  style={{ width: "100%", height: "100%", objectFit: "cover" }} 
                />
                
                <span style={{
                  position: "absolute",
                  top: "15px", right: "15px",
                  background: "rgba(255,255,255,0.95)",
                  padding: "6px 14px",
                  borderRadius: "50px",
                  fontSize: "0.85rem",
                  fontWeight: "700",
                  color: "#0077b6",
                  boxShadow: "0 4px 10px rgba(0,0,0,0.1)"
                }}>
                  📍 {d.area}
                </span>
              </div>

              {/* 2. Body Area */}
              <div className="hotelBody" style={{ padding: "25px", flexGrow: 1, display: "flex", flexDirection: "column" }}>
                
                <h3 className="hotelTitle" style={{ fontSize: "1.4rem", marginBottom: "8px" }}>
                  {d.title}
                </h3>
                
                <p style={{ color: "#6b7280", fontSize: "0.95rem", marginBottom: "20px", lineHeight: "1.6" }}>
                  {d.meta}
                </p>

                {/* 3. Action Buttons */}
                <div style={{ marginTop: "auto", display: "flex", gap: "10px" }}>
                  
                  {/* View Details */}
                  <Link 
                    to={`/destination/${d.id}`} 
                    className="btn"
                    style={{ 
                      flex: 1, 
                      textAlign: "center", 
                      background: "#0077b6", 
                      color: "white", 
                      padding: "12px", 
                      fontSize: "0.95rem",
                      borderRadius: "10px",
                      fontWeight: "600"
                    }}
                  >
                    View Details
                  </Link>

                  {/* Activities */}
                  <Link 
                    to={`/activities/${d.area.toLowerCase()}`} 
                    className="btn"
                    style={{ 
                      flex: 1, 
                      textAlign: "center", 
                      background: "#f3f4f6", 
                      color: "#1f2937", 
                      padding: "12px", 
                      fontSize: "0.95rem",
                      borderRadius: "10px",
                      fontWeight: "600",
                      border: "1px solid #e5e7eb"
                    }}
                  >
                    Activities
                  </Link>
                </div>

              </div>
            </div>
          ))}

        </div>

      </div>
    </div>
  );
}
