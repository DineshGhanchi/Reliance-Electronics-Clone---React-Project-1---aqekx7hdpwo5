import React, { useState } from 'react'
import styles from './MenuModal.module.css';
import { Link } from 'react-router-dom';
import { useSearch } from '../../context/SearchContext';
import CloseIcon from '@mui/icons-material/Close';

const MenuModal = ({ menuItems,setShowMenuModal,showMenuModal }) => {
  const { setSearchResult, setClickEvent } = useSearch();

  const handleCatagoryData = async (item) => {
    setShowMenuModal(!showMenuModal);
    console.log('handleCatagoryData');
    let url = `https://academics.newtonschool.co/api/v1/ecommerce/electronics/products?filter={"subCategory":"${item}"}`
    setClickEvent(url);
    let data = await fetch(url, {
      headers: {
        projectId: 'f104bi07c490'
      }
    })
    let res = await data.json();
    console.log(res.data);
    setTimeout(() => {
      setSearchResult(res.data);
    }, 2000)
  }

  return (
    <div className={styles.container} >
      <div className={styles.crossIcon} onClick={(e) => {
        setShowMenuModal(!showMenuModal);
      }}>
         <span><CloseIcon /></span>
      </div>
      <ul onClick={e => console.log(e, "ul")}>
        {menuItems.map((item, index) => {
          return <Link to={/searchPage/ + item} style={{ textDecoration: 'none' }} key={index}> <li onClick={() => handleCatagoryData(item)} key={item}>{item}</li></Link>
        })}
      </ul>
    </div>
  )
}

export default MenuModal