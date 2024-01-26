import React from 'react'
import AboutIntro from "../assets/about/about.webp"
import Img1 from "../assets/about/1.webp"
import Img2 from "../assets/about/2.webp"
import FixedImg from "../assets/bg/36.webp"
import Divider from '../components/Divider'

const About = () => {
  return (
    <div className='about-us'>
        <div className="coverIntro"> <img src={AboutIntro} alt="" /> </div>
        <Divider />

        
        <div className="mission">
            <div className="bgCover"><img src={FixedImg} alt="" /></div>
            <div className="container">
                <div className="coverImg"> <img src={Img1} alt="" /> </div>
                <div className="boxes">
                        <div className="h">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Recusandae, dolor!</div>
                        <div className="p">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Non sunt nisi ad repudiandae repellendus eaque obcaecati veniam, quo repellat soluta totam dolore est! Nostrum, perspiciatis iure officia saepe voluptates eius! Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aut molestiae adipisci dolore consectetur temporibus, commodi dolorem, obcaecati repellat perspiciatis ea voluptatum optio cum dignissimos corrupti, nemo nostrum id quos hic?</div>
                </div>
            </div>
        </div>
        <div className="vission">
            <div className="container">
                <div className="boxes">
                        <div className="h">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Recusandae, dolor!</div>
                        <div className="p">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Non sunt nisi ad repudiandae repellendus eaque obcaecati veniam, quo repellat soluta totam dolore est! Nostrum, perspiciatis iure officia saepe voluptates eius! Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aut molestiae adipisci dolore consectetur temporibus, commodi dolorem, obcaecati repellat perspiciatis ea voluptatum optio cum dignissimos corrupti, nemo nostrum id quos hic?</div>
                </div>
                <div className="coverImg"> <img src={Img2} alt="" /> </div>
            </div>
        </div>
    </div>
  )
}

export default About