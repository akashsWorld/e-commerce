"use client";
import { StaticImageData } from "next/image";
import Category from "./Category";
import card from "@/public/card picture.png";
import { useState } from "react";

const Categories = () => {
  const [isScroll,setIsScroll]=useState(false);

  const categories: {
    imageSrc: StaticImageData;
    categoryName: string;
    routeTo: string;
  }[] = [
    {
      imageSrc: card, // TODO:Make it url not Actual image.
      categoryName: "Men",
      routeTo: "/",
    },
    {
      imageSrc: card, // TODO:Make it url not Actual image.
      categoryName: "Men",
      routeTo: "/",
    },
  ];
  return (
    <section className={`flex gap-8 px-[60px] py-[56px] overscroll-x-auto no-scroll`}>
      {categories.map((ele, index) => (
        <Category key={index} {...ele} />
      ))}
      {/* <Category/> */}
    </section>
  );
};

export default Categories;
