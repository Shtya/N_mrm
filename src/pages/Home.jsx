import React from 'react'
import Hero from "../components/home/Hero"
import About from '../components/home/About'
import Services from '../components/home/Services'
import Blog from '../components/home/Blog'
import Gallery from '../components/home/Gallery'
import Testimonials from '../components/home/Testimonials'
import Contact from '../components/home/Contact-us'

// import FixedImg from "../assets/bg/21.webp"
import FixedImg from "../assets/bg/3.webp"
import Divider from '../components/Divider'
import Hero2 from '../components/Hero2'


const Home = () => {
    
  return (
    <div className='Home'>
      <Hero2 />
      {/* <Hero /> */}
      <Divider />

      
      <About />
      <Divider />

      <Services FixedImg={FixedImg} />
      <Divider />


      <Gallery /> 
      <Divider />


      <Testimonials FixedImg={FixedImg} />
      <Divider />


      <Blog />
      <Divider />

      
      <Contact notbg={false} FixedImg={FixedImg} />
    </div>
  )
}

export default Home