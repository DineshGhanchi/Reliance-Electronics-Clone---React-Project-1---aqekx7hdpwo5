import React from 'react'
import { FaHome } from "react-icons/fa";
import { IoIosArrowForward } from "react-icons/io";
import styles from './SearchPageHeader.module.css'
import { Link } from 'react-router-dom';


const SearchPageHeader = ({catagoryName}) => {
  return (
    <div className={styles.searchPageHeader}>
       <Link to='/'><span style={{fontSize:'25px'}} className={styles.homeIcon}><FaHome /></span></Link>  
       <span className={styles.arrow}><IoIosArrowForward /></span>  
       <span className={styles.itemName}>{catagoryName}</span>  
    </div> 

  )
}

export default SearchPageHeader