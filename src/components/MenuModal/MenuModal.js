import React from 'react'
import styles from './MenuModal.module.css';
const MenuModal = ({menuItems}) => {
  return (
    <div className={styles.container} >
      <ul>
        {menuItems.map((item)=>{
            return <li key={item}>{item}</li>
        })}
      </ul>
    </div>
  )
}

export default MenuModal