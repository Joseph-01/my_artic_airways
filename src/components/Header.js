import React from "react";
import Logo from "../images/Vector01.svg"
import BookHerePlane from "../images/flight_black_24dp 110.svg"
// images for oveflow part
import LocationLogo from "../images/map-pin02.svg"
import PersonLogo from "../images/user03.svg"
import CalenderLogo from "../images/calendar04.svg"
import ArrowDownLogo from "../images/Vector05.svg"
import "../styles/header.css"


export default function Header() {
    return (
        <div className="div1">
            <nav className="nav-header">
                <div className="div2">
                    <div className="logo-div">
                        <span className="img-span"><img className="logo" src={Logo} alt="logo" /></span>

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
            <div className="div3">
                <p className="plan">Plan the perfect winter trip</p>
                <p className="more-plan">Easily plan your ideal ski trip from home with the help of professionals</p>
                <button className="book-here">Book Here</button>
            </div>
            <div className="overflow">
                <div className="overflow-div1">
                    <div>
                        <img src={LocationLogo} alt="location-img" />
                        <p>LOCATION</p>
                    </div>
                    <p><span className="span">Iceland</span><img src={ArrowDownLogo} alt="arrow-down-logo" /></p>
                </div>
                <div className="overflow-div2">
                    <div>
                        <img src={PersonLogo} alt="location-img" />
                        <p>PERSONS</p>
                    </div>
                    <p><span className="span">4 Persons</span><img src={ArrowDownLogo} alt="arrow-down-logo" /></p>
                </div>
                <div className="overflow-div3">
                    <div>
                        <img src={CalenderLogo} alt="check in" />
                        <p>CHECK IN</p>
                    </div>
                    <p><span className="span">12 January 2022</span><img src={ArrowDownLogo} alt="arrow-down-logo" /></p>
                </div>
                <div className="overflow-div4">
                    <div>
                        <img src={CalenderLogo} alt="check in" />
                        <p>CHECK OUT</p>
                    </div>
                    <p><span className="span">18 January 2022</span><img src={ArrowDownLogo} alt="arrow-down-logo" /></p>
                </div>
                <button className="book">Book trip<img src={BookHerePlane} alt="book" /></button>
            </div>
        </div>
    )
}