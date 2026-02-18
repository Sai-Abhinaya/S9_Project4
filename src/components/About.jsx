import { useLocation } from "react-router-dom";
import Navbar from "./Navbar";
import "./styles.css";

function About() {
    const location = useLocation();
    const msg = location.state?.course || localStorage.getItem("msg");

    return (
        <>
            <Navbar message={msg} />
            <div className="main-content">
                <h1>About Page</h1>
                <p className="message-text">Passing Data: {msg}</p>
            </div>
        </>
    );
}

export default About;