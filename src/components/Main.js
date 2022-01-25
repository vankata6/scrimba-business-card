import React from "react";

function Main() {
    return(
        <>
            <h2 className="main-name">Ivan Kolev</h2>
            <h5 className="main-occupation">Web developer</h5>
            <h6 className="main-site">https://github.com/vankata6</h6>
            <button className="main-mail-button">Email</button>
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
        </>
    )
}

export default Main;