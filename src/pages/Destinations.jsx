import React, { useMemo } from "react";
import { Link } from "react-router-dom";
import { destinationsData, areaToSlug } from "../data/destinationsData";

export default function Destinations() {
  const AREAS = ["Naran", "Swat", "Skardu", "Hunza"];

  const sections = useMemo(() => {
    return AREAS.map(area => ({
      area,
      items: destinationsData.filter(d => d.area === area)
    }));
  }, []);

  return (
    <div className="section" style={{ padding: "40px 0" }}>
      <div className="container">
        <div style={{ textAlign: "center", marginBottom: "50px" }}>
          <h2 className="sectionTitle" style={{ fontWeight: '800', fontSize: '2.8rem' }}>
            All Destinations
          </h2>
          <p className="sectionSub" style={{ fontSize: '1.1rem' }}>
            Browse our complete list of spots in Naran, Swat, Skardu & Hunza.
          </p>
        </div>
        {sections.map(section => (
          <div key={section.area} style={{ marginBottom: "40px" }}>
            <div style={{ 
              marginBottom: "20px", 
              borderLeft: "6px solid #0077b6", 
              paddingLeft: "15px" 
            }}>
              <h3 style={{ fontSize: "1.8rem", fontWeight: "700", color: "#1f2937", margin: 0 }}>
                {section.area} Destinations
              </h3>
            </div>
            <div style={{ 
              display: "grid", 
              gridTemplateColumns: "repeat(4, 1fr)", 
              gap: "20px", 
              width: "100%"
            }}>
              {section.items.map((d) => (
                <div key={d.id} className="hotelCard" style={{ margin: 0 }}>
                  
                  <div className="hotelMedia" style={{ height: "200px" }}>
                    <img src={d.img} alt={d.title} loading="lazy" />
                  </div>

                  <div className="hotelBody" style={{ padding: "15px" }}>
                    <h3 className="hotelTitle" style={{ fontSize: '1.1rem', marginBottom: '5px' }}>{d.title}</h3>
                    <p className="hotelLocation" style={{ fontSize: '0.85rem', color: '#6b7280', marginBottom: '10px' }}>
                      📍 {d.area} • <span style={{ color: "#0077b6", fontWeight: "600" }}>{d.meta}</span>
                    </p>
                    <div style={{ 
                      marginTop: "auto", 
                      paddingTop: "15px", 
                      borderTop: "1px dashed #e5e7eb",
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center"
                    }}>
                      <span style={{ fontSize: "0.85rem", fontWeight: "800" }}>⏱️ {d.duration}</span>
                      
                      <div style={{ display: "flex", gap: "10px" }}>
                        <Link to={`/destination/${d.id}`} style={{ fontSize: "0.85rem", fontWeight: "700", color: "#0077b6" }}>
                          Details
                        </Link>
                        <Link to={`/activities/${areaToSlug(d.area)}`} style={{ fontSize: "0.85rem", fontWeight: "700", color: "#1f2937" }}>
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
        <div style={{ textAlign: "center", marginTop: "40px" }}>
            <Link to="/" className="btn btnPrimary" style={{ padding: "12px 30px" }}>
                Back to Home
            </Link>
        </div>

      </div>
    </div>
  );
}