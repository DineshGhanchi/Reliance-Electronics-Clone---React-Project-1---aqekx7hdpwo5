import React from 'react'
import styles from './CartItem.module.css'

const CartItem = ({productDetail}) => {
  const user = JSON.parse(localStorage.getItem("userLoginDetail"));
  async function handleRemoveButton(){
     const response = fetch(`https://academics.newtonschool.co/api/v1/ecommerce/cart/${productDetail.product._id}`,{
       method: 'DELETE',
       headers: {
        projectID: "f104bi07c490",
        Authorization: `Bearer ${user.token}`                    
       }
     })
     console.log("response" ,response);
  }

  return (
    <div className={styles.mainBox}>
      <div className={styles.container}>
        <div className={styles.image}>
          <img src={productDetail.product.displayImage} />
        </div>
        <div className={styles.nameRating}>
          <div className={styles.name}>
            <span>{productDetail.product.name}</span>
          </div>
          <div className={styles.rating}>
            <span>Rating</span>
          </div>
        </div>
        <div className={styles.price}>
          <span>₹{productDetail.product.price}</span>
          <span className={styles.freeShipping}>Free Shipping</span>
          <span>*Delivery assurance is subject to our delivery locations staying open as per govt. regulations</span>
        </div>
      </div>
      <div className={styles.removeButtons}>
        <div onClick={handleRemoveButton}>Remove</div>
        <div>Move to Wishlist</div>
      </div>
    </div>
  )
}

export default CartItem