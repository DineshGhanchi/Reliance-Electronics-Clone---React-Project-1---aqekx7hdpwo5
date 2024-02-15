import React, { useEffect, useState } from 'react'
import LocationOnIcon from '@mui/icons-material/LocationOn';
import CartItem from '../CartItem/CartItem';
import styles from './ShoppingCart.module.css'
import { Link, useNavigate } from 'react-router-dom';
import Loader from '../Loader/Loader';

const ShoppingCart = () => {
    const [cartItem, setCartItem] = useState(null);
    const navigate = useNavigate();
    useEffect(() => {
       try{ 
        async function fetchCartItems() {
            const user = JSON.parse(localStorage.getItem("userLoginDetail"));
            if (user === null) {
                navigate('/login');
                return;
            }
            const response = await fetch('https://academics.newtonschool.co/api/v1/ecommerce/cart',
                {
                    method: "GET",
                    headers: {
                        projectID: "f104bi07c490",
                        Authorization: `Bearer ${user.token}`
                    }
                });
            const result = await response.json();
            console.log(result);
            setTimeout(() => {
                setCartItem(result);
            }, 2000)     
        }
        fetchCartItems();
    }catch(error){
        console.log(error);
    }
    }, [])
    return (
        <>
            {!cartItem
                ? <Loader />
                : <div className={styles.container}>
                    <div className={styles.cardSection}>
                        <div className={styles.counterLocation}>
                            <div className={styles.counter}>
                                <span>My Cart</span>
                                <span>({cartItem && cartItem.data.items.length} item)</span>
                            </div>
                            <div className={styles.location}>
                                <span>Shipping to:</span>
                                <span className={styles.pincode}>342001</span>
                                <LocationOnIcon />
                            </div>
                        </div>
                        {cartItem && cartItem.data.items.map((productDetail, index) => {
                            return <CartItem productDetail={productDetail} key={index} />
                        })}
                    </div>
                    <div className={styles.checkOutSection}>
                        <Link to="/checkOutPage" style={{ textDecoration: 'none' }}>
                            <div className={styles.checkOutButton}>
                                CHECKOUT
                            </div>
                        </Link>
                        <div className={styles.priceDetail}>
                            <span className={styles.priceDetailBoxHeading}>PRICE DETAIL</span>
                            <div className={styles.actualPrice}>
                                <span>Price</span>
                                <span>₹{cartItem && cartItem.data.totalPrice}</span>
                            </div>
                            <div className={styles.deleveryCharges}>
                                <span>Delivery Charges</span>
                                <span>Free</span>
                            </div>
                            <div className={styles.amountPayable}>
                                <span>AMOUNT PAYABLE</span>
                                <span>₹{cartItem && cartItem.data.totalPrice}</span>
                            </div>
                            <div className={styles.text}>
                                Safe and Secure Payments. Easy returns. 100% Authentic products.
                            </div>
                        </div>

                    </div>
                </div>
            }
        </>
    )
}

export default ShoppingCart