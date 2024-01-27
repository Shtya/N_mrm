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
  let prevScrollPos = window.pageYOffset;
  const navbar = document.getElementById('navbar');
  const LogoSelect = document.getElementById('logo');

  window.onscroll = function() {
    let currentScrollPos = window.pageYOffset;

    if (prevScrollPos > currentScrollPos) {
      navbar.style.top = '0';
    } else {
      navbar.style.top = `-${navbar.offsetHeight}px`;
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

  // let PhotoArrow = document.querySelector(".Navbar .htmlcss-arrow");
  // PhotoArrow.onclick = function() {
  // navLinks.classList.toggle("show2");
  // }
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
            <li data-aos="fade-down" data-aos-delay="250" onClick={_=> Navigate("/services")}><Link className={pathname == "/services" ? "active":""} to="/services"> Services </Link></li>
            
            
            <li data-aos="fade-down" data-aos-delay="300" ><Link  >Videography</Link>
              <i className='bx bxs-chevron-down htmlcss-arrow arrow  '></i>
              <ul className="htmlCss-sub-menu sub-menu">
                <li   onClick={_=> Navigate("/food")}><Link className={pathname == "/food" ? "active":""}    to="/food">  Services 1 </Link></li>
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