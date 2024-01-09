import React, { useState } from 'react'
import styles from './Search.module.css'
import { FaSearch  } from "react-icons/fa";
import { useSearch } from '../../context/SearchContext';
import { Link } from 'react-router-dom';

const Search = () => {
 const [searchValue, setSearchValue] = useState('');
 const {searchQuery,setSearchQuery,searchResult,setSearchResult,handleSearch} =  useSearch();

 function handleSearchValue(e){
   setSearchQuery(e.target.value);
   setSearchValue(e.target.value)
 }
 
 function handleSearchClick(){
     handleSearch();
     setSearchValue('');
 }

  return (
    <div className={styles.searchBox}>
        <input placeholder='find your favorite products' value={searchValue} onChange= {handleSearchValue}></input>
        <Link to={"/searchPage/"+searchQuery}><FaSearch onClick={handleSearchClick} /></Link>
    </div>
  )
}

export default Search  