import React from 'react'
import logo from '../../utils/images/LASlogo1.png'
import productPic from '../../utils/images/LandImg1.png'
// import LtHBtn from '../../globalComponents/LandtoHomeBtn/index'

export default function LandingPage() {
    return( 
        <div>
            <div id="bg">
              {/* <LtHBtn /> */}
              <img src={logo} className='responsive-image Logo1' alt='Lake Avenue Studio Logo'></img>
              <img src={productPic} className='responsive-image' id="landImg1" alt='Picture of arts and crafts'></img>
            </div>
            {/* <img className="responsive-img" id="Logo1" src={logo} alt="Lake Avenue Studio Logo"></img> */}
        </div>
    )
}