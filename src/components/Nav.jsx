import React, { useEffect } from 'react'
import Logo from "../assets/Logo1.webp"
import { Link, useLocation, useNavigate } from 'react-router-dom'


const Nav = () => {

  const data = [
    {name:"Home" , path:"/"} ,
    {name:"portfolio" , path:"/portfolio"} ,

    {name:"Photography"  , child : [
      { name:"events photography"             , path:'/events-photography' },
      { name:"fashion photography"            , path:'/fashion-photography' },
      { name:"business Portraits & Headshots" , path:'/business-Portraits&Headshots' },
      { name:"food photography"               , path:'/food-photography' },
      { name:"product photography"            , path:'/product-photography' },
      { name:"automotive photography"         , path:'/automotive-photography' },
      { name:"hospitality photography"        , path:'/hospitality-photography' },
      { name:"real Estate photography"        , path:'/real-Estate-photography' },
      { name:"trade Shows photography"        , path:'/trade-Shows-photography' },
    ]} ,

    {name:"Vediography" , child : [
      { name:"Exhibitions Conference"   , path:"/exhibitions-conference" },
      { name:"Corporate Films"          , path:"/corporate-films" },
      { name:"Event Filming"            , path:"/event-filming" },
      { name:" Behind-the Scene Videos" , path:"/behind-the-scene-videos" },
      { name:"Fashion Videography"      , path:"/fashion-videography" },
      { name:"Promotional Videos"       , path:"/promotional-videos" },
      { name:"Short Ads"                , path:"/short-ads" },
      { name:"Real Estate Product "     , path:"/real-estate-product" },
    ]} ,

    {name:"blog" , path:"/blogs"} ,
    {name:"about us" , path:"/about-us"} ,
    {name:"contact us" , path:"/contact-us"} ,
  ]

  useEffect(_=> {
    let bars = document.querySelector(".NAVBAR .fa-bars")
    let nav = document.querySelector(".NAVBAR .Nav")
    let xmark = document.querySelector(".NAVBAR .fa-xmark")
    bars.addEventListener("click" , _=> {
      nav.style.left = "0"
    })
    xmark.addEventListener("click" , _=> {
      nav.style.left = "-100%"
    })

    let Show1 = document.querySelector(".NAVBAR .ul1 .show2 ")
    let Show2 = document.querySelector(".NAVBAR .ul1 .show3 ")

    Show1.onclick = function() { Show1.classList.toggle("appear") }
    Show2.onclick = function() { Show2.classList.toggle("appear2") }


  },[])


  const {pathname} = useLocation() ;

  const handleClose = (e)=>{
    let nav = document.querySelector(".NAVBAR .Nav")
    if(e) nav.style.left="-100%" 
  }


  return (
    <div className="NAVBAR">
      <div className="show">
        <div className="container">
          <img src={Logo} alt="" className='logo' /> 
          <i  class="fa-solid fa-bars"></i>
        </div>
      </div>

    <div className='Nav'>
      <div className="container">
        <img src={Logo} alt="" className='logo' /> 
        <div className="ul1">
                <i class="fa-solid fa-xmark"></i>
          {

            data.map((ele , index)=> (  <Link className={`a1 ${ele.path ? "" : "show"+index }`} to={ele?.path} key={index} > 
                
                <div className={`li ${pathname == ele.path ? "activeColor" : ""}`} onClick={_=>handleClose(ele.path)}   > 
                  {ele.name}
                  { ele?.child &&  <i className={`fa-solid fa-angle-up  `}></i> }
                </div>
                

                { ele.child && <div className="ul2">
                { ele?.child?.map((e,idx)=>(  <Link onClick={handleClose} className={pathname == e.path ? "activeColor" : ""}   key={idx} to={e.path} > {e.name}  </Link>       ))}
                </div>  }
              </Link> ))


          }
        </div>
      </div>
    </div>
  </div>
  )
}

export default Nav