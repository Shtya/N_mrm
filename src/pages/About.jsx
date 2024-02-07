import React from 'react'
import AboutIntro from "../assets/about/about.webp"
import Img1 from "../assets/about/1.webp"
import Img2 from "../assets/about/2.webp"
import IMG1 from "../assets/bg/35.webp"
import IMG2 from "../assets/bg/38.webp"
import Divider from '../components/Divider'

const data = [
    { img : Img1 ,  title:'Lorem, ipsum dolor.' , desc:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam sint repudiandae perspiciatis reiciendis ratione facilis sed necessitatibus odit accusamus quod?" },
    { img : Img2 ,  title:'Lorem, ipsum dolor.' , desc:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam sint repudiandae perspiciatis reiciendis ratione facilis sed necessitatibus odit accusamus quod?" },
    { img : Img2 ,  title:'Lorem, ipsum dolor.' , desc:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam sint repudiandae perspiciatis reiciendis ratione facilis sed necessitatibus odit accusamus quod?" },
    { img : Img1 ,  title:'Lorem, ipsum dolor.' , desc:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam sint repudiandae perspiciatis reiciendis ratione facilis sed necessitatibus odit accusamus quod?" },
]

const About = () => {
    
  return (
    <div className='about-us'>
        <div className="coverIntro"> <img src={AboutIntro} alt="" /> </div>
        <Divider />

        <div className="mission">
            <div className="bgCover3" style={{background:`url(${IMG1})`}}/>

            <div className="container">
                <div className="coverImg"> <img src={Img1} alt="" /> </div>
                <div className="boxes">
                        <div className="h">Lorem ipsum dolor, sit amet consectetur </div>
                        <div className="p">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Non sunt nisi ad repudiandae repellendus eaque obcaecati veniam, quo repellat soluta totam dolore est! Nostrum, perspiciatis iure officia saepe voluptates eius! Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aut molestiae adipisci dolore consectetur temporibus, commodi dolorem, obcaecati repellat perspiciatis ea voluptatum optio cum dignissimos corrupti, nemo nostrum id quos hic?</div>
                </div>
            </div>
        </div>

        <Divider />

        <div className="goals">
            <div className="bgCover2"><img src={IMG2} alt="" /></div>
            <div className="container">

                {
                data.map((e,index)=> ( 
                    
                        index % 2 == 0 
                        ? <div className="box">
                            <div className="text">
                                <div className="h1-head"> {e.title} </div>
                                <div className="p"> {e.desc} </div>
                            </div>
                            <div className="covernum" style={{background:`url(${e.img})`}} > <div className="num"> 0{index+1} </div> </div>
                        </div>

                        :<div className="box">
                            <div className="covernum" style={{background:`url(${e.img})`}}  > <div className="num"> 0{index+1} </div> </div>
                            <div className="text">
                                <div className="h1-head"> {e.title} </div>
                                <div className="p"> {e.desc} </div>
                            </div>
                        </div>
                    
                 ))
                }

            </div>
        </div>

        
        
{/* 

        <div className="vission">
            <div className="container">
                <div className="coverImg">
                     <img src={Img2} alt="" />
                     <img src={Img2} alt="" />
                     <div className="boxes">
                        <div className="h">Lorem ipsum dolor, sit amet consectetur</div>
                        <div className="p">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Non sunt nisi ad repudiandae repellendus eaque obcaecati veniam, quo repellat soluta totam dolore est! Nostrum, perspiciatis iure officia saepe voluptates eius! Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aut molestiae adipisci dolore consectetur temporibus, commodi dolorem, obcaecati repellat perspiciatis ea voluptatum optio cum dignissimos corrupti, nemo nostrum id quos hic?</div>
                        </div>  
                      </div>
            </div>
        </div> */}
    </div>
  )
}

export default About