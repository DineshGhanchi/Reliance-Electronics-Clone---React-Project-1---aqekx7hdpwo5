import React from 'react'
import { FaHome } from "react-icons/fa";
import { IoIosArrowForward } from "react-icons/io";
import styles from './SearchPageHeader.module.css'


const SearchPageHeader = ({catagoryName}) => {
  return (
    <div className={styles.searchPageHeader}>
       <span style={{fontSize:'25px'}}><FaHome /></span>  
       <span><IoIosArrowForward /></span>  
       <span>{catagoryName}</span>  
    </div> 

  )
}

export default SearchPageHeader