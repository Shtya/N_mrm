import React from 'react'
import Img1 from "../assets/bg/10.webp"


const Hero2 = () => {

    const itmes = [
        {path:"/" ,img:Img1 , h1:"Ahmed" , h2:"Design" , h3:"Animal" , desc:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi maxime praesentium rerum molestias! Alias ratione, repellat vero doloremque aut repudiandae ducimus incidunt tempora illum, rerum, odio repellendus sed. Nulla, sapiente!"  },
        {path:"/" ,img:Img1 , h1:"Ahmed" , h2:"Design" , h3:"Animal" , desc:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi maxime praesentium rerum molestias! Alias ratione, repellat vero doloremque aut repudiandae ducimus incidunt tempora illum, rerum, odio repellendus sed. Nulla, sapiente!"  },
        {path:"/" ,img:Img1 , h1:"Ahmed" , h2:"Design" , h3:"Animal" , desc:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi maxime praesentium rerum molestias! Alias ratione, repellat vero doloremque aut repudiandae ducimus incidunt tempora illum, rerum, odio repellendus sed. Nulla, sapiente!"  },
        {path:"/" ,img:Img1 , h1:"Ahmed" , h2:"Design" , h3:"Animal" , desc:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi maxime praesentium rerum molestias! Alias ratione, repellat vero doloremque aut repudiandae ducimus incidunt tempora illum, rerum, odio repellendus sed. Nulla, sapiente!"  },
    ]

    const thumbnail = [
        {img:Img1 , h1 :"title" , h2:"description"},
        {img:Img1 , h1 :"title" , h2:"description"},
        {img:Img1 , h1 :"title" , h2:"description"},
        {img:Img1 , h1 :"title" , h2:"description"},
    ]
  return (
    <div className='Hero2'> 
        <div className="carousel container">
            <div className="list">
                {
                    itmes.map((e,index)=>(
                        <div className="item" key={index}>
                            <img src={e.img} alt="" />
                            <div className="content">
                                <div className="autho"> {e.h1} </div>
                                <div className="title"> {e.h2} </div>
                                <div className="topic"> {e.h3} </div>
                                <div className="des"> {e.desc} </div>
                                <div className="buttons">
                                    <button className="bt1"> see more </button>
                                    <button className="bt1"> subcribe </button>
                                </div>
                            </div>
                        </div>
                    ))
                }
                
            </div>

            <div className="thumbnail">
                {
                    thumbnail.map((e,index)=>(
                        <div className="item" key={index}>
                            <img src={e.img} alt="" />
                            <div className="content">
                                <div className="title"> {e.h1} </div>
                                <div className="des"> {e.h2} </div>
                            </div>
                        </div>
                    ))
                }
                
            </div>
        </div>
    </div>
  )
}

export default Hero2