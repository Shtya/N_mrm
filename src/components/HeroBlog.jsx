import React from 'react'
import ImgFixed from "../assets/bg/bg1.webp"
import Intro from "../assets/blogs/intro.jpg"

const HeroBlog = () => {
  return (
    <div className='HeroBlog' >
        <div className="bgCover2"> <img src={ImgFixed} alt="" /> </div>
        <div className="container">

            <div className="coverImg"> <img src={Intro} alt="" /> </div>
            <div className="text">
                <div className="author"> created by administrator </div>
                <div className="title"> Lorem ipsum dolor sit amet consectetur adipisicing elit. </div>
                <div className="p">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quas ullam repellat voluptates tenetur facilis? Velit quisquam porro quia doloremque maiores possimus soluta, quibusdam dignissimos ea quo rem nostrum veritatis atque.</div>
            </div>
            <a href='#next' class="fa-solid fa-angles-down"></a>
        </div>
    </div>
  )
}

export default HeroBlog