import React from 'react'
import logo from '../../utils/images/LASlogo1.png'
import productPic from '../../utils/images/LandImg1.png'
import { BrowserRouter as Router, Route, Link, Switch, useHistory} from "react-router-dom";
import HomePage from '../Home/index';
import HomeButton from '../../globalComponents/LandtoHomeBtn/index'

export default function LandingPage() {
    

        return( 
            <div>
                <div id="bg">
                <img src={logo} className='responsive-image Logo1' alt='Lake Avenue Studio Logo'></img>
                <img src={productPic} className='responsive-image' id="landImg1" alt='Picture of arts and crafts'></img>
                <HomeButton />
                </div>
            
            </div>
        )
}