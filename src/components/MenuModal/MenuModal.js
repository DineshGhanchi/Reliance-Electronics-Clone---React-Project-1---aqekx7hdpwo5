import React from 'react'
import styles from './MenuModal.module.css';
import { Link } from 'react-router-dom';
const MenuModal = ({menuItems}) => {
  return (
    <div className={styles.container} >
      <ul>
        {menuItems.map((item)=>{
            return <Link to={"/searchPage/"+item}><li key={item}>{item}</li></Link>
        })}
      </ul>
    </div>
  )
}

export default MenuModal