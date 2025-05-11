/* eslint-disable @next/next/no-img-element */

import React from 'react'
import styles from "./Product.module.css"

export interface ProductProps{
    title: string,
    description: string,
    price: string,
    imgSrc: string
}


function Product({title, description, price, imgSrc}: ProductProps) {
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

            <div className={styles.productSubtitleWrapper}>
                <p>{price} €</p>
            </div>
        </div>
    )
}

export default Product