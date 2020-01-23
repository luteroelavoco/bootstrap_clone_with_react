import React from 'react';
import "./index.css";
import logo from "../../imagens/logo.JPG";
import Menu from "./Menu";

export default function Headers() {
    return (
        <div className="header">
            <div className="navbrand">
                <a href="#">
                    <img
                        src={logo}
                        style={{ width: '39px', height: '37px' }}
                    />
                </a>
            </div>
            <Menu />
            <div className="aditional">
                <span> v4.4
                <i className="material-icons">
                        arrow_drop_down
                </i>
                </span>
                    <i className="fa fa-github" aria-hidden="true"></i>
                    <i className="fa fa-twitter" aria-hidden="true"></i>
                    <i className="fa fa-slack" aria-hidden="true"></i>
                    <i className="fa fa-circle-o-notch" aria-hidden="true"></i>
                <button> Download </button>
            </div>
        </div>
    )
}