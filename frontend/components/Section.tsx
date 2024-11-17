'use client';
import React,{ ReactNode } from 'react'
import Heading from './Heading'
import ProductCard from './ProductCard';

const Section = ({heading,sectionName,children}:{heading:string,sectionName:string,contents?:any[],children?:ReactNode}) => {
   

  
  return (
    <section id={sectionName} className='mt-5 flex flex-col gap-10 px-10 py-10'>
      <Heading content={heading}/>
      <div className='flex no-scroll h-fit w-fit gap-8 p-20 relative'>
        {children}
      </div>
    </section>
  )
}

export default Section
