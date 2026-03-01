import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <div className="footer" style={{ 
      backgroundColor: "#f8fafc", 
      color: "#1e293b", 
      padding: "50px 0 20px 0",
      borderTop: "1px solid #e2e8f0" 
    }}>
      <div className="container">
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
          gap: "40px",
        }}>
          <div>
            <div style={{ 
              fontSize: "1.6rem", 
              fontWeight: "900", 
              marginBottom: "15px", 
              color: "#0f172a",
              display: "flex",
              alignItems: "center",
              gap: "10px"
            }}>
              <span style={{ color: "#0077b6" }}>🏔️</span> Northern Tours
            </div>
            <p style={{ color: "#64748b", lineHeight: "1.6", fontSize: "0.95rem" }}>
              Explore the hidden paradises of Pakistan with comfort and safety. We craft journeys that stay in your heart forever.
            </p>
            <div style={{ display: "flex", gap: "12px", marginTop: "20px" }}>
              {["🌐", "📷", "📘", "🐦"].map((icon, i) => (
                <div key={i} style={{ 
                  width: "32px", height: "32px", borderRadius: "8px", 
                  background: "#e0f2fe", color: "#0077b6", display: "flex", 
                  alignItems: "center", justifyContent: "center", cursor: "pointer",
                  transition: "0.3s", fontSize: "1rem"
                }} 
                onMouseOver={(e) => {
                  e.currentTarget.style.background = "#0077b6";
                  e.currentTarget.style.color = "#fff";
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.background = "#e0f2fe";
                  e.currentTarget.style.color = "#0077b6";
                }}
                >
                  {icon}
                </div>
              ))}
            </div>
          </div>
          <div>
            <div style={{ fontSize: "1.1rem", fontWeight: "800", marginBottom: "15px", color: "#0f172a" }}>Explore</div>
            <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
              {[
                { name: "Home", path: "/" },
                { name: "Packages", path: "/packages" },
                { name: "Destinations", path: "/destinations" },
                { name: "Contact", path: "/contact" }
              ].map((link) => (
                <Link 
                  key={link.name}
                  to={link.path} 
                  style={{ 
                    color: "#64748b", 
                    textDecoration: "none", 
                    fontSize: "0.9rem",
                    transition: "0.2s",
                    width: "fit-content"
                  }}
                  onMouseOver={(e) => e.currentTarget.style.color = "#0077b6"}
                  onMouseOut={(e) => e.currentTarget.style.color = "#64748b"}
                >
                  {link.name}
                </Link>
              ))}
              <a href="#about-section" style={{ color: "#64748b", textDecoration: "none", fontSize: "0.9rem" }}>About Us</a>
            </div>
          </div>
          <div>
            <div style={{ fontSize: "1.1rem", fontWeight: "800", marginBottom: "15px", color: "#0f172a" }}>Support</div>
            <div style={{ display: "flex", flexDirection: "column", gap: "12px", color: "#64748b", fontSize: "0.9rem" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                <span style={{ color: "#0077b6" }}>📞</span> +92 300 1234567
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                <span style={{ color: "#0077b6" }}>✉️</span> info@northerntours.pk
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                <span style={{ color: "#0077b6" }}>📍</span> Islamabad, Pakistan
              </div>
            </div>
          </div>
        </div>
        <div style={{
          marginTop: "40px",
          paddingTop: "20px",
          borderTop: "1px solid #e2e8f0",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexWrap: "wrap",
          gap: "10px",
          color: "#94a3b8",
          fontSize: "0.8rem"
        }}>
          <div>© {new Date().getFullYear()} Northern Tours. All rights reserved.</div>
          <div style={{ display: "flex", gap: "15px" }}>
            <span>Privacy</span>
            <span>Terms</span>
          </div>
        </div>
      </div>
    </div>
  );
}
