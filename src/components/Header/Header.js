
import { IoMenu } from "react-icons/io5";
import Search from '../Search/Search';
import styles from './Header.module.css';
import { FaShoppingCart, FaUser } from "react-icons/fa";
import { useEffect, useRef, useState } from "react";
import MenuModal from "../MenuModal/MenuModal";
import { Link, Outlet } from "react-router-dom"

export default function Header() {
  const [categories, setCategories] = useState([]);
  const [showMenuModal, setShowMenuModal] = useState(false);
  const menuRef = useRef(null);
  useEffect(
    () => {
      async function fetchCategories() {
        let url = 'https://academics.newtonschool.co/api/v1/ecommerce/electronics/categories'
        let data = await fetch(url, {
          headers: {
            projectId: 'f104bi07c490'
          }
        })
        let res = await data.json()
        setCategories(res.data);

      }
      fetchCategories()
    }
    , [])

    const handleOutsideClick =(e)=>{
      if (menuRef.current && !menuRef.current.contains(e.target)){
        setShowMenuModal(false);
      }
    }    
    useEffect(()=>{
        document.addEventListener('click',handleOutsideClick)
    })

  return (
    <div className={styles.header}>
      <Link to="/" >
        <img
          src='https://www.reliancedigital.in/build/client/images/loaders/rd_logo.svg'
          alt='logoImg'
          className={styles.logo}
        />
      </Link>
      <div className={styles.menu}>Menu <IoMenu onClick={() => {
        setShowMenuModal(!showMenuModal);
      }} style={{ fontSize: '28px' }} /></div>
      {showMenuModal && <span ref={menuRef}><MenuModal  menuItems={categories} /></span>}
      <Search />
      <div className={styles.headerDetail}>
        <span style={{ borderRight: "1px solid white" }}>Select Your Pin code</span>
        <Link to="cart">
          <div>
            < FaShoppingCart  style={{color:"white"}}/>
            <span className={styles.cart} >Cart</span>
          </div>
        </Link>
        <Link to="login">
          <div>
            <FaUser style={{color:"white"}}/>
            <span className={styles.login}>Login</span>
          </div>
        </Link>
      </div>
    </div>
  )
}