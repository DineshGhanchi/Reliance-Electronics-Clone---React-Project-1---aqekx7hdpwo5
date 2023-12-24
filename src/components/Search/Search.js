import React from 'react'
import styles from './Search.module.css'
import { FaSearch  } from "react-icons/fa";

const Search = () => {
  return (
    <div className={styles.searchBox}>
        <input placeholder='find your favorite products'></input>
        <FaSearch />
    </div>
  )
}

export default Search  