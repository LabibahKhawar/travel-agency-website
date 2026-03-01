import React, { useMemo } from "react";
import { Link } from "react-router-dom";
import { destinationsData, areaToSlug } from "../data/destinationsData";

export default function DestinationsCarousel() {
  // Ordered Areas
  const AREAS = ["Naran", "Swat", "Skardu", "Hunza"];

  const sections = useMemo(() => {
    return AREAS.map(area => ({
      area,
      items: destinationsData.filter(d => d.area === area)
    }));
  }, []);

  return (
    <div className="section" style={{ padding: "10px 0" }}>
      <div className="container">
        
        {/* Main Header */}
        <div className="sectionHeader" style={{ textAlign: "center", marginBottom: "30px" }}>
          <h2 className="sectionTitle" style={{ fontWeight: '800', fontSize: '2.5rem' }}>
            Top Destinations
          </h2>
          <p className="sectionSub">Explore the wonders of Northern Pakistan.</p>
        </div>

        {/* Section Blocks by Area */}
        {sections.map(section => (
          <div key={section.area} style={{ marginBottom: "35px" }}>
            
            {/* City Heading */}
            <div style={{ 
              marginBottom: "15px", 
              borderLeft: "5px solid #0077b6", 
              paddingLeft: "15px" 
            }}>
              <h3 style={{ fontSize: "1.5rem", fontWeight: "700", color: "#1f2937", margin: 0 }}>
                {section.area} Destinations
              </h3>
            </div>

            {/* ✅ FIXED GRID: 4 Cards in one line */}
            <div style={{ 
              display: "grid", 
              gridTemplateColumns: "repeat(4, 1fr)", // 🔥 Force exactly 4 columns
              gap: "15px", 
              width: "100%"
            }}>
              {section.items.map((d) => (
                <div key={d.id} className="hotelCard" style={{ margin: 0 }}>
                  
                  <div className="hotelMedia" style={{ height: "180px" }}> {/* Height thori kam ki taake row mein fit aye */}
                    <img src={d.img} alt={d.title} loading="lazy" />
                  </div>

                  <div className="hotelBody" style={{ padding: "12px" }}>
                    <h3 className="hotelTitle" style={{ fontSize: '1rem', marginBottom: '3px' }}>{d.title}</h3>
                    <p className="hotelLocation" style={{ fontSize: '0.8rem', color: '#6b7280', marginBottom: '10px' }}>
                      📍 {d.area} • <span style={{ color: "#0077b6" }}>{d.meta}</span>
                    </p>

                    {/* Bottom Info Section */}
                    <div style={{ 
                      marginTop: "auto", 
                      paddingTop: "10px", 
                      borderTop: "1px dashed #e5e7eb",
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center"
                    }}>
                      <span style={{ fontSize: "0.8rem", fontWeight: "800" }}>⏱️ {d.duration}</span>
                      
                      <div style={{ display: "flex", gap: "8px" }}>
                        <Link to={`/destination/${d.id}`} style={{ fontSize: "0.8rem", fontWeight: "700", color: "#0077b6" }}>
                          Details
                        </Link>
                        <Link to={`/activities/${areaToSlug(d.area)}`} style={{ fontSize: "0.8rem", fontWeight: "700", color: "#1f2937" }}>
                          Plan ➝
                        </Link>
                      </div>
                    </div>
                  </div>

                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}