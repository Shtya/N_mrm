import React from 'react'
import ContactImg from "../../assets/home/contact.webp"
import { useTranslation } from 'react-i18next'
import FixedImg from "../../assets/bg/21.webp"


const Contact = () => {
    const {t} = useTranslation()

  return (
    <div className='contact'>
              <div className="bgCover2"><img src={FixedImg} alt="" /></div>

        <div className="container">
            <div className="coverImg"> <img src={ContactImg} alt="" /> </div>
            <div className="box">
            <form >
                <label htmlFor="name"> Name</label>
                <input  required type="text" name="name" placeholder='Name'  id="name" />
                <label htmlFor="email"> Email</label>
                <input  required type="Email" name="email" placeholder='Email' id="email" />
                <label htmlFor="phone"> Phone</label>
                <input  required type="text" name="phone" placeholder='phone'  id="phone" />
             
                <label htmlFor="message"  > Message</label>
                <textarea  name="message"  id="message" placeholder='Message'></textarea>

            <button  className='bt' aria-label="Submit" >{t("home.contact.bt")}</button>
          </form>
            </div>
        </div>
    </div>
  )
}

export default Contact