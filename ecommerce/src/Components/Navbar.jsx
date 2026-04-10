import styles from './Navbar.module.css'
import cart from '../assets/cart.svg'
import search from '../assets/search.png'
import {useState, useEffect} from 'react';
import {NavLink} from 'react-router-dom';

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
                        <li><a href="#" className={scrolled?styles.white:styles.black}>Home</a></li>
                        <li><a href="#bestSeller" className={scrolled?styles.white:styles.black}>Best Seller</a></li>
                        <li><a href="#forYou" className={scrolled?styles.white:styles.black}>For You</a></li>
                        <li>
                           <NavLink className={styles.NavLink} to="/signup"><button className={styles.SignBtn}>Sign Up</button></NavLink>
                        </li>
                        <li>
                            <NavLink className={styles.NavLink} to="/login"><button className={styles.LoginBtn}>Log in</button></NavLink>
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