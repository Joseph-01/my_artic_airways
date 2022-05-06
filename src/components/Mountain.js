import React from 'react'
import PicOne from "../images/chill1 (1).png"
import PicTwo from "../images/chill1 (2).png"
import PicThree from "../images/chill1 (3).png"
import "../styles/Mountain.css"

function Mountain() {
    return (
        <div className='mountain'>
            <div className='mountain-div1'>
                
                <img src={PicOne} alt="pic-one" />
                <p>Mountain Resort</p>
            </div>
            <div className='mountain-div2'>
                
                <img src={PicTwo} alt="pic-one" />
                <p>Fuji Mountain</p>
            </div>
            <div className='mountain-div3'>
                
                <img src={PicThree} alt="pic-one" />
                <p>Freezing WinterLake</p>
            </div>
        </div>
    )
}

export default Mountain