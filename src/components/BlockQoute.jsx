import React from 'react'
import ImgQoute from "../assets/services/_ (2).webp"
import ImgFixed from "../assets/bg/34.webp"

const BlockQoute = () => {
  return (

    <div className="qoutation">
        <div className="bgCover"><img src={ImgFixed} alt="" /></div>
    <div className=" container">

        {/* <svg className="absolute transform -left-12 -top-12" width="100" height="78" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M100 0H86.588L59.034 40.478v37.065h37.064V40.478H82.2L100 0zM40.966 0H27.554L0 40.478v37.065h37.064V40.478H23.165L40.965 0z" fill="#cdb045"/>
        </svg>
        <svg className="absolute transform -right-12 -bottom-6 flip" width="100" height="78" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M14.2916 77.9999H0.880127L18.6808 37.5217H4.78164V0.457275H41.846V37.5217L14.2916 77.9999Z" fill="#cdb045"/>
        <path d="M73.4115 78H60L77.8007 37.5218H63.9015V0.457397H100.966V37.5219L73.4115 78Z" fill="#cdb045"/>
        </svg> */}
        <img src={ImgQoute} alt="" />
        <div className="text">

            <div className="h">Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate, est?</div>
            <div className="p">  Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora earum natus tenetur, non eius rem ipsam perspiciatis eveniet corporis at sapiente soluta iusto doloremque temporibus optio unde quidem sunt assumenda?</div>
        </div>
    </div>
</div>
  )
}

export default BlockQoute