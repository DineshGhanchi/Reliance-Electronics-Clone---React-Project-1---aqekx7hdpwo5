import React, { useEffect, useState } from 'react'
import styles from './ProductList.module.css'
import CardGroup from '../CardGroup/CardGroup';

const ProductList = ({ sectionName , url}) => {
  const [products, setProducts] = useState([]);
  useEffect(
    () => {
      async function fetchProducts() {
        let data = await fetch(url, {
          headers: {
            projectId: 'f104bi07c490'
          }
        })
        let res = await data.json();
        // console.log(res.data);
        setProducts(res.data);

      }
      fetchProducts()
    }
    , [])

  return (
    <section className={styles.productList} >
      <h6 className={styles.sectionHeading}>{sectionName}</h6>
      <CardGroup products={products}/>
    </section>
  )
}

export default ProductList;