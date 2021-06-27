import React from 'react';
import { styled } from "styled-components";
import home1 from '../img/home1.png'; // DO NOT use curly braces as iamges are NOT a named export like from an exported function - its only a filetype



const AboutSection = () => {
    return (
        <div>
            <div className="description">
                <div className="title">
                    <div className="hide">
                        <h2>We work to make</h2>
                    </div>

                    <div className="hide">
                        <h2>your <span>dreams</span> come</h2>
                    </div>

                    <div className="hide">
                        <h2>true</h2>
                    </div>
                </div>

                <p>Contact us for any photography or any videography ideas that you have</p>
                <button>Contact Us</button>
            </div>

            <div className="image">
                <img src={home1} alt="hero image guy" />
            </div>

        </div>
    )
}

export default AboutSection
