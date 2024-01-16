import React from 'react'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import styles from './CheckOutPage.module.css'

const CheckOutPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.address}>
        <div>
          <span>SHIPPING ADDRESS</span>
          <span><ExpandMoreIcon /></span>
        </div>
      </div>
      <div className={styles.details}>
        <div>
          <span>ORDER DETAILS</span>
          <span><ExpandMoreIcon /></span>
        </div>
      </div>
      <div className={styles.payment}>
        <div >
          <span>PAY SECURELY</span>
          <span><ExpandMoreIcon /></span>
        </div>
      </div>
    </div>
  )
}

export default CheckOutPage