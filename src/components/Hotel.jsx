import { useMemo } from "react";
import { Link } from "react-router-dom";
import { hotelsByArea, AREAS } from "../data/tourPlannerData";
const HOTEL_IMAGES = {
  Hunza: [
    "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1501117716987-c8e1ecb2101f?auto=format&fit=crop&w=800&q=80",
  ],
  Skardu: [
    "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?auto=format&fit=crop&w=800&q=80",
  ],
  Swat: [
    "https://images.unsplash.com/photo-1551918120-9739cb430c6d?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1549294413-26f195200c16?auto=format&fit=crop&w=800&q=80",
  ],
  Naran: [
    "https://images.unsplash.com/photo-1576678927484-cc907957088c?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1540541338287-41700207dee6?auto=format&fit=crop&w=800&q=80",
  ],
};
const getPrice = (tier) => {
  if (tier === "luxury") return "25,000";
  if (tier === "mid") return "15,000";
  return "8,000";
};
export default function HotelSection() {
  const blocks = useMemo(() => {
    return AREAS.map((area) => {
      const rawHotels = (hotelsByArea[area] || []).slice(0, 4); 

      const hotels = rawHotels.map((h, idx) => {
        const img = h.img || HOTEL_IMAGES[area]?.[idx % (HOTEL_IMAGES[area]?.length || 1)];
        return {
          ...h,
          _img: img,
          _price: getPrice(h.tier || "mid")
        };
      });

      return { area, hotels };
    });
  }, []);

  return (
    <div className="hotelSectionWrapper">
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
                    <div className="ratingBadge">
                      ⭐ {h.rating || "4.8"}
                    </div>
                  </div>
                  <div className="hotelBody">
                    <h3 className="hotelTitle">{h.name}</h3>
                    <p className="hotelLocation">📍 {block.area} • {h.tier || "Standard"}</p>
                    <div className="hotelFooter">
                      <div>
                        <span className="priceLabel">Starting from</span>
                        <div className="hotelPrice">PKR {h._price}</div>
                      </div>
                      <button className="btn-book">
                        Book Now
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )
      ))}

    </div>
  );
}


