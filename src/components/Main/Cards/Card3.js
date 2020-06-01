import React from 'react';
import './card.css';
import theme from "../../../imagens/bootstrap-themes.png"

export default function Card3() {
    return (
        <div className="card">
            <span><i className="fa fa-bolt" aria-hidden="true"></i></span>
            <h1> Official Themes </h1>
            <p>Take Bootstrap 4 to the next level with official premium themes—toolkits built on Bootstrap with new components and plugins, docs, and build tools.</p>
            
            <div>
                <img 
                   
                    src={theme}
                    />
            </div>
                
           
            <span className="spanspace">__________________</span>
            <button> Browse Themes </button>
        </div>
    );
}