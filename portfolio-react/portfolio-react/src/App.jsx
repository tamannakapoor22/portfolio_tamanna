import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import Hero from './Components/Hero/hero'
import About from './Components/About/About'
import Footer from './Components/Footer/Footer'

const App= () => {
  return(
    <div>
     <Navbar/>
     <Hero/>
     <About/>
     <Footer/>
    </div>
  ) 
}
export default App