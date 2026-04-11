import styles from './Footer.module.css'
import location from '../assets/location.svg'
import contact from '../assets/contact.svg'
import mail from '../assets/mail.svg'

function Footer(){
     
    return(
            <div className={styles.footerSection}>
                <ul className={styles.container}>
                    <li className={styles.col1}>
                        <img src="" alt="logo" className={styles.logo} />
                        <div className={styles.imgText}>
                            <img src={location} alt="location" />
                            <p className={styles.text}>Kathmandu,Nepal</p>
                        </div>
                        <div className={styles.imgText}>
                            <img src={contact} alt="Contact" />
                            <p className={styles.text}>+977-1-123-4567</p>
                        </div>
                        <div className={styles.imgText}>
                            <img src={mail} alt="Mail" />
                            <p className={styles.text}>Shopzero23@gmail.com</p>
                        </div>
                    </li>
                    <li className={styles.col2}>
                        <h3>Quick Links</h3>
                        <p><a href="#">About Us</a></p>
                        <p><a href="#">How it Works</a></p>
                        <p><a href="#">Sustainability</a></p>
                        <p><a href="#">Seller Guide</a></p>
                        <p><a href="#">Donation Program</a></p>
                    </li>
                    <li className={styles.col3}>
                        <h3>Customer Service</h3>
                        <p><a href="#">Help Center</a></p>
                        <p><a href="#">Contact Us</a></p>
                        <p><a href="#">Shipping info</a></p>
                        <p><a href="#">Returns</a></p>
                        <p><a href="#">Size Guide</a></p>
                    </li>
                    <li className={styles.col4}>
                        <h3>Stay Updated</h3>
                        <p>Get the update about the new trending products</p>
                        <div className={styles.emailSection}>
                        <input type="email" name="email" placeholder="Enter your email" className={styles.emailInput} />
                        <button className={styles.btn}>Subscribe</button>
                        </div>
                    </li>
                </ul><hr/>
                <span>© 2026 ShopZero. All rights reserved.</span>
            </div>
    )
}
export default Footer;