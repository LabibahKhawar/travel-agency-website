import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div className="nav">
      <div className="container">
        <div className="navInner">
          <div className="brand">
            <Link to="/">Northern Tours</Link>
            <span className="badge">Travel Agency</span>
          </div>

          <div className="links">
            <Link to="/">Home</Link>
            <Link to="/packages">Packages</Link>
            <Link to="/destinations">Destinations</Link>
            <Link to="/hotels">Hotels</Link>
            <Link to="/activities">Activities</Link>
            <Link to="/plan">Plan Tour</Link>
            <Link to="/contact">Contact</Link>
           
          </div>

          <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
            <span className="badge">📞 +92 300 1234567</span>
            <span className="badge">Islamabad</span>
          </div>
        </div>
      </div>
    </div>
  );
}
