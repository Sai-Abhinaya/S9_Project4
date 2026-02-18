import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import Navbar from "./Navbar";
import "./styles.css";

function Home() {
    const location = useLocation();
    const msg = location.state?.course || localStorage.getItem("msg");

    useEffect(() => {
        const stored = localStorage.getItem("msg");
        if(stored) alert("Stored Message: " + stored);
    }, []);

    return (
        <>
            <Navbar message={msg} />
            <div className="main-content">
                <h1>Home Page</h1>
                <div className="message-display">
                    <p>Message Received: <strong>{msg}</strong></p>
                </div>
            </div>
        </>
    );
}

export default Home;