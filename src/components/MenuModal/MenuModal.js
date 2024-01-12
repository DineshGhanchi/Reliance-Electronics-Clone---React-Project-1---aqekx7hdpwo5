import React, { useState } from 'react'
import styles from './MenuModal.module.css';
import { Link } from 'react-router-dom';
import { useSearch } from '../../context/SearchContext';

const MenuModal = ({menuItems}) => {
  const {setSearchResult,setClickEvent} = useSearch();
   
   function handleCatagoryData(item){
    console.log('handleCatagoryData');
    let url = `https://academics.newtonschool.co/api/v1/ecommerce/electronics/products?filter={"subCategory":"${item}"}`
    setClickEvent(url);
    let data =  fetch(url, {
      headers: {
        projectId: 'f104bi07c490'
      }
    })
    let res =  data.json();
     console.log(res.data);
     setSearchResult(res.data);
  }

  return (
    <div className={styles.container} >
      <ul>
        {menuItems.map((item)=>{
            return <Link to={"/searchPage/"+item}><li key={item} onClick={()=>handleCatagoryData(item)}>{item}</li></Link>
        })}
      </ul>
    </div>
  )
}

export default MenuModal