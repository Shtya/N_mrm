import React from 'react'
import ErrorImg from "../assets/Error.webp"
import { Social_Media } from '../App'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'


const Error = () => {
    const {t} = useTranslation() ;

  return (
    <div className='error' >
        <div className="bgCover2"><img src={ErrorImg} alt="" /></div>
        <div className="container">
            <div className="card">
            <h2>404</h2>
            <p> OOPS! PAGE NOT FOUND </p>
            <div className="group"> 
                <input type="text" placeholder='Search...' /> 
                <input type="submit" value="SEARCH" /> 
            </div>

            <ul className='social last-social'>
                <li > <Link to={Social_Media[0]} >  <i className="fa-brands fa-facebook-f"></i>  </Link></li>
                <li > <Link to={Social_Media[1]} >  <i className="fa-brands fa-instagram"></i>   </Link></li>
                <li > <Link to={Social_Media[3]} >  <i className="fa-brands fa-whatsapp"></i>    </Link></li>
                <li > <Link to={Social_Media[2]} >  <i className="fa-brands fa-linkedin-in"></i> </Link></li>
            </ul> 

            <ul className='taps' >
                <li className='p' > <Link to="/"> Home  </Link></li>
                <li className='p' > <Link to="/blogs"> {t("home.footer.ul2.li4")} </Link></li>
                <li className='p' > <Link to="/services" > {t("home.footer.ul2.li3")} </Link></li>
                <li className='p' > <Link to="/contact-us"> {t("home.footer.ul2.li1")}  </Link></li>
            </ul>
            </div>
        </div>
    </div>
  )
}

export default Error