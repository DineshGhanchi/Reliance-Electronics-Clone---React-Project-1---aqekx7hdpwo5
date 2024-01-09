import React from 'react'
import { FaHome } from "react-icons/fa";
import { IoIosArrowForward } from "react-icons/io";
import styles from './SearchPageHeader.module.css'
import { Link } from 'react-router-dom';


const SearchPageHeader = ({catagoryName}) => {
  return (
    <div className={styles.searchPageHeader}>
       <Link to='/'><span style={{fontSize:'25px'}}><FaHome /></span></Link>  
       <span><IoIosArrowForward /></span>  
       <span>{catagoryName}</span>  
    </div> 

  )
}

export default SearchPageHeader