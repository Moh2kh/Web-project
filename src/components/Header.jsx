import { Link } from "react-router-dom";
import "../index.css";

export default function Header() {
  return (
    <nav className="nav">
      <h2 className="logo">MovieApp</h2>
      <div className="links">
        <Link to="/">Home</Link>
        <Link to="/login">Login</Link>
        <Link to="/register">Register</Link>
        <Link to="/about">About</Link>
      </div>
    </nav>
  );
}