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

import Imgblog from "../assets/home/test/  (7).webp"

const blog = [
  {img : Imgblog ,  title:"Events photography" , desc:"From corporate gatherings to unique celebrations, we capture the essence of your events, ensuring that every moment is preserved." , data:"15" , data2:"May"},
  {img : Imgblog ,  title:"Fashion photography" , desc:"Our fashion photography services offer high-quality images that showcase your products or the latest trends." , data:"16" , data2:"May"},
  {img : Imgblog ,  title:"Business Portraits & Headshots" , desc:"Make a lasting impression with professional headshots and portraits that reflect the essence of your business." , data:"17" , data2:"May"},
  {img : Imgblog ,  title:"Food photography" , desc:"Showcase your culinary creations with mouthwatering food photography that entices your audience." , data:"18" , data2:"May"},
  {img : Imgblog ,  title:"Product photography" , desc:"Highlight the details and features of your products with our product photography services." , data:"17" , data2:"May"},
  {img : Imgblog ,  title:"Automotive photography" , desc:"From sleek cars to rugged vehicles, our automotive photography captures the beauty and power of automobiles." , data:"18" , data2:"May"},
]

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


      <Blog blog={blog} title="Latest Blogs" />
      <Divider />

      
      <Contact notbg={false} FixedImg={FixedImg} />
    </div>
  )
}

export default Home