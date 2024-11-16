import Image, { StaticImageData } from 'next/image'
import React from 'react'



const Category = ({imageSrc,categoryName,routeTo}:{imageSrc:StaticImageData,categoryName:string,routeTo:string}) => {
  return (
    <div className='flex flex-col rounded-2xl bg-color-card items-center min-w-fit gap-3 px-3 py-2 cursor-pointer'>
      <Image src={imageSrc} height={200} width={200} className='rounded-full object-cover object-top h-[123px] w-[123px]' alt='category'/>
      <p className='font-bold font-heading text-lg tracking-[8px]'>{categoryName}</p>
    </div>
  )
}

export default Category
