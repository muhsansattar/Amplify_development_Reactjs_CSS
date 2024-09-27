import amplifyIcon from '../../assets/amplifyicon.png';
import Mail from '../../assets/mail.png';
import Call from '../../assets/phone.png';
import navbardata from "../navbar/navbarData";
import './footer.css';
import React from "react";
const Footer = () => {
    return (
        <div className='footer'>
            <div className="footer-container">
                <div className="footer-top">
                    <img src={amplifyIcon} alt="Amplify Icon" />
                    <nav>
                        <ul>
                            {navbardata.map((item, index) => (
                                <li key={index}>{item.name}</li>
                            ))}
                        </ul>
                    </nav>
                </div>
                <div className="footer-center">
                    <div className='footer-email'>
                        <span><img src={Mail} alt="mail" /></span>
                        <span><p>info@amplifydevelopment.com</p></span>
                    </div>
                    <div className='footer-call'>
                        <span><img src={Call} alt="call" /></span>
                        <span><p>(917) 719-1484</p></span>
                    </div>
                </div>
                <div className="footer-bottom">
                    <span>© 2024 Amplify Development</span>
                </div>
            </div>
        </div>
    );
};
export default Footer;