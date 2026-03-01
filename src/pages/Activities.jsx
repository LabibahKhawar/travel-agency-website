import React, { useMemo } from "react";
import { Link } from "react-router-dom";
import img1 from "../assets/1.jpg";
import img2 from "../assets/2.jpg";
import img3 from "../assets/3.jpg";
import img4 from "../assets/4.jpg";
import img5 from "../assets/5.jpg";
import img6 from "../assets/6.jpg";
import img7 from "../assets/7.jpg";
import img8 from "../assets/8.jpg";
import img9 from "../assets/9.jpg";
import img10 from "../assets/10.jpg";
import img11 from "../assets/11.jpg";
import img12 from "../assets/12.jpg";
import img13 from "../assets/13.jpg";
import img14 from "../assets/14.jpg";
import img15 from "../assets/15.jpg";
import img16 from "../assets/16.jpg";

const AREAS = ["Hunza", "Skardu", "Swat", "Naran"];

const activitiesByArea = {
  Hunza: [
    { name: "Boating at Attabad", type: "Water Sports", relatedTrip: "Hunza 5 Days Premium Tour", image: img1 },
    { name: "Visit Altit Fort", type: "Culture", relatedTrip: "History & Culture Tour", image: img2 },
    { name: "Hussaini Bridge", type: "Adventure", relatedTrip: "Ultimate Hunza Adventure", image: img3 },
    { name: "Passu Cones View", type: "Sightseeing", relatedTrip: "Hunza Road Trip", image: img4 },
  ],
  Skardu: [
    { name: "Deosai Jeep Safari", type: "Adventure", relatedTrip: "Skardu & Deosai 7 Days", image: img5 },
    { name: "Boating at Shangrila", type: "Relaxation", relatedTrip: "Skardu Honeymoon Trip", image: img6 },
    { name: "Cold Desert Safari", type: "Thriller", relatedTrip: "Skardu Adventure", image: img7 },
    { name: "Manthokha Waterfall", type: "Nature", relatedTrip: "Nature Lovers Tour", image: img8 },
  ],
  Swat: [
    { name: "Malam Jabba Skiing", type: "Snow Sports", relatedTrip: "Swat Winter Special", image: img9 },
    { name: "Mahodand Lake Trip", type: "Nature", relatedTrip: "Swat Kalam Tour", image: img10 },
    { name: "Visit White Palace", type: "History", relatedTrip: "Royal Swat Experience", image: img11 },
    { name: "Trout Fishing River", type: "Relaxation", relatedTrip: "Relaxing Swat Getaway", image: img12 },
  ],
  Naran: [
    { name: "Rafting in Kunhar", type: "Water Sports", relatedTrip: "Naran Kaghan 4 Days", image: img13 },
    { name: "Lake Saif-ul-Malook", type: "Boating", relatedTrip: "Naran Family Trip", image: img14 },
    { name: "Babusar Top View", type: "Sightseeing", relatedTrip: "Northern Loop Trip", image: img15 },
    { name: "Lalazar Jeep Track", type: "Adventure", relatedTrip: "Offroad Naran Tour", image: img16 },
  ]
};

export default function Activities() {
  
  const blocks = useMemo(() => {
    return AREAS.map((area) => {
      const acts = (activitiesByArea[area] || []).slice(0, 4);
      return { area, acts };
    });
  }, []);

  return (
    <div style={{ padding: "10px 0 40px 0", background: "#fff" }}> 
      <div className="container">
        <div className="sectionHeader" style={{ textAlign: "center", marginBottom: "15px" }}> 
          <h2 className="sectionTitle" style={{ fontWeight: '800', fontSize: '2.5rem', marginBottom: '0px' }}>
            Adventure & Fun
          </h2>
          <p className="sectionSub" style={{ margin: 0 }}>
            Don't just visit, experience the thrill.
          </p>
        </div>
        {blocks.map((block) => (
          block.acts.length > 0 && (
            <div key={block.area} style={{ marginBottom: "20px" }}> 
              
              <div style={{ marginBottom: "10px", borderLeft: "5px solid #0077b6", paddingLeft: "10px" }}> 
                <h3 style={{ fontSize: "1.4rem", fontWeight: "700", color: "#1f2937", margin: 0 }}>
                  {block.area} Activities
                </h3>
              </div>
              <div style={{ 
                display: "grid", 
                gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))", 
                gap: "10px" 
              }}>
                {block.acts.map((a, index) => (
                  <div key={index} className="hotelCard">
                    
                    <div className="hotelMedia">
                      <img src={a.image} alt={a.name} loading="lazy" />
                    </div>

                    <div className="hotelBody">
                      <h3 className="hotelTitle" style={{fontSize: '1rem', marginBottom: '3px'}}>{a.name}</h3>
                      <p className="hotelLocation" style={{ marginBottom: "5px", fontSize: '0.85rem' }}>
                        📍 {block.area} • <span style={{ color: "#0077b6", fontWeight: "600" }}>{a.type}</span>
                      </p>

                      <div style={{ 
                        marginTop: "auto", 
                        paddingTop: "8px", 
                        borderTop: "1px dashed #e5e7eb",
                        display: "flex",
                        flexDirection: "column",
                        gap: "2px"
                      }}>
                        <span style={{ fontSize: "0.65rem", color: "#6b7280", textTransform: "uppercase", fontWeight: "600" }}>
                          Included in Package:
                        </span>
                        <Link to="/packages" style={{ 
                          fontSize: "0.8rem", 
                          fontWeight: "700", 
                          color: "#0077b6", 
                          display: "flex", 
                          alignItems: "center", 
                          gap: "3px" 
                        }}>
                          {a.relatedTrip} ➝
                        </Link>
                      </div>

                    </div>
                  </div>
                ))}
              </div>
            </div>
          )
        ))}

      </div>
    </div>
  );
}
