import React, { useEffect, useState } from 'react'
import ImgIntro from "../assets/portfolio/intro.jpg"
import { motion , AnimatePresence } from "framer-motion";


import P_ImgCover1 from "../assets/portfolio/1.jpg"
import P_Imgmain1 from  "../assets/portfolio/2.jpg"
import P_Imgmain2 from  "../assets/portfolio/3.jpg"
import P_Imgmain3 from  "../assets/portfolio/4.jpg"
import P_Imgmain4 from  "../assets/portfolio/5.jpg"

import { Link } from 'react-router-dom'


const Projects = () => {
  const [id , setid] = useState()
  const [indexImg , setindexImg] = useState(0)
  const [Next , Setnext] =  useState({from:0 , to:4})

  const [projects , setProjects] = useState([
    {  curr: 0 , id: 1 ,  images:{main:P_ImgCover1 , submain:[P_Imgmain1 ,P_Imgmain2 ,P_Imgmain3 ,P_Imgmain4]} , routes:"" , title:"تطوير مشاريع الأعمال يتطلب رؤية واضحة واستراتيجية محكمة" , desc:"تطوير مشاريع الأعمال يتطلب رؤية واضحة واستراتيجية محكمة، يجب على رواد الأعمال فهم احتياجات السوق وتحليل المنافسة، الابتكار والتسويق الذكي يمكن أن يسهما في نجاح المشاريع، توظيف التكنولوجيا وبناء فريق عمل متميز يعدان أساسيين للنمو المستدام." },
    {  curr: 0 , id: 2 ,  images:{main:P_ImgCover1 , submain:[P_Imgmain1 ,P_Imgmain2 ,P_Imgmain3 ,P_Imgmain4]} , routes:"" , title:"تطوير مشاريع الأعمال يتطلب رؤية واضحة واستراتيجية محكمة" , desc:"تطوير مشاريع الأعمال يتطلب رؤية واضحة واستراتيجية محكمة، يجب على رواد الأعمال فهم احتياجات السوق وتحليل المنافسة، الابتكار والتسويق الذكي يمكن أن يسهما في نجاح المشاريع، توظيف التكنولوجيا وبناء فريق عمل متميز يعدان أساسيين للنمو المستدام." },
    {  curr: 0 , id: 3 ,  images:{main:P_ImgCover1 , submain:[P_Imgmain1 ,P_Imgmain2 ,P_Imgmain3 ,P_Imgmain4]} , routes:"" , title:"تطوير مشاريع الأعمال يتطلب رؤية واضحة واستراتيجية محكمة" , desc:"تطوير مشاريع الأعمال يتطلب رؤية واضحة واستراتيجية محكمة، يجب على رواد الأعمال فهم احتياجات السوق وتحليل المنافسة، الابتكار والتسويق الذكي يمكن أن يسهما في نجاح المشاريع، توظيف التكنولوجيا وبناء فريق عمل متميز يعدان أساسيين للنمو المستدام." },
    {  curr: 0 , id: 4 ,  images:{main:P_ImgCover1 , submain:[P_Imgmain1 ,P_Imgmain2 ,P_Imgmain3 ,P_Imgmain4]} , routes:"" , title:"تطوير مشاريع الأعمال يتطلب رؤية واضحة واستراتيجية محكمة" , desc:"تطوير مشاريع الأعمال يتطلب رؤية واضحة واستراتيجية محكمة، يجب على رواد الأعمال فهم احتياجات السوق وتحليل المنافسة، الابتكار والتسويق الذكي يمكن أن يسهما في نجاح المشاريع، توظيف التكنولوجيا وبناء فريق عمل متميز يعدان أساسيين للنمو المستدام." },
    
    {  curr: 0 , id: 5 ,  images:{main:P_ImgCover1 , submain:[P_Imgmain1 ,P_Imgmain2 ,P_Imgmain3 ,P_Imgmain4]} , routes:"" , title:"تطوير مشاريع الأعمال يتطلب رؤية واضحة واستراتيجية محكمة" , desc:"تطوير مشاريع الأعمال يتطلب رؤية واضحة واستراتيجية محكمة، يجب على رواد الأعمال فهم احتياجات السوق وتحليل المنافسة، الابتكار والتسويق الذكي يمكن أن يسهما في نجاح المشاريع، توظيف التكنولوجيا وبناء فريق عمل متميز يعدان أساسيين للنمو المستدام." },
    {  curr: 0 , id: 6 ,  images:{main:P_ImgCover1 , submain:[P_Imgmain1 ,P_Imgmain2 ,P_Imgmain3 ,P_Imgmain4]} , routes:"" , title:"تطوير مشاريع الأعمال يتطلب رؤية واضحة واستراتيجية محكمة" , desc:"تطوير مشاريع الأعمال يتطلب رؤية واضحة واستراتيجية محكمة، يجب على رواد الأعمال فهم احتياجات السوق وتحليل المنافسة، الابتكار والتسويق الذكي يمكن أن يسهما في نجاح المشاريع، توظيف التكنولوجيا وبناء فريق عمل متميز يعدان أساسيين للنمو المستدام." },
    {  curr: 0 , id: 7 ,  images:{main:P_Imgmain2 , submain:[P_Imgmain1 ,P_Imgmain2 ,P_Imgmain3 ,P_Imgmain4]} , routes:"" , title:"تطوير مشاريع الأعمال يتطلب رؤية واضحة واستراتيجية محكمة" , desc:"تطوير مشاريع الأعمال يتطلب رؤية واضحة واستراتيجية محكمة، يجب على رواد الأعمال فهم احتياجات السوق وتحليل المنافسة، الابتكار والتسويق الذكي يمكن أن يسهما في نجاح المشاريع، توظيف التكنولوجيا وبناء فريق عمل متميز يعدان أساسيين للنمو المستدام." },
    {  curr: 0 , id: 8 ,  images:{main:P_Imgmain2 , submain:[P_Imgmain1 ,P_Imgmain2 ,P_Imgmain3 ,P_Imgmain4]} , routes:"" , title:"تطوير مشاريع الأعمال يتطلب رؤية واضحة واستراتيجية محكمة" , desc:"تطوير مشاريع الأعمال يتطلب رؤية واضحة واستراتيجية محكمة، يجب على رواد الأعمال فهم احتياجات السوق وتحليل المنافسة، الابتكار والتسويق الذكي يمكن أن يسهما في نجاح المشاريع، توظيف التكنولوجيا وبناء فريق عمل متميز يعدان أساسيين للنمو المستدام." },
    
    {  curr: 0 , id: 9 ,  images:{main:P_ImgCover1 , submain:[P_Imgmain1 ,P_Imgmain2 ,P_Imgmain3 ,P_Imgmain4]} , routes:"" , title:"تطوير مشاريع الأعمال يتطلب رؤية واضحة واستراتيجية محكمة" , desc:"تطوير مشاريع الأعمال يتطلب رؤية واضحة واستراتيجية محكمة، يجب على رواد الأعمال فهم احتياجات السوق وتحليل المنافسة، الابتكار والتسويق الذكي يمكن أن يسهما في نجاح المشاريع، توظيف التكنولوجيا وبناء فريق عمل متميز يعدان أساسيين للنمو المستدام." },
    {  curr: 0 , id: 10 ,  images:{main:P_ImgCover1 , submain:[P_Imgmain1 ,P_Imgmain2 ,P_Imgmain3 ,P_Imgmain4]} , routes:"" , title:"تطوير مشاريع الأعمال يتطلب رؤية واضحة واستراتيجية محكمة" , desc:"تطوير مشاريع الأعمال يتطلب رؤية واضحة واستراتيجية محكمة، يجب على رواد الأعمال فهم احتياجات السوق وتحليل المنافسة، الابتكار والتسويق الذكي يمكن أن يسهما في نجاح المشاريع، توظيف التكنولوجيا وبناء فريق عمل متميز يعدان أساسيين للنمو المستدام." },
    {  curr: 0 , id: 11 ,  images:{main:P_Imgmain3 , submain:[P_Imgmain1 ,P_Imgmain2 ,P_Imgmain3 ,P_Imgmain4]} , routes:"" , title:"تطوير مشاريع الأعمال يتطلب رؤية واضحة واستراتيجية محكمة" , desc:"تطوير مشاريع الأعمال يتطلب رؤية واضحة واستراتيجية محكمة، يجب على رواد الأعمال فهم احتياجات السوق وتحليل المنافسة، الابتكار والتسويق الذكي يمكن أن يسهما في نجاح المشاريع، توظيف التكنولوجيا وبناء فريق عمل متميز يعدان أساسيين للنمو المستدام." },
    {  curr: 0 , id: 12 ,  images:{main:P_Imgmain3 , submain:[P_Imgmain1 ,P_Imgmain2 ,P_Imgmain3 ,P_Imgmain4]} , routes:"" , title:"تطوير مشاريع الأعمال يتطلب رؤية واضحة واستراتيجية محكمة" , desc:"تطوير مشاريع الأعمال يتطلب رؤية واضحة واستراتيجية محكمة، يجب على رواد الأعمال فهم احتياجات السوق وتحليل المنافسة، الابتكار والتسويق الذكي يمكن أن يسهما في نجاح المشاريع، توظيف التكنولوجيا وبناء فريق عمل متميز يعدان أساسيين للنمو المستدام." },
  ])

  const handleImg = (IdxOfImg , id , IdxOfPro)=>{
  setindexImg(IdxOfImg)
  setid(id)
  const updatedProjects = [...projects];
  updatedProjects[IdxOfPro] = { ...updatedProjects[IdxOfPro], curr: IdxOfImg};
  setProjects(updatedProjects)
  }

  const Pagination = (data) =>{
    Setnext(data)
    window.scrollTo({ top: 600, behavior: 'smooth' });
  }


  return (
    <div className='portfolio' >
      <div className="coverIntro "> <img src={ImgIntro} alt="intro page contains word 'about us '" /></div>
      
      <div className="project">
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

        {/* <div className="pagination">
          <button   onClick={_=> Pagination({from:0 , to:4})}  className={`btn-nav left-btn `} >   <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="left-icon">     <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />   </svg> </button>
          <div className="page-numbers">
            <button  onClick={_=> Pagination({from:0 , to:4})}  className={`btn-page ${Next.from == 0 ? "btn-selected" : ""} `}    > 1</button>
            <button  onClick={_=> Pagination({from:4 , to:8})}  className={`btn-page ${Next.from == 4 ? "btn-selected" : ""} `}    > 2</button>
            <button  onClick={_=> Pagination({from:8 , to:12})}  className={`btn-page ${Next.from == 8 ? "btn-selected" : ""} `}    > 3</button>
          </div>
          <button onClick={_=>  Pagination({from:8 , to:12}) }  className={`btn-nav right-btn `}  > <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="right-icon"> <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" /> </svg> </button>
        </div> */}

      </div>
      
</div>
  )
}

export default Projects