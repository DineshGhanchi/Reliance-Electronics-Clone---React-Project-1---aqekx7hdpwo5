import React from 'react'
import styles from './Product.module.css'
const Product = ({product, index}) => {
  return (
    <div key={index} className={styles.card}>
      <img src= {product.displayImage} style={{width:'250px'}}></img>
      <div className={styles.cardName}> {product.name}</div>
      <div className={styles.price}><span>Price: </span>  <span>₹{product.price}</span></div>
   </div>
  )
}

export default Product