import { Link } from "react-router-dom";
function Navbar() {
  return (
    <nav style={{ background: "#333", padding: "10px" }}>
      <ul style={{ display: "flex", listStyle: "none", gap: "15px", color: "#fff" }}>
        <li><Link to="/" style={{ color: "#fff" }}>Home</Link></li>
        <li><Link to="/about" style={{ color: "#fff" }}>About</Link></li>
        <li><Link to="/events" style={{ color: "#fff" }}>Events</Link></li>
        <li><Link to="/gallery" style={{ color: "#fff" }}>Gallery</Link></li>
        <li><Link to="/feedback" style={{ color: "#fff" }}>Feedback</Link></li>
        <li><Link to="/contact" style={{ color: "#fff" }}>Contact</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;
