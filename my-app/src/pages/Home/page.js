import React from 'react'
import HomeP1 from '../../utils/images/HomeP1.png'
import HomeP2 from '../../utils/images/HomeP2.png'
import HomeP3 from '../../utils/images/HomeP3.png'
import Logo2 from '../../utils/images/Logo2.png'
import NavBar2 from '../../globalComponents/Navbar2/index'

export default function HomePage() {
    return( 
        <div>
            <img src={Logo2} className='responsive-image col s4'  alt='Picture of arts and crafts'></img>
            <NavBar2 />
                <div id="bg2">
                    <div className='container'>
                        <div className='row'>
                            <img src={HomeP1} className='responsive-image col s4' id="homeImg1" alt='Picture of arts and crafts'></img>
                            <img src={HomeP2} className='responsive-image col s4' id="homeImg1" alt='Picture of arts and crafts'></img>
                            <img src={HomeP3} className='responsive-image col s4' id="homeImg1" alt='Picture of arts and crafts'></img>
                            <img src={HomeP3} className='responsive-image col s4' id="homeImg1" alt='Picture of arts and crafts'></img>
                        </div>
                    </div>
                </div>
        </div>
    )
}