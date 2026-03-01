import { useMemo } from "react";
import { Link } from "react-router-dom";
const AREAS = ["Hunza", "Skardu", "Swat", "Naran"];

const hotelsByArea = {
  Hunza: [
    { name: "Luxus Hunza", rating: "4.9", tier: "Luxury" },
    { name: "Serena Inn", rating: "4.8", tier: "Luxury" },
    { name: "Eagle's Nest", rating: "4.7", tier: "Standard" },
    { name: "Darbar Hotel", rating: "4.6", tier: "Standard" },
  ],
  Skardu: [
    { name: "Shangrila Resort", rating: "4.9", tier: "Luxury" },
    { name: "Mountain Lodge", rating: "4.7", tier: "Mid" },
    { name: "Hotel Mashabrum", rating: "4.5", tier: "Standard" },
    { name: "Indus View", rating: "4.4", tier: "Budget" },
  ],
  Swat: [
    { name: "Walnut Heights", rating: "4.8", tier: "Luxury" },
    { name: "Rock City", rating: "4.6", tier: "Mid" },
    { name: "Swat Serena", rating: "4.9", tier: "Luxury" },
    { name: "River View", rating: "4.3", tier: "Budget" },
  ],
  Naran: [
    { name: "Pine Top", rating: "4.5", tier: "Mid" },
    { name: "Grey Walls", rating: "4.6", tier: "Luxury" },
    { name: "Swiss Wood", rating: "4.4", tier: "Standard" },
    { name: "Valley Inn", rating: "4.2", tier: "Budget" },
  ]
};
const HOTEL_IMAGES = {
  Hunza: [
    "https://images.unsplash.com/photo-1618773928121-c32242e63f39?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?auto=format&fit=crop&w=800&q=80",
  ],
  Skardu: [
    "https://images.unsplash.com/photo-1469796466635-455ede028aca?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?auto=format&fit=crop&w=800&q=80",
  ],
  Swat: [
    "https://images.unsplash.com/photo-1584132967334-10e028bd69f7?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1566665797739-1674de7a421a?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1549294413-26f195200c16?auto=format&fit=crop&w=800&q=80",
  ],
  Naran: [
    "https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=800&q=80",
  ],
};

export default function HotelSection() {
  
  const blocks = useMemo(() => {
    return AREAS.map((area) => {
      const rawHotels = (hotelsByArea[area] || []).slice(0, 4);

      const hotels = rawHotels.map((h, idx) => {
        const img = HOTEL_IMAGES[area]?.[idx % (HOTEL_IMAGES[area]?.length || 1)];
        return { ...h, _img: img };
      });

      return { area, hotels };
    });
  }, []);

  return (
    <div className="section" style={{ paddingTop: 0 }}>
      <div className="container">
        <div className="sectionHeader" style={{ textAlign: "center", marginBottom: "40px" }}>
          <h2 className="sectionTitle" style={{ fontWeight: '800', fontSize: '2.5rem' }}>
            Luxury Stays
          </h2>
          <p className="sectionSub">
            Handpicked top-rated hotels for your comfortable stay.
          </p>
        </div>
        {blocks.map((block) => (
          block.hotels.length > 0 && (
            <div key={block.area} style={{ marginBottom: "50px" }}>
              <div style={{ marginBottom: "20px", borderLeft: "5px solid #0077b6", paddingLeft: "15px" }}>
                <h3 style={{ fontSize: "1.5rem", fontWeight: "700", color: "#1f2937", margin: 0 }}>
                  {block.area} Hotels
                </h3>
              </div>
              <div className="grid4">
                {block.hotels.map((h, index) => (
                  <div key={index} className="hotelCard">
                    <div className="hotelMedia">
                      <img src={h._img} alt={h.name} loading="lazy" />
                      <div className="ratingBadge">⭐ {h.rating || "4.8"}</div>
                    </div>
                    <div className="hotelBody">
                      <h3 className="hotelTitle">{h.name}</h3>
                      <p className="hotelLocation" style={{ marginBottom: 0 }}>
                        📍 {block.area} • <span style={{ color: "#0077b6", fontWeight: "600" }}>{h.tier || "Standard"}</span>
                      </p>
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