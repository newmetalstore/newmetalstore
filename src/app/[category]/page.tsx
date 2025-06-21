/* eslint-disable @typescript-eslint/no-explicit-any */


'use client'
import Hero from '@/components/ui/Hero';
import Product from '@/components/ui/Product';
import { usePathname } from 'next/navigation';
import productConfig from "../../../public/productConfig.json";
import BackButton from '@/components/ui/BackButton';
import Link from 'next/link';
const pc = JSON.parse(JSON.stringify(productConfig));
function Products() {
  const categoryTitle = usePathname()
  const category = decodeURIComponent(categoryTitle.split("/")[1]);

  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <BackButton></BackButton>
      <Hero title={category} description={''} showButton={false}></Hero>

      <main className='categories-wrapper'>
        {pc[category]?.sort((a: { title: string; }, b: { title: string; }) => Number(a.title.substring(2)) - Number(b.title.substring(2))).map((item: any, idx: number) => (
         
            <Product key={idx} category={category} title={item.title} description={item.subtitle} price={item.finishes[0].price ?? 20.00} imgSrc={item.image_link}></Product>
        ))}
      </main>



    </div>
  )
}

export default Products