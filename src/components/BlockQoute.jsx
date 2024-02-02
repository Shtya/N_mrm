import React from 'react'
import ImgQoute from "../assets/vediography/(2).jpg"
import ImgFixed from "../assets/bg/34.webp"

const BlockQoute = ({classN , Img , alt , Img2}) => {
  return (

    <div className="qoutation">
      {
        alt == true 
        ?   <div className="bgCover3" style={{background:`url("${Img}")`}} ></div>
        :   <div className={classN || "bgCover"}><img src={Img || ImgFixed} alt="" /></div>
      }
             

        
    <div className=" container">

        <img src={ImgQoute} alt="" />
        <div className="text" style={{background:`url(${Img2})`}}>

            <div className="h">Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate, est?</div>
            <div className="p">  Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora earum natus tenetur, non eius rem ipsam perspiciatis eveniet corporis at sapiente soluta iusto doloremque temporibus optio unde quidem sunt assumenda?</div>
        </div>
    </div>
</div>
  )
}

export default BlockQoute