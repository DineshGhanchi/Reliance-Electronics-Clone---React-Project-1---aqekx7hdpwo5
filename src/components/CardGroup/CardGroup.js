import React, { useRef } from 'react'
import styles from './CardGroup.module.css'
import Product from '../Product/Product';
import { TiMediaPlay, TiMediaPlayReverse } from "react-icons/ti";
import { Link } from 'react-router-dom';

const CardGroup = ({products}) => {
  const imageBoxRef = useRef(null);
  function leftScroll(){
    imageBoxRef.current.scrollLeft -= 250;
  }
  function rightScroll(){
   imageBoxRef.current.scrollLeft += 250;
  }
  return (
    <div className={styles.container}>
      <button  onClick={leftScroll}><TiMediaPlayReverse style={{fontSize:"25px"}}/></button>
      <div className={styles.imageBox} ref={imageBoxRef}>
        {products.map((product , index)=>{
        //  return <div key={index} className={styles.card}><img src= {product.displayImage} style={{width:'250px'}}></img><div> card{index+1}</div></div>
          return <Link to={/productDetail/+product._id}><Product product={product} index={index} key={index}/></Link>
        })}
      </div>
      <button onClick={rightScroll}><TiMediaPlay /></button>
    </div>
  )
}

export default CardGroup;