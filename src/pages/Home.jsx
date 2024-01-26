import React from 'react'
import Hero from "../components/home/Hero"
import About from '../components/home/About'
import Services from '../components/home/Services'
import Blog from '../components/home/Blog'
import Gallery from '../components/home/Gallery'
import { AnimatePresence } from 'framer-motion'
import Testimonials from '../components/home/Testimonials'
import Contact from '../components/home/Contact-us'

// import FixedImg from "../assets/bg/21.webp"
import FixedImg from "../assets/bg/33.webp"
import Divider from '../components/Divider'


const Home = () => {
  return (
    <div className='Home'>
      <Hero />
      <Divider />

      
      <About />
      <Divider />

      <Services FixedImg={FixedImg} />
      <Divider />


      <AnimatePresence> <Gallery /> </AnimatePresence>
      <Divider />


      <Testimonials FixedImg={FixedImg} />
      <Divider />


      <Blog />
      <Divider />

      
      <Contact FixedImg={FixedImg} />
    </div>
  )
}

export default Home