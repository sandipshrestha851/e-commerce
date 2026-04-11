import styles from './BestSeller.module.css'
import Card from './Card.jsx'
import {useState,useEffect,useContext} from 'react'
import picture from '../assets/winter.png'
import {NavLink,useParams} from 'react-router-dom'
import {ProductsKeys} from '../main.jsx';

function BestSeller(){
    const {key,setKey} = useContext(ProductsKeys);
    let data;
    const [products,setProducts] = useState([]);

    useEffect(()=>{
        async function getProducts() {
            try{
            let res = await fetch('/jsonFiles/bestProducts.json');
            data = await res.json();
            setProducts(data.products);
            // console.log(data);
            // console.log(data.products);
            }catch(err){
                console.log(err);
            }
        }
        getProducts();
    },[]);

    return(
        <div className={styles.bestSection} id="bestSeller">
        <div className = {styles.heading}>  
            <h2>Best Seller</h2>
            <p>The product everyone is talking about.</p>
        </div>
        <div className={styles.CardsContainer}>
          {
            products.map(product=>{
                return(
                <NavLink className={styles.navLink} to ={`/products/${product.productKey}`}><Card key={product.productKey} src={product.MainImage} acPrice={product.price} discount={product.discount} title={product.title} /></NavLink>
                )
            })
          }
        </div>
        </div>
    )
}

export default BestSeller; 