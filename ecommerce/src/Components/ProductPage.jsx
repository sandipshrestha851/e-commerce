import React from 'react'
import { useParams } from 'react-router-dom'
import styles from './ProductPage.module.css'
import filledStar from '../assets/fullStar.png'
import notFilledStar from '../assets/notFilledStar.png'
import { useState } from 'react'
import picture from '../assets/winter.png'
import pic2 from '../assets/example.png'


const ProductPage = () => {
  const params = useParams();

  const [quantity, setQuantity] = useState(1);

  const [src,setSrc] = useState("/src/assets/winter.png");
  const [selected,setSelected] =useState("");

  function increment() {
    setQuantity(prev => prev + 1);
  }

  function decrement() {
    if (quantity > 1) {
      setQuantity(prev => prev - 1);
    }
  }

  return (
    <div className={styles.Container}>
      <div className={styles.left}>
        <div className={styles.mainImage}>
          <img src={src} alt="Main picture" />
        </div>
        <div className={styles.subImages}>
          <ul>
            <li onMouseOver={(e)=> setSelected("one")} className={selected=="one"?styles.border:""}><img src="/src/assets/winter.png" alt="picture1" onMouseOver={(e)=> setSrc(e.target.src)} /></li>
            <li onMouseOver={(e)=> setSelected("two")} className={selected=="two"?styles.border:""}><img src="/src/assets/example.png"alt="picture2" onMouseOver={(e)=> setSrc(e.target.src)} /></li>
            <li onMouseOver={(e)=> setSelected("three")} className={selected=="three"?styles.border:""}><img src="/src/assets/winter.png" alt="picture3" onMouseOver={(e)=> setSrc(e.target.src)} /></li>
          </ul>
        </div>
      </div>
      <div className={styles.right}>
        <div className={styles.title}>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio impedit optio ipsam minus perferendis quam laborum veniam vero sunt neque tempora, culpa eos provident recusandae perspiciatis, asperiores quas quos facere!</p>
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
          <p className={styles.finalPrice}>Rs.1800</p>
          <div className={styles.priceNDiscount}>
            <del className={styles.initialPrice}>Rs.2000</del>
            <span className={styles.discount}>-10%</span>
          </div>
        </div>
        <div className={styles.quantitySection}>
          <p className={styles.text}>Quantity</p>
          <div className={styles.updater}>
            <button className={`${styles.btn} ${quantity===1?styles.transparent:""}`} onClick={() => decrement()}>-</button>
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
  )
}

export default ProductPage
