import Image from 'next/image'
import React, { useEffect, useRef, useState } from 'react'
import productImage from '@/public/productImage.png'
import Rating from './Rating'

const ProductCard = () => {

    const {title,tags,price,rating,thumbnail,productId}= {
        title:' Lorem ipsum, dolor sit amet consectetur adipisicing elit. A veritatis nisi illum cumque nemo.',
        tags:['trending','blue','fashion','fashion','fashion','fashion','fashion','fashion'],
        price:{
          discount:60,
          actualPrice:100
        },
        rating:5,
        thumbnail:productImage,
        productId:'someLongproductid'
    }
    const discountedPrice = price.actualPrice - price.actualPrice * (price.discount/100);

    const [element,setElement] =useState({x:0,y:0,data:''});
    const [isHoverIng,setIsHovering]=useState(false);

    const [timeOut,setTimeOut]=useState(setTimeout(()=>{
    },1000))


    const onMouseMoveHandle=(eve:React.MouseEvent<HTMLParagraphElement, MouseEvent>)=>{
      setIsHovering(false);
      clearTimeout(timeOut);
      setElement({x:eve.clientX,y:eve.clientY,data:eve.currentTarget.innerText})
      setTimeOut(setTimeout(()=>{
        setIsHovering(true);
      },500));
    }
    const onMouseLeaveHandle=()=>{
      clearTimeout(timeOut);
      setIsHovering(false);
    }


  return (
    <div className='max-w-[300px] h-fit grid justify-center items-center drop-shadow-lg shadow-black  px-6 py-5 gap-4 rounded-md border cursor-pointer hover:scale-110 duration-300 ease-linear bg-color-card hover:z-10 relative'>
        {/* {isHoverIng && <p  className={`absolute z-10 text-nowrap translate-x-7 bg-slate-500 rounded-md text-white px-2`}>{element.data}</p>} */}
        <Image src={thumbnail} alt='thumb' width={238} height={306} className='object-cover object-top w-auto h-auto rounded-md shadow-md'/>
        <p className='w-full overflow-hidden text-ellipsis line-clamp-2 font-semibold' onMouseLeave={onMouseLeaveHandle} onMouseMove={onMouseMoveHandle}>{title}</p>
        <div className='flex gap-2 w-[60%] overflow-hidden justify-self-start '>
        {tags.map((tag,index)=>
          <p key={index} className='text-sm font-medium bg-gray-200 rounded-md'>#{tag}</p>
        )}
        </div>
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
