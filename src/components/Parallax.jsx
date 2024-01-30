import React, { useEffect } from 'react'

const Parallax = ({Id , dir }) => {


    useEffect(_=>{
        let text = document.getElementById(Id)
        if(text){

            window.addEventListener("scroll" , _=>{
              let value = window.scrollY;
              
              text.style.letterSpacing = value * .001 + "px"
              if(dir == "top") text.style.marginTop = value * .3 + "px"
              else if (dir == "bottom") text.style.marginBottom = value * .5 + "px"
              else if (dir == "left") text.style.marginLeft = value * .5 + "px"
              else if (dir == "right") text.style.marginRight = value * .5 + "px"
              
              text.style.transition =".2s"
            })
        }

        return _=> window.removeEventListener("scroll" , _=>{}) ;
      },[Id , dir])
  return (<></> )
}

export default Parallax