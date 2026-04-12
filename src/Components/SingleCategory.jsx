import styles from './SingleCategory.module.css'
import { useParams , NavLink } from 'react-router-dom'
import {useState , useEffect} from 'react'
import Card from './Card.jsx'

const SingleCategory = () => {

    const params = useParams();
    const [products, setProducts] = useState([]);

    useEffect(() => {
        async function getProducts() {
            try{
            let res = await fetch(`${import.meta.env.BASE_URL}jsonFiles/bestProducts.json`)
            let data = await res.json();
            let found = data.doubledProducts.filter(product => product.category == params.category);

            if (found) {
                setProducts(found);
            }
        }catch(err){
            console.log(err);
        }
        }
        getProducts();
    },[])

    return (
        <div className={styles.Container}>
            <h1 className={styles.heading}>{params.category}</h1>
            <p className={styles.Text}>Is this what you are looking for?</p>
            <div className={styles.Cards}>
            {
            products.map(product =>{
                return(
                        <NavLink className={styles.navLink} to={`/products/${product.productKey}`}><Card key={product.productKey} src={product.MainImage} acPrice={product.price} discount={product.discount} title={product.title} /></NavLink>
                    )
                })
            }
            </div>
        </div>
    )
}

export default SingleCategory;
