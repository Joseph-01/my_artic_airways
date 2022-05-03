import React from "react";
import Logo from "../images/Vector01.svg"
import "../styles/header.css"


export default function Header() {
    return (
        <div className="div1">
            <nav className="nav-header">
                <div className="div2">
                    <div className="logo-div">
                        <img className="logo" src={Logo} alt="logo" />
                        <p>Artic Travels</p>
                    </div>
                    <div className="nav-ul">
                        <ul className="nav-list">
                            <li>About Us</li>
                            <li>Support</li>
                            <li>Language</li>
                        </ul>
                    </div>
                </div>
                <button className="sign-in">Sign In</button>
            </nav>
        </div>
    )
}