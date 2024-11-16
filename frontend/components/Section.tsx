'use client';
import React from 'react'
import Heading from './Heading'
import ProductCard from './ProductCard';

const Section = ({heading,sectionName,contents}:{heading:string,sectionName:string,contents?:any[]}) => {
   
  const dummyContents:
  {
    title:string,
    tags:string[],
    price:{
      discount:number,
      actualPrice:number,
    },
    rating:number,
    thumbnail:string
  }[] =[
    {
      title:' Lorem ipsum, dolor sit amet consectetur adipisicing elit. A veritatis nisi illum cumque nemo.',
      tags:['trending','blue','fashion'],
      price:{
        discount:60,
        actualPrice:100
      },
      rating:5,
      thumbnail:'url'
    }
  ]
  
  return (
    <section id={sectionName} className='mt-5 flex flex-col gap-10 bg-color-card px-20 py-10'>
      <Heading content={heading}/>
      <div className='flex container'>
        <ProductCard/>
      </div>
    </section>
  )
}

export default Section
