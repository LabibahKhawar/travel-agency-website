import React from "react";
import aboutPic from "../assets/aboutus.jpg";

export default function AboutUs() {
  return (
    <div className="section" style={{ 
      background: "linear-gradient(180deg, #ffffff 0%, #f0f9ff 100%)", 
      padding: "30px 0 50px 0",
      overflow: "hidden"
    }}>
      <div className="container">
        <div style={{ textAlign: "center", marginBottom: "30px" }}>
          <h2 style={{ 
            fontSize: "2.8rem", 
            fontWeight: "900", 
            color: "#1e293b", 
            margin: 0,
            letterSpacing: "-1px"
          }}>
            About <span style={{ color: "#0077b6" }}>Us</span>
          </h2>
          
          <div style={{ 
            width: "50px", 
            height: "3px", 
            background: "#0077b6", 
            margin: "10px auto", 
            borderRadius: "10px" 
          }}></div>

          <p style={{ 
            fontSize: "1.05rem", 
            color: "#64748b", 
            maxWidth: "600px", 
            margin: "0 auto",
            lineHeight: "1.4" 
          }}>
            Providing the finest travel experiences across Pakistan's majestic landscapes.
          </p>
        </div>

        <div className="detailLayout" style={{ display: "flex", alignItems: "center", gap: "30px", flexWrap: "wrap" }}> 
          <div className="detailSidebar" style={{ flex: "1 1 350px", position: "relative" }}>
            <div style={{
              position: "relative",
              zIndex: 2,
              borderRadius: "20px",
              overflow: "hidden",
              boxShadow: "0 15px 30px rgba(0, 0, 0, 0.1)",
              lineHeight: 0
            }}>
              <img 
                src={aboutPic} 
                alt="About Northern Tours" 
                style={{ 
                  width: "100%", 
                  height: "auto",
                  display: "block",
                  maxHeight: "400px", 
                  objectFit: "cover"
                }}
              />
            </div>
          </div>
          <div className="detailMain" style={{ flex: "1 1 450px" }}>
            <h3 style={{ fontSize: "1.6rem", fontWeight: "800", color: "#0f172a", marginBottom: "10px" }}>
              Your Journey, Our Passion
            </h3>
            
            <p className="detailDescription" style={{ fontSize: "0.95rem", color: "#475569", lineHeight: "1.6", marginBottom: "20px" }}>
              Northern Tours is dedicated to discovering the soul of a destination. From the turquoise waters of <strong>Attabad Lake</strong> to the lush meadows of <strong>Fairy Meadows</strong>, we handle every detail.
            </p>
            <div style={{ display: "grid", gap: "10px", marginBottom: "25px" }}>
              {["Safe Transport", "Luxury Hotels", "Expert Guides"].map((item, i) => (
                <div key={i} style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                  <div style={{ 
                    width: "20px", height: "20px", borderRadius: "50%", 
                    background: "#e0f2fe", color: "#0077b6", 
                    display: "flex", alignItems: "center", justifyContent: "center",
                    fontSize: "0.7rem", fontWeight: "bold"
                  }}>✓</div>
                  <span style={{ fontWeight: "600", color: "#1e293b", fontSize: "0.9rem" }}>{item}</span>
                </div>
              ))}
            </div>
            <div style={{ 
              display: "flex", 
              gap: "30px", 
              paddingTop: "20px",
              borderTop: "1px solid #e2e8f0" 
            }}>
              <div>
                <h4 style={{ margin: 0, color: "#0077b6", fontSize: "1.8rem", fontWeight: "900" }}>99%</h4>
                <p style={{ margin: 0, fontSize: "0.8rem", color: "#64748b" }}>Positive Reviews</p>
              </div>
              <div>
                <h4 style={{ margin: 0, color: "#0077b6", fontSize: "1.8rem", fontWeight: "900" }}>24/7</h4>
                <p style={{ margin: 0, fontSize: "0.8rem", color: "#64748b" }}>Support</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}