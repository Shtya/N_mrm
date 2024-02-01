import React, { useEffect, useState } from 'react'
import ImgIntro from "../assets/portfolio/intro.jpg"
import { motion , AnimatePresence } from "framer-motion";


import P_ImgCover1 from "../assets/portfolio/1.jpg"
import P_Imgmain1 from  "../assets/portfolio/2.jpg"
import P_Imgmain2 from  "../assets/portfolio/3.jpg"
import P_Imgmain3 from  "../assets/portfolio/4.jpg"
import P_Imgmain4 from  "../assets/portfolio/5.jpg"
import P_Imgmain5 from  "../assets/portfolio/intro.jpg"
import P_Imgmain6 from  "../assets/portfolio/1.jpg"

import { Link } from 'react-router-dom'
import Divider from '../components/Divider';
import HeroComponent from '../components/HeroComponent';


const Projects = () => {
  const [id , setid] = useState()
  const [indexImg , setindexImg] = useState(0)
  const [Next , Setnext] =  useState({from:0 , to:4})

  const [projects , setProjects] = useState([
    {  curr: 0 , id: 1 ,  images:{main:P_ImgCover1 , submain:[P_Imgmain1 ,P_Imgmain2 ,P_Imgmain3 ,P_Imgmain4 , P_Imgmain5 , P_Imgmain6]} , routes:"" , title:"تطوير مشاريع الأعمال يتطلب رؤية واضحة واستراتيجية محكمة" , desc:"تطوير مشاريع الأعمال يتطلب رؤية واضحة واستراتيجية محكمة، يجب على رواد الأعمال فهم احتياجات السوق وتحليل المنافسة، الابتكار والتسويق الذكي يمكن أن يسهما في نجاح المشاريع، توظيف التكنولوجيا وبناء فريق عمل متميز يعدان أساسيين للنمو المستدام." },
    {  curr: 0 , id: 2 ,  images:{main:P_ImgCover1 , submain:[P_Imgmain1 ,P_Imgmain2 ,P_Imgmain3 ,P_Imgmain4 , P_Imgmain5 , P_Imgmain6]} , routes:"" , title:"تطوير مشاريع الأعمال يتطلب رؤية واضحة واستراتيجية محكمة" , desc:"تطوير مشاريع الأعمال يتطلب رؤية واضحة واستراتيجية محكمة، يجب على رواد الأعمال فهم احتياجات السوق وتحليل المنافسة، الابتكار والتسويق الذكي يمكن أن يسهما في نجاح المشاريع، توظيف التكنولوجيا وبناء فريق عمل متميز يعدان أساسيين للنمو المستدام." },
    {  curr: 0 , id: 3 ,  images:{main:P_ImgCover1 , submain:[P_Imgmain1 ,P_Imgmain2 ,P_Imgmain3 ,P_Imgmain4 , P_Imgmain5 , P_Imgmain6]} , routes:"" , title:"تطوير مشاريع الأعمال يتطلب رؤية واضحة واستراتيجية محكمة" , desc:"تطوير مشاريع الأعمال يتطلب رؤية واضحة واستراتيجية محكمة، يجب على رواد الأعمال فهم احتياجات السوق وتحليل المنافسة، الابتكار والتسويق الذكي يمكن أن يسهما في نجاح المشاريع، توظيف التكنولوجيا وبناء فريق عمل متميز يعدان أساسيين للنمو المستدام." },
    {  curr: 0 , id: 4 ,  images:{main:P_ImgCover1 , submain:[P_Imgmain1 ,P_Imgmain2 ,P_Imgmain3 ,P_Imgmain4 , P_Imgmain5 , P_Imgmain6]} , routes:"" , title:"تطوير مشاريع الأعمال يتطلب رؤية واضحة واستراتيجية محكمة" , desc:"تطوير مشاريع الأعمال يتطلب رؤية واضحة واستراتيجية محكمة، يجب على رواد الأعمال فهم احتياجات السوق وتحليل المنافسة، الابتكار والتسويق الذكي يمكن أن يسهما في نجاح المشاريع، توظيف التكنولوجيا وبناء فريق عمل متميز يعدان أساسيين للنمو المستدام." },
    
    {  curr: 0 , id: 5 ,  images:{main:P_ImgCover1 , submain:[P_Imgmain1 ,P_Imgmain2 ,P_Imgmain3 ,P_Imgmain4 , P_Imgmain5 , P_Imgmain6]} , routes:"" , title:"تطوير مشاريع الأعمال يتطلب رؤية واضحة واستراتيجية محكمة" , desc:"تطوير مشاريع الأعمال يتطلب رؤية واضحة واستراتيجية محكمة، يجب على رواد الأعمال فهم احتياجات السوق وتحليل المنافسة، الابتكار والتسويق الذكي يمكن أن يسهما في نجاح المشاريع، توظيف التكنولوجيا وبناء فريق عمل متميز يعدان أساسيين للنمو المستدام." },
    {  curr: 0 , id: 6 ,  images:{main:P_ImgCover1 , submain:[P_Imgmain1 ,P_Imgmain2 ,P_Imgmain3 ,P_Imgmain4 , P_Imgmain5 , P_Imgmain6]} , routes:"" , title:"تطوير مشاريع الأعمال يتطلب رؤية واضحة واستراتيجية محكمة" , desc:"تطوير مشاريع الأعمال يتطلب رؤية واضحة واستراتيجية محكمة، يجب على رواد الأعمال فهم احتياجات السوق وتحليل المنافسة، الابتكار والتسويق الذكي يمكن أن يسهما في نجاح المشاريع، توظيف التكنولوجيا وبناء فريق عمل متميز يعدان أساسيين للنمو المستدام." },
    {  curr: 0 , id: 7 ,  images:{main:P_Imgmain2 , submain:[P_Imgmain1 ,P_Imgmain2 ,P_Imgmain3 ,P_Imgmain4 , P_Imgmain5 , P_Imgmain6]} , routes:"" , title:"تطوير مشاريع الأعمال يتطلب رؤية واضحة واستراتيجية محكمة" , desc:"تطوير مشاريع الأعمال يتطلب رؤية واضحة واستراتيجية محكمة، يجب على رواد الأعمال فهم احتياجات السوق وتحليل المنافسة، الابتكار والتسويق الذكي يمكن أن يسهما في نجاح المشاريع، توظيف التكنولوجيا وبناء فريق عمل متميز يعدان أساسيين للنمو المستدام." },
    {  curr: 0 , id: 8 ,  images:{main:P_Imgmain2 , submain:[P_Imgmain1 ,P_Imgmain2 ,P_Imgmain3 ,P_Imgmain4 , P_Imgmain5 , P_Imgmain6]} , routes:"" , title:"تطوير مشاريع الأعمال يتطلب رؤية واضحة واستراتيجية محكمة" , desc:"تطوير مشاريع الأعمال يتطلب رؤية واضحة واستراتيجية محكمة، يجب على رواد الأعمال فهم احتياجات السوق وتحليل المنافسة، الابتكار والتسويق الذكي يمكن أن يسهما في نجاح المشاريع، توظيف التكنولوجيا وبناء فريق عمل متميز يعدان أساسيين للنمو المستدام." },
    
    ])

  const handleImg = (IdxOfImg , id , IdxOfPro)=>{
  setindexImg(IdxOfImg)
  setid(id)
  const updatedProjects = [...projects];
  updatedProjects[IdxOfPro] = { ...updatedProjects[IdxOfPro], curr: IdxOfImg};
  setProjects(updatedProjects)
  }


  return (
    <div className='portfolio' >
      <HeroComponent />

        <Divider />
      <div className="project">
      <div className="h1-head">OUR PORTFOLIO</div>

        <div className="container">
            {
              projects.slice(Next.from , Next.to)?.map((e,index)=>(
                <div className="box" key={index}>
                    <div className="coverImg">

                        <AnimatePresence> <motion.div className='layout' transition={{duration:".3"}} initial={{ opacity:0}} animate={{ opacity:1 }} exit={{ opacity:0 }}>
                        <img className='img' src={e.images?.submain[ id == e.id && indexImg || e.curr]} alt="" />
                        </motion.div> </AnimatePresence>

                        <div className="allImg"> { e?.images?.submain.map((ele,idx)=> ( <img onClick={_=> handleImg(idx , e.id , index)} key={idx} src={ele} alt="" />  )) } </div>

                        <div className="text">
                            <div className="h5"> Design of </div>
                            <div className="h6"> Exhibitions <br/> Conference </div>
                        </div>
                    </div>
            </div>
              ))
            }
        </div>

        {Next.to == 8 ? "" : <div className="bt" onClick={_=> Setnext({from:0 , to : 8})}>see more</div>}
      </div>
      
</div>
  )
}

export default Projects