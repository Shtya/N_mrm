import React from 'react'
import ContactIntro from "../assets/contact/intro.jpg"
import Img1 from "../assets/about/1.jpg"
import Img2 from "../assets/about/2.jpg"
import FixedImg from "../assets/bg/35.webp"
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'


const Contact = () => {
    const {t} = useTranslation()

  return (
    <div  className='contact-us'>
        
                <div className="bg"><img src={ContactIntro} alt="" /></div>
        <div className="container">
            <div className="contact-form">

                

                <form >
                    <div className="h2"> WE'RE HERE TO HELP YOU</div>
                    <div className="h"> Reach Out And Let's Talk </div>
                  <input  name="name" type="text"  placeholder="Name"  id="" />
                  <input  name="email" type="Email"  placeholder="Email" />
                  <input  name="phone" type="text"  placeholder="Phone"  />
                  <textarea className='message'  name="message" placeholder="Message" type='text'/>
                   <button  className='bt' aria-label="Submit"> Submit </button>
              </form>

              <ul >
                    <div className="h1-he"> Contact us</div>
                    <div className="phead"> turn your dreams into digital realities </div>
                    <li > <Link to="" >  <i className="fa-solid fa-phone"></i>       </Link>  <div className='p'>+971561384496</div></li>
                    <li > <Link to="" >  <i className="fa-solid fa-envelope"></i>    </Link>  <div className='p'>info@mrmadvertisingdubai.com</div> </li>
                    <li > <Link to="" >  <i className="fa-solid fa-location-dot"></i></Link>  <div className='p'>Business Bay - Dubai</div></li>
                </ul>

            </div>
        </div>
    </div>
  )
}

export default Contact