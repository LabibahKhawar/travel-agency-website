import { useMemo } from "react";
import { Link } from "react-router-dom";

const AREAS = ["Hunza", "Skardu", "Swat", "Naran"];
const activitiesByArea = {
  Hunza: [
    { 
      name: "Boating at Attabad", 
      type: "Water Sports", 
      relatedTrip: "Hunza 5 Days Premium Tour",
      image: "/activity1.jpg" 
    },
    { 
      name: "Visit Altit Fort", 
      type: "Culture", 
      relatedTrip: "History & Culture Tour",
      image: "/activity2.jpg"
    },
    { 
      name: "Hussaini Bridge", 
      type: "Adventure", 
      relatedTrip: "Ultimate Hunza Adventure",
      image: "/activity1.jpg" 
    },
    { 
      name: "Passu Cones View", 
      type: "Sightseeing", 
      relatedTrip: "Hunza Road Trip",
      image: "/activity2.jpg" 
    },
  ],
  Skardu: [
    { 
      name: "Deosai Jeep Safari", 
      type: "Adventure", 
      relatedTrip: "Skardu & Deosai 7 Days",
      image: "/activity3.jpg"
    },
    { 
      name: "Boating at Shangrila", 
      type: "Relaxation", 
      relatedTrip: "Skardu Honeymoon Trip",
      image: "/activity4.jpg"
    },
    { 
      name: "Cold Desert Safari", 
      type: "Thriller", 
      relatedTrip: "Skardu Adventure",
      image: "/activity3.jpg"
    },
    { 
      name: "Manthokha Waterfall", 
      type: "Nature", 
      relatedTrip: "Nature Lovers Tour",
      image: "/activity4.jpg"
    },
  ],
  Swat: [
    { 
      name: "Malam Jabba Skiing", 
      type: "Snow Sports", 
      relatedTrip: "Swat Winter Special",
      image: "/activity5.jpg"
    },
    { 
      name: "Mahodand Lake Trip", 
      type: "Nature", 
      relatedTrip: "Swat Kalam Tour",
      image: "/activity6.jpg"
    },
    { 
      name: "Visit White Palace", 
      type: "History", 
      relatedTrip: "Royal Swat Experience",
      image: "/activity5.jpg"
    },
    { 
      name: "Trout Fishing River", 
      type: "Relaxation", 
      relatedTrip: "Relaxing Swat Getaway",
      image: "/activity6.jpg"
    },
  ],
  Naran: [
    { 
      name: "Rafting in Kunhar", 
      type: "Water Sports", 
      relatedTrip: "Naran Kaghan 4 Days",
      image: "/activity7.jpg"
    },
    { 
      name: "Lake Saif-ul-Malook", 
      type: "Boating", 
      relatedTrip: "Naran Family Trip",
      image: "/activity8.jpg"
    },
    { 
      name: "Babusar Top View", 
      type: "Sightseeing", 
      relatedTrip: "Northern Loop Trip",
      image: "/activity7.jpg"
    },
    { 
      name: "Lalazar Jeep Track", 
      type: "Adventure", 
      relatedTrip: "Offroad Naran Tour",
      image: "/activity8.jpg"
    },
  ]
};

export default function ActivitiesSection() {
  
  const blocks = useMemo(() => {
    return AREAS.map((area) => {
      const acts = (activitiesByArea[area] || []).slice(0, 4);
      return { area, acts };
    });
  }, []);

  return (
    <div className="section" style={{ paddingTop: 0 }}>
      <div className="container">
        <div className="sectionHeader" style={{ textAlign: "center", marginBottom: "40px" }}>
          <h2 className="sectionTitle" style={{ fontWeight: '800', fontSize: '2.5rem' }}>
            Adventure & Fun
          </h2>
          <p className="sectionSub">
            Don't just visit, experience the thrill of Northern Pakistan.
          </p>
        </div>
        {blocks.map((block) => (
          block.acts.length > 0 && (
            <div key={block.area} style={{ marginBottom: "50px" }}>
              <div style={{ marginBottom: "20px", borderLeft: "5px solid #0077b6", paddingLeft: "15px" }}>
                <h3 style={{ fontSize: "1.5rem", fontWeight: "700", color: "#1f2937", margin: 0 }}>
                  {block.area} Activities
                </h3>
              </div>
              <div className="grid4">
                {block.acts.map((a, index) => (
                  <div key={index} className="hotelCard">
                    <div className="hotelMedia">
                      <img 
                        src={a.image} 
                        alt={a.name} 
                        loading="lazy"
                        onError={(e) => {
                          e.target.style.display = 'none';
                          console.log("Image not found:", a.image); 
                        }} 
                      />
                    </div>
                    <div className="hotelBody">
                      <h3 className="hotelTitle" style={{fontSize: '1.1rem'}}>{a.name}</h3>
                      <p className="hotelLocation" style={{ marginBottom: "15px" }}>
                        📍 {block.area} • <span style={{ color: "#0077b6", fontWeight: "600" }}>{a.type}</span>
                      </p>
                      <div style={{ 
                        marginTop: "auto", 
                        paddingTop: "15px", 
                        borderTop: "1px dashed #e5e7eb",
                        display: "flex",
                        flexDirection: "column",
                        gap: "5px"
                      }}>
                        <span style={{ fontSize: "0.75rem", color: "#6b7280", textTransform: "uppercase", fontWeight: "600", letterSpacing: "0.5px" }}>
                          Included in Package:
                        </span>
                        <Link to="/packages" style={{ 
                          fontSize: "0.9rem", 
                          fontWeight: "700", 
                          color: "#0077b6", 
                          display: "flex", 
                          alignItems: "center", 
                          gap: "5px" 
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