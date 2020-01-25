import React from 'react';
import './index.css';

export default function Footer(){
    return (
        <div className="footer">
            <ul>
                <li> <a>GitHub</a> </li>
                <li> <a>Twitter</a> </li>
                <li> <a>Examples</a> </li>
                <li> <a>About</a> </li>
            </ul>
            <p>
            Designed and built with all the love in the world by the 
            <span className="spanflink">Bootstrap team </span>
             with the help of 
             <span className="spanflink">our contributors.</span>
            </p>
            <p>
            Currently v4.4.1. Code licensed
            <span className="spanflink"> MIT </span>
            , docs 
            <span className="spanflink">CC BY 3.0. </span>
            </p>
        </div>
    )
}