import React from 'react'
import {useParams} from 'react-router-dom'
import styles from './ProductPage.module.css'
import filledStar from '../assets/fullStar.png'
import notFilledStar from '../assets/notFilledStar.png'
const ProductPage = () => {
    const params = useParams();
  return (
    <div className={styles.Container}>
      <div className={styles.left}>
        <div className={styles.mainImage}>
          <img src="" alt="" />
        </div>
        <div className={styles.subImages}>
            <ul>
                <li><img src="" alt="picture1" /></li>
                <li><img src="" alt="picture2" /></li>
                <li><img src="" alt="picture3" /></li>
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
      </div>
    </div>
  )
}

export default ProductPage
