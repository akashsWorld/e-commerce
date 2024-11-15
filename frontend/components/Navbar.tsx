'use client';
import Image from "next/image"
import logo from '@/public/Logo.svg'
import { CiSearch } from "react-icons/ci";
import { BsStars } from "react-icons/bs";
import { MdAccountCircle } from "react-icons/md";
import { useState } from "react";
import Button from "./Button";



const Navbar = () => {

    const [isLogin,setIsLogin]= useState(false);

  return (
    <nav className="w-full flex items-center py-6 justify-between container mx-auto px-10 gap-4">
        <div className="flex items-center justify-center px-2 gap-1">
            <Image src={logo} width={24} height={26} alt="cromcart"/>
            <h1 className="font-bold font-heading text-xl py-1 px-2 text-color-blue tracking-wider">Cromkart</h1>            
        </div>
        <div className="flex items-center min-w-[35%] border-[1px] rounded-xl px-2 min-h-9 border-text">
            <input type="text" className="outline-none h-full w-[95%] font-medium  " placeholder="Search"/>
            <CiSearch className="w-fit cursor-pointer"/>
        </div>
        <div className="flex items-center gap-2 md:gap-6 xl:gap-9">
            {isLogin?<>
                <p>Orders</p>
                <p className="flex items-center gap-1 min-w-[85px] justify-center"><BsStars/> Wish List</p>
                <p>Cart</p>
                <p className="flex gap-1 items-center min-w-[85px]"><MdAccountCircle/> Accounts</p>  
            </>: <>
                <Button content="Log in"/>
            </>}
        </div>  
    </nav>
  )
}

export default Navbar
