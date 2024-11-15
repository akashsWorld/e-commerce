'use client';
import { StaticImageData } from "next/image";
import Category from "./Category"
import card from '@/public/card picture.png'

const Categories = () => {

    const categories:{imageSrc:StaticImageData,categoryName:string,routeTo:string}[]=[
        {
            imageSrc:card, // TODO:Make it url not Actual image.
            categoryName:'Men',
            routeTo:'/'
        }
    ]
  return (
    <section className="flex justify-between container px-[60px] py-[56px]">
      {categories.map((ele,index)=><Category key={index} {...ele} />)}
      {/* <Category/> */}
    </section>
  )
}

export default Categories
