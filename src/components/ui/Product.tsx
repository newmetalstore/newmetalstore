/* eslint-disable @next/next/no-img-element */

import React from 'react'
import styles from "./Product.module.css"
import Button from './Button'
import { ArrowRight } from 'lucide-react'
import Link from 'next/link'

export interface ProductProps{
    title: string,
    description: string,
    price: string,
    imgSrc: string,
    category: string
}


function Product({title, description, price, imgSrc, category}: ProductProps) {
    return (
        <div className={styles.productWrapper}>
            <div className={styles.productTitleWrapper}>
                <h1 className={styles.productTitle + " montserrat"}>{title}</h1>
                <div className={styles.productTitleUnderline}>
                    <div className={styles.productTitleX + " montserrat"}>x</div>
                    <div className={styles.productTitleSquare}></div>
                    <div className={styles.productTitleDescription + " inter"}>{description}</div>
                </div>
            </div>

            <img src={imgSrc} className={styles.productImage} />

            <Button>
                 <Link key={title} href={"/" + category + "/" + title}>
                 <h1 className={styles.productSubtitleWrapper + " inter"}>Vai al prodotto
                     <ArrowRight size={20}></ArrowRight>
                </h1>
                 </Link>
            </Button>
        </div>
    )
}

export default Product