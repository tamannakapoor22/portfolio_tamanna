import React from 'react'
import './Navbar.css'
import logo from '../../assets/gdsc-image.svg'
import underline from '../../assets/nav_underline.svg'
const Navbar = () => {


  return(
    <div className='navbar'>
      <img src={logo} alt="" />
      <ul className="nav-menu">
        <li className="home">Home</li>
        <li className="about">About me</li>
        <li className="connect">Connect with me</li>
        
      </ul>
      
    </div>
  ) 
}
export default Navbar