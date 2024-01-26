import React from 'react'
import styles from './Footer.module.css'
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import YouTubeIcon from '@mui/icons-material/YouTube';

export const Footer = () => {
  return (
    <div className={styles.footer}>
      <div className={styles.websiteNavigation}>
        <div>
          <div>PRODUCT CATEGORIES</div>
          <span>Smartphones</span>
          <span>Laptops</span>
          <span>DSLR Cameras</span>
          <span>Televisions</span>
          <span>Air Conditioners</span>
          <span>Refrigerators</span>
          <span>Kitchen Appliances</span>
          <span>Accessories</span>
          <span>Personal Care & Grooming</span>
        </div>
        <div>
          <div>SITE INFO</div>
          <span>About Reliance Digital</span>
          <span>resQ Services</span>
          <span>Site Map</span>
          <span>Gift Cards</span>
          <span>Corporate Enquires</span>
          <span>Contact Us</span>
        </div>
        <div>
          <div>RESOURSE CENTER</div>
          <span>Product Reviews</span>
          <span>Buying Guides</span>
          <span>How Tos</span>
          <span>Featured Stories</span>
          <span>Nearest Store</span>
        </div>
      </div>
      <div className={styles.OutsideNavigation}>
        <div className={styles.followUs}>
          <span>FOLLOW US</span>
          <div className={styles.followIcons}>
            <FacebookIcon />
            <TwitterIcon />
            <YouTubeIcon />
          </div>
        </div>
        <div className={styles.downloadApp}>
          <span>EXPERIENCE RELIANCE DIGITAL APP ON MOBILE</span>
          <div className={styles.downloadIcon}>
            <img src='https://www.reliancedigital.in/build/client/images/google_play_store.png' />
            <img src='https://www.reliancedigital.in/build/client/images/ios_app_store_icon.png' />
          </div>
        </div>
      </div>
    </div>
  )
}
