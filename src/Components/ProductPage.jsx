import React from 'react'
import { useParams } from 'react-router-dom'
import styles from './ProductPage.module.css'
import filledStar from '../assets/fullStar.png'
import notFilledStar from '../assets/notFilledStar.png'
import { useState, useEffect } from 'react'

import picture from '../assets/winter.png'
import pic2 from '../assets/example.png'


const ProductPage = () => {
  const params = useParams();

  let data;
  const [products, setProducts] = useState([]);
  const [quantity, setQuantity] = useState(1);
  const [src, setSrc] = useState("");
  const [selected, setSelected] = useState();
  const [productObj, setProductObj] = useState({});
  useEffect(() => {
    async function getProducts() {
      try {
        let res = await fetch(`${import.meta.env.BASE_URL}jsonFiles/bestProducts.json`);
        data = await res.json();
        // setProducts(data.products);
        const found = data.totalProducts.find(product=> product.productKey == params.key);
        if(found){
          setProductObj(found);
          setSrc(found.MainImage);
        }
      } catch (err) {
        console.log(err);
      }
    }
    getProducts();
  }, [params.key]);




  function increment() {
    setQuantity(prev => prev + 1);
  }

  function decrement() {
    if (quantity > 1) {
      setQuantity(prev => prev - 1);
    }
  }

  return (
    <div className={styles.root}>
    <div className={styles.Container}>
      <div className={styles.left}>
        <div className={styles.mainImage}>
          <img src={src} alt="Main picture" />
        </div>
        <div className={styles.subImages}>
          <ul>
            <li onMouseOver={(e) => setSelected("one")} className={selected == "one" ? styles.border : ""}><img src={productObj.subImage1} alt="picture1" onMouseOver={(e) => setSrc(e.target.src)} /></li>
            <li onMouseOver={(e) => setSelected("two")} className={selected == "two" ? styles.border : ""}><img src={productObj.subImage2} alt="picture2" onMouseOver={(e) => setSrc(e.target.src)} /></li>
          </ul>
        </div>
      </div>
      <div className={styles.right}>
        <div className={styles.title}>
          <p>{productObj.title}</p>
        </div>
        <div className={styles.ratings}>
          <div className={styles.stars}>
            <img src={filledStar} alt="Full-star" className={styles.star} />
            <img src={filledStar} alt="Full-star" className={styles.star} />
            <img src={filledStar} alt="Full-star" className={styles.star} />
            <img src={filledStar} alt="Full-star" className={styles.star} />
            <img src={notFilledStar} alt="Notfilled-star" className={styles.star} />
          </div>
          <div className={styles.ratingText}>
            <p>Ratings 100</p>
          </div>
        </div>
        <div className={styles.pricing}>
          <p className={styles.finalPrice}>${productObj.price - productObj.price * (productObj.discount / 100)}</p>
          <div className={styles.priceNDiscount}>
            <del className={styles.initialPrice}>${productObj.price}</del>
            <span className={styles.discount}>-{productObj.discount}%</span>
          </div>
        </div>
        <div className={styles.quantitySection}>
          <p className={styles.text}>Quantity</p>
          <div className={styles.updater}>
            <button className={`${styles.btn} ${quantity === 1 ? styles.transparent : ""}`} onClick={() => decrement()}>-</button>
            <p className={styles.quantity}>{quantity}</p>
            <button className={styles.btn} onClick={() => increment()}>+</button>
          </div>
        </div>
        <div className={styles.purchase}>
          <button className={`${styles.buyBtn} ${styles.cBtn}`}>Buy Now</button>
          <button className={`${styles.cartBtn} ${styles.cBtn}`}>Add to Cart</button>
        </div>
      </div>
    </div>
    </div>
  )
}

export default ProductPage
