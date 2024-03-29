import React, { useState } from 'react'
import Fixedimg1 from "../assets/bg/3.webp"
import Fixedimg from "../assets/bg/4.webp"
import Main from "../assets/bg/2.webp"

import ImgCover1 from "../assets/bg/test/1.jpg"
import Imgmain1 from  "../assets/bg/test/2.jpg"
import Imgmain2 from  "../assets/bg/test/3.jpg"
import Imgmain3 from  "../assets/bg/test/4.jpg"
import Imgmain4 from  "../assets/bg/test/5.jpg"
import Imgmain5 from  "../assets/bg/test/6.jpg"

import Divider from '../components/Divider';

const Projects = () => {

    const [id , setid] = useState()
  const [indexImg , setindexImg] = useState(0)
  const [Next , Setnext] =  useState({from:0 , to:4})

  const [projects , setProjects] = useState([
    {  curr: 0 , id: 1 ,  images:{main: ImgCover1 , submain:[Imgmain1 ,Imgmain2 ,Imgmain3 ,Imgmain4 , Imgmain5 ]} , routes:"" , title:"Lorem ipsum dolor sit amet ." , desc:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laborum qui reiciendis itaque voluptatibus amet dolorum asperiores libero mollitia pariatur vitae. Exercitationem, quia id. Doloribus ducimus, consequatur eos voluptas ullam porro et error iste autem perspiciatis deleniti. Corrupti rem sint dolorem ab nihil vero, consequatur hic quos commodi placeat blanditiis. Maxime fugiat suscipit velit blanditiis nobis vitae nesciunt possimus magni sint, rerum atque ducimus aut, quam maiores ea doloribus facere cum quae assumenda totam molestias, labore non! Reiciendis" },
    {  curr: 0 , id: 2 ,  images:{main: ImgCover1 , submain:[Imgmain1 ,Imgmain2 ,Imgmain3 ,Imgmain4 , Imgmain5 ]} , routes:"" , title:"Lorem ipsum dolor sit amet ." , desc:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laborum qui reiciendis itaque voluptatibus amet dolorum asperiores libero mollitia pariatur vitae. Exercitationem, quia id. Doloribus ducimus, consequatur eos voluptas ullam porro et error iste autem perspiciatis deleniti. Corrupti rem sint dolorem ab nihil vero, consequatur hic quos commodi placeat blanditiis. Maxime fugiat suscipit velit blanditiis nobis vitae nesciunt possimus magni sint, rerum atque ducimus aut, quam maiores ea doloribus facere cum quae assumenda totam molestias, labore non! Reiciendis" },
    {  curr: 0 , id: 3 ,  images:{main: ImgCover1 , submain:[Imgmain1 ,Imgmain2 ,Imgmain3 ,Imgmain4 , Imgmain5 ]} , routes:"" , title:"Lorem ipsum dolor sit amet ." , desc:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laborum qui reiciendis itaque voluptatibus amet dolorum asperiores libero mollitia pariatur vitae. Exercitationem, quia id. Doloribus ducimus, consequatur eos voluptas ullam porro et error iste autem perspiciatis deleniti. Corrupti rem sint dolorem ab nihil vero, consequatur hic quos commodi placeat blanditiis. Maxime fugiat suscipit velit blanditiis nobis vitae nesciunt possimus magni sint, rerum atque ducimus aut, quam maiores ea doloribus facere cum quae assumenda totam molestias, labore non! Reiciendis" },
    {  curr: 0 , id: 4 ,  images:{main: ImgCover1 , submain:[Imgmain1 ,Imgmain2 ,Imgmain3 ,Imgmain4 , Imgmain5 ]} , routes:"" , title:"Lorem ipsum dolor sit amet ." , desc:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laborum qui reiciendis itaque voluptatibus amet dolorum asperiores libero mollitia pariatur vitae. Exercitationem, quia id. Doloribus ducimus, consequatur eos voluptas ullam porro et error iste autem perspiciatis deleniti. Corrupti rem sint dolorem ab nihil vero, consequatur hic quos commodi placeat blanditiis. Maxime fugiat suscipit velit blanditiis nobis vitae nesciunt possimus magni sint, rerum atque ducimus aut, quam maiores ea doloribus facere cum quae assumenda totam molestias, labore non! Reiciendis" },
    
    ])

  const handleImg = (IdxOfImg , id , IdxOfPro)=>{
  setindexImg(IdxOfImg)
  setid(id)
  const updatedProjects = [...projects];
  updatedProjects[IdxOfPro] = { ...updatedProjects[IdxOfPro], curr: IdxOfImg};
  setProjects(updatedProjects)
  }

  return (
    <div className='Projects-page'>
        <div className="IntroCover">
            
             <div className="coverIntro"> <img className='cover' src={Fixedimg1} alt="" />  </div>
            <div className="container">
                <div className="coverImg"> <img src={Main} alt="" /> </div>
            </div>
        </div>
        <Divider />
        

        <div className="project-component">
            <div className="bgCover"> <img src={Fixedimg} alt="" /> </div>
            <div className="container">
            {
              projects.slice(Next.from , Next.to)?.map((e,index)=>(
                <div className="box" key={index}>
                   <div className="text">
                            <div className="h2"> {e.title} </div>
                            <div className="p"> {e.desc} </div>
                            <div className="bt">Discover more</div>
                        </div>


                    <div className="coverImg">
                        <img className='img' src={e.images?.submain[ id == e.id && indexImg || e.curr]} alt="" />

                        <div className="allImg"> { e?.images?.submain.map((ele,idx)=> ( <div className="coverImgMain"> <img onClick={_=> handleImg(idx , e.id , index)} key={idx} src={ele} alt="" />  </div> )) } </div>
                    </div>

            </div>
              ))
            }

             <div className="bt">see more</div>
            </div>
        </div>
    </div>
  )
}

export default Projects