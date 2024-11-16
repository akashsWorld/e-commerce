import Image from 'next/image'
import React from 'react'
import productImage from '@/public/productImage.png'
import Rating from './Rating'

const ProductCard = () => {

    const {title,tags,price,rating,thumbnail,productId}= {
        title:' Lorem ipsum, dolor sit amet consectetur adipisicing elit. A veritatis nisi illum cumque nemo.',
        tags:['trending','blue','fashion'],
        price:{
          discount:60,
          actualPrice:100
        },
        rating:5,
        thumbnail:productImage,
        productId:'someLongproductid'
    }
    const discountedPrice = price.actualPrice - price.actualPrice * (price.discount/100);

  return (
    <div className='max-w-[300px] h-fit flex flex-col justify-center items-center drop-shadow-lg shadow-black  px-6 py-5 gap-4 rounded-md border cursor-pointer hover:scale-110 duration-300 ease-out bg-color-card hover:z-10'>
        <Image src={thumbnail} alt='thumb' width={238} height={306} className='object-cover object-top w-auto h-auto rounded-md shadow-md'/>
        <p className='font-medium w-full overflow-hidden text-ellipsis line-clamp-2'>{title}</p>
        <div className='flex items-center justify-between w-full'>
            <Rating rating={1.5}/>
            <p className='text-color-highlight font-semibold px-4'>{price.discount}%</p>
         </div>
        <div className='flex items-center justify-start gap-10 w-full '>
            <p className='text-black font-extrabold'>$ {discountedPrice}</p>
            <p className='line-through'>$ {price.actualPrice}</p>
        </div>
    </div>
  )
}

export default ProductCard
