import React from 'react'
import styles from './Search.module.css'
import { FaSearch  } from "react-icons/fa";
import { useSearch } from '../../context/SearchContext';
import { Link } from 'react-router-dom';

const Search = () => {

 const {searchQuery,setSearchQuery,searchResult,setSearchResult,handleSearch} =  useSearch();
  return (
    <div className={styles.searchBox}>
        <input placeholder='find your favorite products' onChange= {(e)=> {setSearchQuery(e.target.value)}}></input>
        <Link to={"/searchPage/"+searchQuery}><FaSearch onClick={handleSearch} /></Link>
    </div>
  )
}

export default Search  