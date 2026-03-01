import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="container" style={{ padding: "18px 0" }}>
      <h2>Page not found</h2>
      <Link className="btn" to="/">Go Home</Link>
    </div>
  );
}
