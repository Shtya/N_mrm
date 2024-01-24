import React from 'react'
import Hero from "../components/home/Hero"
import About from '../components/home/About'
import Services from '../components/home/Services'
import Blog from '../components/home/Blog'
import Gallery from '../components/home/Gallery'
import { AnimatePresence } from 'framer-motion'
import Testimonials from '../components/home/Testimonials'
import Contact from '../components/home/Contact-us'


const Home = () => {
  return (
    <div className='Home'>
      <Hero />
      <About />
      <Services />
      <AnimatePresence> <Gallery /> </AnimatePresence>
      <Testimonials />
      <Blog />
      <Contact />
    </div>
  )
}

export default Home