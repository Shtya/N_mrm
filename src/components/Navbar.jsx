import React, { memo, useEffect, useState } from 'react'
import Logo from "../assets/Logo1.webp"
import { Link, useLocation, useNavigate } from 'react-router-dom';
import Animation from './Animation';
import { useTranslation } from 'react-i18next';


const Navbar = memo(() => {
  const {pathname} =useLocation() ;

  // herflang
  const { t, i18n } = useTranslation();
  const handleLang = (e)=>{
    localStorage.setItem("lang" , e.target.value)
    i18n.changeLanguage(e.target.value || localStorage.getItem("lang") )
  }

  // when scroll up

  let prevScrollPos  = window.pageYOffset;
  let navbar   = document.getElementById('navbar');


  window.onscroll = function() {
    let currentScrollPos = window.pageYOffset;

    if(navbar){

      if (prevScrollPos > currentScrollPos) {
        navbar.style.top = '0' 
      } else {
        navbar.style.top = `-${navbar.offsetHeight}px` 
      }

    }
    prevScrollPos = currentScrollPos;
  }
  


  const navigate = useNavigate()
  const [top , settop] = useState(false)

  useEffect(_=>{
    const handelScroll =  _=> window.scrollY > 50 ? settop("up-anything") : settop("")
    window.addEventListener("scroll" , handelScroll)
    return _=> window.removeEventListener("scroll" , handelScroll)} ,[ window])
    let navLinks = document.querySelector(" .Navbar .nav-links");
    useEffect(_=>{
      let navLinks = document.querySelector(" .Navbar .nav-links");

      let menuCloseBtn = document.querySelector(" .Navbar .nav-links .bx-x");
      let menuOpenBtn = document.querySelector(" .Navbar .navbar .bx-menu");
      menuOpenBtn.onclick = function() {
      navLinks.style.left = "0";
      }
      menuCloseBtn.onclick = function() {
      navLinks.style.left = "-100%";
      }


  let htmlcssArrow = document.querySelector(".Navbar .htmlcss-arrow");
  htmlcssArrow.onclick = function() {
  navLinks.classList.toggle("show1");
  }

  let jsArrow = document.querySelector(".Navbar .js-arrow");
  jsArrow.onclick = function() {
  navLinks.classList.toggle("show1");
  }

    } ,[])

    const Navigate = (path)=>{
      navigate(path)
      navLinks.style.left = "-100%";
    }

  return (
  <div className="Navbar"   >
    <Animation />
    <nav id='navbar' >
      <div className={`navbar ${top}`} >
        <i className='bx bx-menu'>

          <span></span>
          <span></span>
          <span></span>
        </i>

        
        <div data-aos="fade-down" data-aos-delay="100" className="logo"><Link to="/"> <img src={Logo} id='logo' alt="Navbar"  /></Link></div>
        <div className="nav-links">
          <div className="sidebar-logo">   <span className="logo-name"><img src={Logo} alt="Navbar"  /></span>   <i className='bx bx-x' > <span/> <span/><span/> </i> </div>
          
          <ul className="links">
            <li data-aos="fade-down" data-aos-delay="200" onClick={_=> Navigate("/")}><Link className={pathname == "/" ? "active":""} to="/">   {t("Nav.li1")}  </Link></li>
            <li data-aos="fade-down" data-aos-delay="200" onClick={_=> Navigate("/portfolio")}><Link className={pathname == "/portfolio" ? "active":""} to="/portfolio">  portfolio </Link></li>
            {/* <li data-aos="fade-down" data-aos-delay="250" onClick={_=> Navigate("/services")}><Link className={pathname == "/services" ? "active":""} to="/services"> Services </Link></li> */}
            
            
            <li data-aos="fade-down" className='html' data-aos-delay="300" ><Link  >Photography</Link>
              <i className='bx bxs-chevron-down htmlcss-arrow arrow  '></i>
              <ul className="htmlCss-sub-menu sub-menu">
                <li   onClick={_=> Navigate("/events-photography")}><Link className={pathname == "/events-photography" ? "active":""}    to="/events-photography">  events photography </Link></li>
                <li   onClick={_=> Navigate("/fashion-photography")}><Link className={pathname == "/fashion-photography" ? "active":""}    to="/fashion-photography">  fashion photography </Link></li>
                <li   onClick={_=> Navigate("/business-Portraits&Headshots")}><Link className={pathname == "/business-Portraits&Headshots" ? "active":""}    to="/business-Portraits&Headshots">  business Portraits & Headshots </Link></li>
                <li   onClick={_=> Navigate("/food-photography")}><Link className={pathname == "/food-photography" ? "active":""}    to="/food-photography">  food photography </Link></li>
                <li   onClick={_=> Navigate("/product-photography")}><Link className={pathname == "/product-photography" ? "active":""}    to="/product-photography">  product photography </Link></li>
                <li   onClick={_=> Navigate("/automotive-photography")}><Link className={pathname == "/automotive-photography" ? "active":""}    to="/automotive-photography">  automotive photography </Link></li>
                <li   onClick={_=> Navigate("/hospitality-photography")}><Link className={pathname == "/hospitality-photography" ? "active":""}    to="/hospitality-photography">  hospitality photography </Link></li>
                <li   onClick={_=> Navigate("/real-Estate-photography")}><Link className={pathname == "/real-Estate-photography" ? "active":""}    to="/real-Estate-photography">  real Estate photography </Link></li>
                <li   onClick={_=> Navigate("/trade-Shows-photography")}><Link className={pathname == "/trade-Shows-photography" ? "active":""}    to="/trade-Shows-photography">  trade Shows photography </Link></li>

              </ul>
            </li>

            <li data-aos="fade-down" className='js' data-aos-delay="300" ><Link  >Videography</Link>
              <i className='bx bxs-chevron-down js-arrow arrow '></i>
              <ul className="js-sub-menu sub-menu">
                <li   onClick={_=> Navigate("/exhibitions-conference" )}>  <Link className={pathname == "/exhibitions-conference" ? "active":""}    to="/exhibitions-conference" >   Exhibitions Conference </Link></li>
                <li   onClick={_=> Navigate("/corporate-films"        )}>         <Link className={pathname == "/corporate-films" ? "active":""}    to="/corporate-films" >   Corporate Films </Link></li>
                <li   onClick={_=> Navigate("/event-filming"          )}>           <Link className={pathname == "/event-filming" ? "active":""}    to="/event-filming" >   Event Filming </Link></li>
                <li   onClick={_=> Navigate("/behind-the-scene-videos")}> <Link className={pathname == "/behind-the-scene-videos" ? "active":""}    to="/behind-the-scene-videos" >   Behind-the Scene Videos </Link></li>
                <li   onClick={_=> Navigate("/fashion-videography"    )}>     <Link className={pathname == "/fashion-videography" ? "active":""}    to="/fashion-videography" >   Fashion Videography </Link></li>
                <li   onClick={_=> Navigate("/promotional-videos"     )}>      <Link className={pathname == "/promotional-videos" ? "active":""}    to="/promotional-videos" >   Promotional Videos </Link></li>
                <li   onClick={_=> Navigate("/short-ads"              )}>               <Link className={pathname == "/short-ads" ? "active":""}    to="/short-ads" >   Short Ads </Link></li>
                <li   onClick={_=> Navigate("/real-estate-product"    )}>    <Link className={pathname == "/real-estate-product" ? "active":""}    to="/real-estate-product" >   Real Estate Product  </Link></li>

              </ul>
            </li>


            <li data-aos="fade-down" data-aos-delay="400" onClick={_=> Navigate("/blogs")}><Link  className={pathname == "/blog" ? "active":""} to="/blog">   {t("Nav.li12")}  </Link></li>
            <li data-aos="fade-down" data-aos-delay="500" onClick={_=> Navigate("/about-us")}><Link  className={pathname == "/about-us" ? "active":""} to="/about-us">    {t("Nav.li13")}  </Link></li>
            <li data-aos="fade-down" data-aos-delay="600" onClick={_=> Navigate("/contact-us")}><Link  className={pathname == "/contact-us" ? "active":""} to="/contact-us">    {t("Nav.li14")}  </Link></li>

          </ul>
        </div>
      </div>
    </nav>
  </div>
  )
})

export default Navbar