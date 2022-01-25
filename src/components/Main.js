import React from "react";
import { HiMail } from "react-icons/hi";

function Main() {
    return(
        <div className="main">
            <h2 className="main-name">Ivan Kolev</h2>
            <h5 className="main-occupation">Web developer</h5>
            <a href="//github.com/vankata6"><h6 className="main-site">https://github.com/vankata6</h6></a>
            <a href="mailto: ikkolev95@gmail.com">
                <button className="main-mail-button">
                    <HiMail className="main-mail-icon"/>
                    Email
                </button>
            </a>
            <section>
                <h3>About</h3>
                <p>I am a frontend developer with a particular interest <br/> 
                in making things simple and automating daily <br/> 
                tasks. I try to keep up with security and best <br/> 
                practices, and am always looking for new things to learn.</p>
            </section>
            <section>
                <h3>Interests</h3>
                <p>Food expert. Music scholar. Reader. Internet <br/> 
                fanatic. Bacon buff. Entrepreneur. Travel geek. Pop <br/> 
                culture ninja. Coffee fanatic.</p>
            </section>
        </div>
    )
}

export default Main;