'use client'
import React from 'react'
import Product from '@/components/ui/Product'
import Image from 'next/image';
import showerIcon from "../../public/shower-icon.svg";
import productConfig from "../../../public/productConfig.json"
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import Hero from '@/components/ui/Hero';
let pc = JSON.parse(JSON.stringify(productConfig));
function Products() {
  const categoryTitle = usePathname()
  const category = decodeURIComponent(categoryTitle.split("/")[1]);

  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <Hero title={category} description={''} showButton={false}></Hero>

      <main className='categories-wrapper'>

        {pc[category].map((item: any, idx: number) => (
      <Product key={idx} title={item.title} description={item.subtitle ?? item.description} price={item.finishes[0].price ?? 20.00} imgSrc={item.image_link}></Product>
    ))}
      </main>



    </div>
  )
}

export default Products