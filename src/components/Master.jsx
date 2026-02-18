import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "./Navbar";
import "./styles.css";

function Master() {
    const navigate = useNavigate();
    const [message, setMessage] = useState(localStorage.getItem("msg") || "");

    const handleBtnclick = () => {       
        navigate("/home", { state: { course: message } });        
    };

    return (
        <>
            <Navbar message={message} />
            <div className="main-content">
                <h1>Main Page</h1>
                <div className="input-container">
                    <textarea
                        className="main-textarea"
                        placeholder="Enter Message"
                        value={message}
                        onChange={(e) => {
                            setMessage(e.target.value);
                            localStorage.setItem("msg", e.target.value);
                        }}
                    />
                    <br />
                    <button onClick={handleBtnclick} className="glass-btn">Go to Home</button>
                </div>
            </div>
        </>
    );
}

export default Master;