import styles from './Card.module.css'

function Card({ src, acPrice, discount, title }) {
    let price = acPrice - (acPrice * discount / 100);
    return (
        <div className={styles.cardContainer}>
            <div className={styles.image}>
                <img src={src} alt="picture" />
            </div>
            <div className={styles.titleNPrice}>
                <p className={styles.title}>{title}</p>
                <p className={styles.price}>${price}</p>
                <div className={styles.discount}>
                    <del>${acPrice}</del>
                    <span>-{discount}%</span>
                </div>
            </div>
        </div>
    )
}
export default Card;