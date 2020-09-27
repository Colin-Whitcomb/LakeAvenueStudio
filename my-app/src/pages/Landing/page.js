import React from 'react'
import logo from '../../utils/images/LASlogo1.png'
import productPic from '../../utils/images/LandImg1.png'

export default function LandingPage() {
    return( 
        <div>
            <div id="bg">
              <img src={logo} className='responsive-image Logo1'></img>
              {/* <img src={productPic} className='responsive-image' id="landImg1"></img> */}
            </div>
            {/* <img className="responsive-img" id="Logo1" src={logo} alt="Lake Avenue Studio Logo"></img> */}
        </div>
    )
}