import React from 'react'
import LocationOnIcon from '@mui/icons-material/LocationOn';
import CartItem from '../CartItem/CartItem';
import styles from './ShoppingCart.module.css'
const ShoppingCart = () => {
    return (
        <div className={styles.container}>
            <div className={styles.cardSection}>
                <div className={styles.counterLocation}>
                    <div className={styles.counter}>
                        <span>My Cart</span>
                        <span>(1 item)</span>
                    </div>
                    <div className={styles.location}>
                        <span>Shipping to:</span>
                        <span className={styles.pincode}>342001</span>
                        <LocationOnIcon />
                    </div>
                </div>
                <CartItem />
            </div>
            <div className={styles.checkOutSection}>
                <div className={styles.checkOutButton}>
                    CHECKOUT
                </div>
                <div className={styles.priceDetail}>
                    <span className={styles.priceDetailBoxHeading}>PRICE DETAIL</span>
                    <div className={styles.actualPrice}>
                        <span>Price</span>
                        <span>₹2,198</span>
                    </div>
                    <div className={styles.deleveryCharges}>
                        <span>Delivery Charges</span>
                        <span>Free</span>
                    </div>
                    <div className={styles.amountPayable}>
                        <span>AMOUNT PAYABLE</span>
                        <span>₹2,198</span>
                    </div>
                    <div className={styles.text}>
                        Safe and Secure Payments. Easy returns. 100% Authentic products.
                    </div>
                </div>

            </div>
        </div>
    )
}

export default ShoppingCart