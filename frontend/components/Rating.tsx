'use client';
import React from 'react'
import { IoIosStar, IoIosStarHalf, IoIosStarOutline} from "react-icons/io";




const Rating = ({rating}:{rating:number}) => {
    if(rating>5 || rating<0 ){
        rating=0
    }
    const complete:number = Math.floor(rating)
    const notRated:number = 5 - rating;
    const extra:number = notRated-Math.floor(notRated);
    const blank:number = Math.floor(notRated);
    
  return (
    <div className='flex items-center w-fit gap-2'>
        {Array.apply(null,Array(complete)).map((_,index)=><IoIosStar key={index} className='text-color-highlight'/>)}
        {extra>0 && <IoIosStarHalf className='text-color-highlight'/> }
        {Array.apply(null,Array(blank)).map((_,index)=><IoIosStarOutline key={index}/>)}
    </div>
  )
}

export default Rating;
