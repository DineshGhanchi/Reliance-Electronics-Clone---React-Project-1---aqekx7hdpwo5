import React, { useEffect, useState } from 'react'
import styles from './ProductList.module.css'
import CardGroup from '../CardGroup/CardGroup';
import { Button } from '@mui/material';
import { Link } from 'react-router-dom';
import { useSearch } from '../../context/SearchContext';

const ProductList = ({ sectionName , url}) => {
  const {setSearchResult,setClickEvent} = useSearch();
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
    
  async function handleViewAllData(){
    let url = 'https://academics.newtonschool.co/api/v1/ecommerce/electronics/products'
    setClickEvent(url);
    let data = await fetch(url, {
      headers: {
        projectId: 'f104bi07c490'
      }
    })
    let res = await data.json();
     console.log(res.data);
     setSearchResult(res.data);
  }  

  return (
    <section className={styles.productList} >
      <h6 className={styles.sectionHeading}>{sectionName}</h6>
      <Link to='searchPage/viewAll'>
        <Button variant="contained" onClick={handleViewAllData} style={{margin:'0 10px'}}>View All</Button>
      </Link>
      <CardGroup products={products}/>
    </section>
  )
}

export default ProductList;