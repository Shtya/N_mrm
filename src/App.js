import React  from 'react'
import {Routes , Route} from "react-router-dom"

import Home from "./pages/Home.jsx"
import UP from './components/UP.jsx'
import Navbar from "./components/Navbar.jsx"
import Footer from "./components/Footer.jsx"
import About from './pages/About.jsx'
import Contact from './pages/Contact.jsx'
import Blogs from './pages/Blogs.jsx'
import Services from './pages/Services.jsx'
import Error from './pages/Error.jsx'
import Food from './pages/video/Food.jsx'
import CircleMouseTracker from './components/Circle.jsx'
import Portfolio from './pages/Portfolio.jsx'
import Blog_Details from './components/Blog_Details.jsx'

export const Social_Media = ["https://www.facebook.com/MRMadvertisingDubai" , "https://www.instagram.com/mrmadvertising/" , "https://www.linkedin.com/company/mrm-advertising-media" , "https://api.whatsapp.com/send?phone=+971561384496&text=Hello%2C%20world!"]
export const Animate = "zoom-in"


const App = () => {

  return ( 
    <div className='App'>
      <UP  />
      <Navbar />
      <CircleMouseTracker />
      <Routes>
        <Route  path='/'    element={<Home />} />                           
        <Route  path='/portfolio'    element={<Portfolio />} />                           
        <Route  path='/blogs'    element={<Blogs />} />                           
        <Route  path='/about-us'    element={<About />} />                           
        <Route  path='/contact-us'    element={<Contact />} />                           
        <Route  path='/blogs/:id'    element={<Blog_Details />} />                           
        <Route  path='/services'    element={<Services />} />                           
        <Route  path='*'    element={<Error />} />                           

        <Route  path='/events-photography'    element={<Food />} />                           
        <Route  path='/fashion-photography'    element={<Food />} />                           
        <Route  path='/business-Portraits&Headshots'    element={<Food />} />                           
        <Route  path='/food-photography'    element={<Food />} />                           
        <Route  path='/product-photography'    element={<Food />} />                           
        <Route  path='/automotive-photography'    element={<Food />} />                           
        <Route  path='/hospitality-photography'    element={<Food />} />                           
        <Route  path='/real-Estate-photography'    element={<Food />} />                           
        <Route  path='/trade-Shows-photography'    element={<Food />} />                           

        <Route  path="/exhibitions-conference"     element={<Food />} />                           
        <Route  path="/corporate-films"            element={<Food />} />                           
        <Route  path="/event-filming"              element={<Food />} />                           
        <Route  path="/behind-the-scene-videos"    element={<Food />} />                           
        <Route  path="/fashion-videography"        element={<Food />} />                           
        <Route  path="/promotional-videos"         element={<Food />} />                           
        <Route  path="/short-ads"                  element={<Food />} />                           
        <Route  path="/real-estate-product"        element={<Food />} />                           
      </Routes>
      <Footer />
    </div>

  )
}

export default App




