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
  const [loginDetail, setLoginDetail] = useState(true);
  const [showLoginDetailModal, setShowLoginDetailModal] = useState(false);
  const menuRef = useRef(null);
  const user = JSON.parse(localStorage.getItem("userLoginDetail"));

  
  function handleLogoutModal() {
     setShowLoginDetailModal(!showLoginDetailModal);
  }
  function userLogout(){
    localStorage.setItem("userLoginDetail", JSON.stringify(null));
  }

  useEffect(
    () => {
      if ( user != null && user.data.name ) {
        setLoginDetail(true);
      }
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

  const handleOutsideClick = (e) => {
    setShowMenuModal(false);
  }

  useEffect(() => {
    document.addEventListener('click', handleOutsideClick, true);
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
      <div className={styles.menu}>Menu <IoMenu onClick={(e) => {
        setShowMenuModal(!showMenuModal);
        e.stopPropagation();
      }} style={{ fontSize: '28px' }} />
      </div>
      {showMenuModal && <MenuModal menuItems={categories} />}
      <Search />
      <div className={styles.headerDetail}>
        <span style={{ borderRight: "1px solid white" }}>Select Your Pin code</span>
        <Link to="cart" style={{textDecoration: 'none'}}>
          <div>
            < FaShoppingCart style={{ color: "white" }} />
            <span className={styles.cart} >Cart</span>
          </div>
        </Link> 
        {user!=null && loginDetail 
         ?  <div onClick={handleLogoutModal}>
             <FaUser style={{ color: "white" , cursor:"pointer" }} />
             <span className={styles.login}>Hi {user.data.name}</span>
            </div>
         : <Link to="login" style={{textDecoration: 'none'}}>
            <div className={styles.login}>
              <FaUser style={{ color: "white", cursor:"pointer" }} />
              <span className={styles.login}>Login</span>
            </div>
           </Link> 
        }
      </div>
      {showLoginDetailModal && <div className={styles.logoutModal}>
        <ul>
          <Link style={{textDecoration: 'none'}}><li>My Wishlist</li></Link>
          <Link style={{textDecoration: 'none'}}><li>My Orders</li></Link>
          <Link to="/login" style={{textDecoration: 'none'}}><li onClick={userLogout}>Logout</li></Link>
        </ul>
       </div>
      }
    </div>
  )
}