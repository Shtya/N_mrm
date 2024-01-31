import React from 'react'
import Img1 from "../assets/portfolio/img1.jpg"
import Blog from "./home/Blog" ;

import Imgblog from "../assets/home/test/  (7).webp"
import FixedImg2 from "../assets/bg/4.webp"


import FixedImg from "../assets/bg/3.webp"
import Divider from './Divider';
const blog = [
    {img : Imgblog ,  title:"Events photography" , desc:"From corporate gatherings to unique celebrations, we capture the essence of your events, ensuring that every moment is preserved." , data:"15" , data2:"May"},
    {img : Imgblog ,  title:"Fashion photography" , desc:"Our fashion photography services offer high-quality images that showcase your products or the latest trends." , data:"16" , data2:"May"},
    {img : Imgblog ,  title:"Business Portraits & Headshots" , desc:"Make a lasting impression with professional headshots and portraits that reflect the essence of your business." , data:"17" , data2:"May"},
    {img : Imgblog ,  title:"Food photography" , desc:"Showcase your culinary creations with mouthwatering food photography that entices your audience." , data:"18" , data2:"May"},
    {img : Imgblog ,  title:"Product photography" , desc:"Highlight the details and features of your products with our product photography services." , data:"17" , data2:"May"},
    {img : Imgblog ,  title:"Automotive photography" , desc:"From sleek cars to rugged vehicles, our automotive photography captures the beauty and power of automobiles." , data:"18" , data2:"May"},
  ]


const Blog_Details = () => {
  return (
    <div className='blog-details'>
        <div className="coverIntro">
                <div className="banner"></div>

            <div className="container">
                <div className="coverImg"> <img src={Img1} alt="" /> </div>
                <div className="content">
                    <div className="data">  2024 - monday </div>
                    <div className="h2"> Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae, aperiam. </div>
                    <div className="p">Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores quas perspiciatis labore vero quo voluptatibus distinctio ea, veniam natus aut velit est iusto numquam ut nihil corporis architecto tenetur pariatur.</div>
                </div>
            </div>
        </div>

        <Divider />
        <div className="inner-blog">
          <div className="bgCover"> <img src={FixedImg} alt="" /> </div>
            <div className="container">
            <h1 > Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet incidunt laudantium assumenda nostrum quod reiciendis unde, provident ipsam ipsum ex! Est hic facere quasi earum quo unde nisi a corrupti! </h1>

            <h2 > Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore dolor ipsa nemo provident accusantium tempora possimus non saepe dicta deleniti. </h2>
            <p >Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corrupti eligendi cum odit asperiores sed fugit at labore eaque assumenda eum ea, reprehenderit laborum dolore minima, quos exercitationem consequatur porro deleniti natus, quibusdam iure iste aliquid! Aperiam esse corrupti nihil quam.</p>
            <h2 > Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore dolor ipsa nemo provident accusantium tempora possimus non saepe dicta deleniti. </h2>
            <p >Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corrupti eligendi cum odit asperiores sed fugit at labore eaque assumenda eum ea, reprehenderit laborum dolore minima, quos exercitationem consequatur porro deleniti natus, quibusdam iure iste aliquid! Aperiam esse corrupti nihil quam.</p>
            <h2 > Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore dolor ipsa nemo provident accusantium tempora possimus non saepe dicta deleniti. </h2>
            <p >Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corrupti eligendi cum odit asperiores sed fugit at labore eaque assumenda eum ea, reprehenderit laborum dolore minima, quos exercitationem consequatur porro deleniti natus, quibusdam iure iste aliquid! Aperiam esse corrupti nihil quam.</p>
            <h2 > Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore dolor ipsa nemo provident accusantium tempora possimus non saepe dicta deleniti. </h2>
            <p >Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corrupti eligendi cum odit asperiores sed fugit at labore eaque assumenda eum ea, reprehenderit laborum dolore minima, quos exercitationem consequatur porro deleniti natus, quibusdam iure iste aliquid! Aperiam esse corrupti nihil quam.</p>
            <h2 > Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore dolor ipsa nemo provident accusantium tempora possimus non saepe dicta deleniti. </h2>
            <p >Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corrupti eligendi cum odit asperiores sed fugit at labore eaque assumenda eum ea, reprehenderit laborum dolore minima, quos exercitationem consequatur porro deleniti natus, quibusdam iure iste aliquid! Aperiam esse corrupti nihil quam.</p>

            </div>
        </div>


        <Divider />
        <Blog Img={FixedImg2} blog={blog} title="Related Blogs" />

    </div>
  )
}

export default Blog_Details