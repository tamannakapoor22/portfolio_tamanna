import React from "react";
import './About.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import profile_img from '../../assets/about_profile1.jpg'
const About=() => {
  return(
    <div id='about' className="about">
      <div className="about-title">
        <h1>About me</h1>
       <img src={theme_pattern} alt="" />
      </div>
      <div className="about-section">
        <div className="about-left">
          <img src={profile_img} alt="" />
        </div>
        <div className="about-right">
        <div className="about-para">
          <p>I am born in Punjab,Ludhiana.From 2006-2012  my whole family shifted to China.Since then we have been living in Gurugram.</p>
          <p>Apart from being web developer enthusiast, I like to play sports like basketball and will always be a Maahi fan!</p>
        </div>
        <div className="about-skills">
          <div className="about-skill"><p>Badminton</p><hr style={{width:"50%"}}></hr></div>
          <div className="about-skill"><p>Basketball</p><hr style={{width:"70%"}}></hr></div>
          <div className="about-skill"><p>Cricket</p><hr style={{width:"60%"}}></hr></div>
          <div className="about-skill"><p>Table Tennis</p><hr style={{width:"50%"}}></hr></div>
        </div>
        </div>
      </div>
     </div>
  )
}

export default About