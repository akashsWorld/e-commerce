'use client';
import Categories from "@/components/Categories";
import Heading from "@/components/Heading";
import Image from "next/image";
import banner from '@/public/product-banner.png'
import Section from "@/components/Section";
import Rating from "@/components/Rating";

export default function Home() {
  return (
  <>
    <Categories/>

    {/* Make trending section more interactive and dynamic. */}

    <section id="trending" className="flex flex-col items-start container mx-auto px-10 gap-8">
      <Heading content="Trending"/>
      <div id="banners" className="grid grid-cols-3 w-full grid-rows-5 gap-x-3 gap-y-2 px-2 py-2">
        <div className="row-start-1 row-span-3"><Image src={banner} alt="banner"/></div>
        <div className="row-start-1 row-span-full"><Image src={banner} alt="banner"/></div>
        <div className="row-start-1 row-span-2"><Image src={banner} alt="banner"/></div>
        <div className="row-start-3 row-span-full"><Image src={banner} alt="banner"/></div>
        <div className="row-span-3"><Image src={banner} alt="banner"/></div>
      </div>
    </section>
    <Section heading="Best Selling" sectionName=""/>
  </>
  );
}
