import React from "react";
import CodingImage from '../../assets/codingimage.png';
import IconsData from "./iconsData";
import './coding.css';
import codingTextData from "./codingTextData";
const Cooding = () => {
    return (
        <div className="cooding-container">
            <div className="cooding-text">
                <div className="upper-text">
                    <p id="we">We are</p>
                    <h1>Amplify Development</h1>
                    <p id="precision">Precision coding for your ideal site.</p>
                    <div className="cooding-icons">
                        {
                            IconsData.map((item, index) => (
                                <img src={item.img} alt={item.alt} key={index} />
                            ))
                        }
                    </div>
                    <div className="cooding-buttons">
                        <button className="cooding-contact"><a href="#">Contact Us</a></button>
                        <button className="cooding-portfolio"><a href="#">Portfolio</a></button>
                    </div>
                </div>
                <div className="lower-text">

                    {codingTextData.map((item, index) => (
                        <div className="lower-text-data" key={index}>
                            <span>{item.value}</span>
                            <p id="p">{item.text}</p>
                        </div>
                    ))}

                </div>
            </div>
            <div className="cooding-img">
                    <img src={CodingImage} alt="Languages codes" />
            </div>
        </div>
    );
};
export default Cooding;