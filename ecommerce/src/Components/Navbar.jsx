import styles from './Navbar.module.css'
import cart from '../assets/cart.svg'
import search from '../assets/search.png'
import {useState, useEffect} from 'react';

function Navbar() {

    const [scrolled , setScrolled] = useState(false);

    useEffect(()=>{
        window.addEventListener('scroll',()=>{
            setScrolled(window.scrollY>10);
        })
    },[]);

    return (
        <div>
            <nav className={`${styles.navbar} ${scrolled?styles.Scrolled:styles.UnScrolled}`}>
                <div className={styles.logo} >
                    <img src="" alt="logo" />
                    </div>
                    <div className={styles.search}>
                        <img src={search} alt="search-icon"/>
                        <input type="text" className={styles.searchBox} placeholder="Search in Shop Zero" />
                    </div>
                    <div className={styles.middle}>
                    <ul className={scrolled?styles.white:styles.black}>
                        <li>Home</li>
                        <li>shop</li>
                        <li>Sale</li>
                        <li>
                            <select className={`${scrolled?styles.white:styles.black} ${scrolled?styles.Scrolled:styles.UnScrolled}`}>
                                <option selected>Category</option>
                                <option>Accessories</option>
                                <option>Household Items</option>
                                <option>Clothing</option>
                                <option>Electronics</option>
                                <option>Gym</option>
                                <option>Beauty Care</option>
                            </select>
                        </li>
                    </ul>
                    </div>
                    <div className={styles.cartImg}>
                        <img src={cart} alt="cart-logo" className={scrolled?styles.filter:styles.noFilter} />
                    </div>
            </nav>
        </div>
    )
}

export default Navbar;