import { Link } from "react-router-dom";
import "./styles.css";

function Navbar({ message }) {
    return (
        <nav className="head">
            <div className="nav-links">
                <Link to="/" state={{ course: message }}>Main</Link>
                <Link to="/home" state={{ course: message }}>Home</Link>
                <Link to="/about" state={{ course: message }}>About</Link>
                <Link to="/contact" state={{ course: message }}>Contact</Link>
            </div>
        </nav>
    );
}

export default Navbar;