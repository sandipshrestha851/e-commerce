import Card from './Card.jsx'
import styles from './ForYou.module.css'
import picture from '../assets/winter.png'
import { useEffect, useState } from 'react';
import {NavLink } from 'react-router-dom'

function ForYou() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const getProducts = async () => {
            let res = await fetch(`${import.meta.env.BASE_URL}jsonFiles/bestProducts.json`)
            let data = await res.json();
            setProducts(data.totalProducts);
        }
        getProducts();
    }, [])

    return (
        <div className={styles.foryouSection} id="forYou">
            <div className={styles.heading}>
                <h2>For You</h2>
                <p>These are exactly the things you are looking for</p>
            </div>
            <div className={styles.container}>{
                products.map(product=>{
                    return(
                    <NavLink to={`/products/${product.productKey}`} className={styles.navLink}><Card src={product.MainImage} acPrice={product.price} discount={product.discount} title={product.title} /></NavLink>
                    )
                })
            }
            </div>
        </div>
    )
}
export default ForYou;