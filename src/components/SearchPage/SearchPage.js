import { useParams } from 'react-router-dom';
import React, { useEffect } from 'react'
import SearchPageHeader from '../SearchPageHeader/SearchPageHeader';
import styles from './Searchpage.module.css'
import FilterBox from '../FilterBox/FilterBox';
import { useSearch } from '../../context/SearchContext';
import Product from '../Product/Product';
import Dropdowns from '../Dropdown/Dropdown';



const SearchPage = () => {
  const {searchResult} = useSearch();
  let {id} = useParams();
  console.log('searchpage',searchResult); 
  
  // useEffect(()=>{
  //   console.log(searchResult,"useEfeect");
  // },[searchResult]);

  return (
    <div className={styles.searchPage}>
      <SearchPageHeader catagoryName={id} />
      <div className={styles.container}>
        <div className={styles.asideHead}><span>FILTERS</span></div>
        <div className={styles.cardBoxHeader}>
          <span>Searching for : <span style={{fontSize:'20px', fontWeight:"600"}}>{id}</span></span>
          <div className={styles.sorting}>
            {/* <span>Sort By:</span>
            <Button variant="contained" style={{margin:'0 10px'}}>Price(Low-High)</Button>
            <Button variant="contained">Price(High-Low)</Button> */}
             <Dropdowns />
          </div>

        </div>
        <div className={styles.aside}>
          <FilterBox data={searchResult}/>
        </div>
        <div className={styles.cardBox}>
          { searchResult && searchResult.map((product,index)=>{
             return <Product product={product} index={index} key={index}/>
          })}
          
        </div>
      </div>
    </div>
  )
}

export default React.memo(SearchPage)