import React from "react";
import './Hero.css'
import profile_image from '../../assets/profile_image.jpg'
const Hero=() => {
  return(
    <div  className='hero'>
      <img src={profile_image} alt="" />
      <h1><span>I'm Tamanna Kapoor,</span> a member of GDSC web development team.</h1>
      <p>I am a fresher in Delhi Technological University, Maths and Computing </p>
      
   </div>
  )
}

export default Hero