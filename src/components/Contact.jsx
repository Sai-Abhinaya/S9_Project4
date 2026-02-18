import { useLocation } from "react-router-dom";
import Navbar from "./Navbar";
import "./contact.css";
import image from "../assets/image.jpg"; // ENSURE THIS FILE EXISTS

function Contact() {
    const location = useLocation();
    const msg = location.state?.course || localStorage.getItem("msg");

    return (
        <>
            <Navbar message={msg} />
            <div className="contact-container">
                <div className="contact-card">
                    <div className="photo-section">
                        <img src={image} alt="Profile" />
                    </div>

                    <div className="info-section">
                        <p style={{color: '#764ba2', fontWeight: 'bold'}}>{msg}</p>
                        <p><span>ID Number:</span> 2500080059</p>
                        <p><span>Name:</span>Sai Abhinaya Gudivada</p>
                        <p><span>Phone:</span>7893359639</p>
                        <p><span>Email:</span> 2500080059@kluniversity.in</p>
                        <p><span>Department:</span> AI and DS</p>
                        <p><span>College:</span> KL UNIVERSITY</p>
                    </div>
                </div>

                <div className="message-card">
                    <h2>Send a Message</h2>
                    <input type="text" placeholder="Your Name" />
                    <input type="email" placeholder="Your Email" />
                    <textarea placeholder="Your Message"></textarea>
                    <button className="glass-btn">Send Message</button>
                </div>
            </div>
        </>
    );
}

export default Contact;