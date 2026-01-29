import styles from './BestSeller.module.css'
import Card from './Card.jsx'
import {useState,useEffect} from 'react'
import picture from '../assets/winter.png'

function BestSeller(){
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
                console.log(product.title);
                return(
                <Card key={product.productKey} src={product.MainImage} acPrice={product.price} discount={product.discount} title={product.title} />
                )
            })
          }
        </div>
        </div>
    )
}

export default BestSeller; 