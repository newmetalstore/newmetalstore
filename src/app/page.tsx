import React from 'react'
import Hero from '../components/ui/Hero'
import Product from '@/components/ui/Product'
import productConfig from "../../public/productConfig.json"
import Image from 'next/image';
import showerIcon from "../../public/shower-icon.svg";
import Link from 'next/link';
let pc = JSON.parse(JSON.stringify(productConfig));
function Home() {

  return (
    <div style={{ display: "flex", flexDirection: "column" }} className='home-body'>

      <Hero title="NEW METAL" description="Accessori per vetri temperati"></Hero>
      <main className='categories-wrapper'>
        {Object.keys(pc).filter(Boolean).map((category: string, idx: number) =>
        <Link href={"/" + category}>
          <div key={idx} className="category-title_wrapper">
             <h3 className="category-title inter">{category}</h3>
          </div>
          </Link>
        )}
      </main>



    </div>
  )
}

export default Home