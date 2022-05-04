import React from 'react'
import NikeLogo from "../images/Group06.svg"
import StarLogo from "../images/Group07.svg"
import AppleLogo from "../images/apple-pay-logo-svgrepo-com 106.svg"
import IntraxLogo from "../images/Group08.svg"
import MastercardLogo from "../images/mastercard-2-logo-svgrepo-com 109.svg"
import "../styles/Partners.css"

function Partners() {
    return (
        <div className='partners'>
            <div><img src={NikeLogo} alt="logo" /></div>
            <div><img src={AppleLogo} alt="logo" /></div>
            <div><img src={StarLogo} alt="logo" /></div>
            <div><img src={IntraxLogo} alt="logo" /></div>
            <div><img src={MastercardLogo} alt="" /></div>
        </div>
    )
}

export default Partners