import React from 'react';
import "./index.css";
import logo from "../../imagens/bootstrap-stack.png";

export default function Main() {
    return (
        <div className="main">
            <div className="pmain">
                <div className="p1main">
                    <h1>Bootstrap</h1>
                    <p>Build responsive, mobile-first projects on the web with the world’s most popular front-end component library.</p>
                    <p>Bootstrap is an open source toolkit for developing with HTML, CSS, and JS. Quickly prototype your ideas or build your entire app with our Sass variables and mixins, responsive grid system, extensive prebuilt components, and powerful plugins built on jQuery.</p>
                    <div className="button">
                        <button className="started"> Get Started</button>
                        <button className="download"> Download</button>
                    </div>
                    <span>Currently v4.4.1</span>
                </div>
                <div>
                <img
                    src={logo}
                />
                </div>
            </div>
            <div className="smain">

            </div>
        </div>
    )
}