import Image from 'next/image'
import React from 'react'
import productImage from '@/public/card picture.png'
const ProductCardSecondary = () => {


    const {heading,data}={
        heading:'Electronics',
        data:[
            {
                productCategory:'Graphics Card',
                maxDiscount: 50
            },
            {
                productCategory:'Laptops',
                maxDiscount: 40
            },
            {
                productCategory:'Mobiles',
                maxDiscount: 37
            },
            {
                productCategory:'Headphones',
                maxDiscount: 60
            }
        ]
    }

  return (
    <div className='h-full min-w-fit bg-color-card py-10 px-6 rounded-md flex flex-col gap-4'>
        <h3 className='heading font-heading text-4xl font-semibold'>
            {heading}
        </h3>
        <div className='grid grid-col-2 grid-rows-2 grid-flow-col gap-4'>
            {data.map((eachData,index)=>(
                <div key={index} className='rounded-lg flex flex-col items-center gap-2 bg-white px-4 py-2'>
                    <Image src={productImage} height={100} width={100} alt='productImage' className='w-40% rounded-md'/>
                    <p>{eachData.productCategory} up to <span className='text-color-highlight'>{eachData.maxDiscount}%</span> off</p>
                </div>
            ))}
        </div>
    </div>
  )
}

export default ProductCardSecondary
