import React from 'react';
import { useHistory } from "react-router-dom";
import logo from '../../utils/images/LASlogo1.png'


export default function HomeButton() {
  const history = useHistory();

  function handleClick() {
    history.push("/home");
  }

  return (

    <img src={logo} onClick={handleClick} className='responsive-image Logo1' alt='Lake Avenue Studio Logo'></img>
 
  );
}