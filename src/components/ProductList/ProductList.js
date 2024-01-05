import React, { useEffect, useState } from 'react'
import styles from './ProductList.module.css'
import CardGroup from '../CardGroup/CardGroup';
import { Button } from '@mui/material';

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
      <Button variant="contained" style={{margin:'0 10px'}}>View All</Button>
      <CardGroup products={products}/>
    </section>
  )
}

export default ProductList;