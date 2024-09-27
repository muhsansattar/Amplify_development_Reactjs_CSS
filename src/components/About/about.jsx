import React from "react";
import './about.css';
const AboutUs = () => {
    return (
        <div className="about-contaianer">
            <h2>About Us</h2>
            <p className="excellence">Crafting excellence, together</p>
            <div className="amplify-paragraph">
               <p><span>Amplify Development</span> leads the way in custom web solutions, catering to diverse needs.
                 Our expert designers bring your ideas to life with top-notch UI/UX designs.
                  Our developers excel in the latest software, from basic programming to advanced CRM and SaaS platforms.
                   Specializing in custom coding, we enhance popular e-commerce platforms like Shopify, 
                   Magento, and WooCommerce. From WordPress to Amazon AWS, we craft multi-language sites 
                   and custom CRMs tailored to your needs.</p>
            </div>
            <button className="contact-btn"><a href="#">Contact Us</a></button>
        </div>
    );
};
export default AboutUs;