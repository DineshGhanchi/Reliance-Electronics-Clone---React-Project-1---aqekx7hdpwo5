import React from 'react'
import styles from './CartItem.module.css'

const CartItem = () => {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.image}>
          <img src='https://www.reliancedigital.in/medias/boAt-Airdopes148-TrueWireless-492579512-i-1?context=bWFzdGVyfGltYWdlc3wxNDYwMTl8aW1hZ2UvanBlZ3xpbWFnZXMvaGY1L2gzMy85ODE2Mzg5MDkxMzU4LmpwZ3xiZWQzNzkxZjAwMGU1NzMyZWQ3ZGQyZDhiMTdhY2I4ZmU0ZTY0YmQ4ZWE5MzY0ZTU1NTRkMjAyN2I2YTAzYmU2' />
        </div>
        <div className={styles.nameRating}>
          <div className={styles.name}>
            <span>boAt Airdopes 148 Bluetooth Truly Wireless in Ear Earbuds with mic, 42H Playtime, Beast Mode(Low Latency Upto 80ms) for Gaming, ENx Tech, ASAP Charge, IWP, IPX4 Water Resistance with 1 year warranty (Active Black, TWS)</span>
          </div>
          <div className={styles.rating}>
            <span>Rating</span>
          </div>
        </div>
        <div className={styles.price}>
          <span>₹1,099</span>
          <span className={styles.freeShipping}>Free Shipping</span>
          <span>*Delivery assurance is subject to our delivery locations staying open as per govt. regulations</span>
        </div>
      </div>
      <div className={styles.removeButtons}>
        <div>Remove</div>
        <div>Move to Wishlist</div>
      </div>
    </>
  )
}

export default CartItem