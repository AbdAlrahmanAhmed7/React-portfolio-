import React from "react";
import { SocialIcon } from 'react-social-icons'
import "./hero.css";

function Hero(){
    return (
        <section className="hero-section">
            <div className="right-sec">
                <h1 className="name">I'm
                 Abdalrahman Ahmed <br /> front end <br /> developer</h1>
                <p>I'm a Front-End Developer specialized in building <br /> fast and interactive web applications <br />
                 using React, HTML, CSS, and JavaScript. <br />
                 responsive, and user-friendly designs</p>
                 < SocialIcon  network = "github" bgColor="none"  url = "https://github.com/AbdAlrahmanAhmed7"  / >
                 < SocialIcon  network = "whatsapp" bgColor="none" url = "https://github.com/AbdAlrahmanAhmed7"  / >
                 < SocialIcon  network = "instagram" bgColor="none" url = "https://github.com/AbdAlrahmanAhmed7"  / >
                 < SocialIcon  network = "linkedin" bgColor="none" url = "https://github.com/AbdAlrahmanAhmed7"  / >
            </div>
            <div className="left-sec"></div>
        </section>
    );
}

export default Hero;
