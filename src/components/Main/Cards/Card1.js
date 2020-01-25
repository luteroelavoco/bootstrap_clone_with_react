import React from 'react';
import './card.css';

export default function Card1() {
    return (
        <div className="card">
            <span><i class="fa fa-download" aria-hidden="true"></i></span>
            <h1> Installation </h1>
            <p>Include Bootstrap’s source Sass and JavaScript files via npm, Composer or Meteor. Package managed installs don’t include documentation, but do include our build system and readme.</p>
            <span style={{ paddingBottom: '20px' }}>  <span className="spand"> $ </span> npm
            <span className="spaninstall"> install </span>
                bootstrap</span>

            
                <span> <span className="spand"> $ </span> gem <span className="spaninstall"> install </span> bootstrap   <span className="spaninstall"> -v </span>4.4.1</span>
           
            <span className="spanspace">__________________</span>
            <button> Read Installation Docs </button>
        </div>
    );
}