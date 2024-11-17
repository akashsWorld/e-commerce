'use client';
import Categories from "@/components/Categories";
import Heading from "@/components/Heading";
import Image from "next/image";
import banner from '@/public/product-banner.png'
import Section from "@/components/Section";
import Rating from "@/components/Rating";
import ProductCard from "@/components/ProductCard";
import ProductCardSecondary from "@/components/ProductCardSecondary";

export default function Home() {

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
  <>
    <Categories/>

    {/* Make trending section more interactive and dynamic. */}

    <section id="trending" className="flex flex-col items-start container mx-auto px-10 gap-8">
      <Heading content="Trending"/>
      <div id="banners" className="grid grid-cols-3 w-full grid-rows-5 gap-x-3 gap-y-2 p-20">
        <div className="row-start-1 row-span-3"><Image src={banner} alt="banner"/></div>
        <div className="row-start-1 row-span-full"><Image src={banner} alt="banner"/></div>
        <div className="row-start-1 row-span-2"><Image src={banner} alt="banner"/></div>
        <div className="row-start-3 row-span-full"><Image src={banner} alt="banner"/></div>
        <div className="row-span-3"><Image src={banner} alt="banner"/></div>
      </div>
    </section>
    <Section heading="Best Selling" sectionName="">
        <ProductCard/>
        <ProductCard/>
        <ProductCard/>
        <ProductCard/>
        <ProductCard/>
        <ProductCard/>
    </Section>
    <Section heading="Top Deals" sectionName="">
      <ProductCardSecondary/>
      <ProductCardSecondary/>
      <ProductCardSecondary/>
      <ProductCardSecondary/>
    </Section>
    <Section heading="Suggested For You" sectionName="suggetions">
      
    </Section>
  </>
  );
}
