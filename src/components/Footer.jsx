import Logo from "../assets/Logo1.webp"
import { Link, useLocation } from 'react-router-dom'
import { Social_Media } from "../App"
import { memo } from "react"
import { useTranslation } from "react-i18next"
import FixedImg from "../assets/bg/30.webp"
import Divider from "./Divider"

const Footer = memo(() => {

  const {pathname} = useLocation() ;
  const {t} = useTranslation() ;

  return (
    <>
    <Divider />
    <footer id="footer" >
      
    <div className="bgCover2" >  <img  src={FixedImg} alt="footer"  /> </div>
      <div className="container" >


        <div className="top">
          <img src={Logo} alt="footer"   />
          <div className="phead" >{t("home.footer.h1")}</div>
          <ul className='social last-social'>
            <li > <Link to={Social_Media[0]} >  <i className="fa-brands fa-facebook-f"></i>  </Link></li>
            <li > <Link to={Social_Media[1]} >  <i className="fa-brands fa-instagram"></i>   </Link></li>
            <li > <Link to={Social_Media[3]} >  <i className="fa-brands fa-whatsapp"></i>    </Link></li>
            <li > <Link to={Social_Media[2]} >  <i className="fa-brands fa-linkedin-in"></i> </Link></li>
          </ul>
        </div>

        <ul className='ul-1' >
          <div className='h2 clip'> {t("home.footer.ul1.name")} </div>
          <li > <div className="icon"> <i className="fa-solid fa-envelope"></i> </div>  info@mrmadvertisingdubai.com </li>
          <li > <div className="icon"> <i className="fa-solid fa-map-location-dot"></i> </div>  Business Bay - Dubai </li>
          <li > <div className="icon"> <i className="fa-solid fa-phone"></i> </div>  +971561384496 </li>
        </ul>

        <ul className='ul-2' >
          <div className='h2 clip'> {t("home.footer.ul2.name")} </div>
          <li > <Link to="/contact-us"> {t("home.footer.ul2.li1")}  </Link></li>
          <li > <Link to="/about-us"> {t("home.footer.ul2.li2")}  </Link></li>
          <li > <Link to="/services" > {t("home.footer.ul2.li3")} </Link></li>
          <li > <Link to="/blogs"> {t("home.footer.ul2.li4")} </Link></li>
        </ul>

      </div>

        <div className="bottom container1" >
          <p className='p' > {t("home.footer.ul4.name")} </p>
          <div className="last" >
            <Link className='p' to="/terms">  {t("home.footer.ul4.li1")} </Link>
            <Link className='p' to="/privacy">  {t("home.footer.ul4.li2")} </Link>
          </div>
        </div>
    </footer>
    </>
  )
})

export default Footer