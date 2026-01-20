import styles from './BestSeller.module.css'
import Card from './Card.jsx'
import picture from '../assets/winter.png'

function BestSeller(){
    return(
        <div className={styles.bestSection}>
        <div className = {styles.heading}>
            <h2>Best Seller</h2>
            <p>The product everyone is talking about.</p>
        </div>
        <div className={styles.CardsContainer}>
            <Card src={picture} acPrice={200} discount={10} title="This is nothing" />
            <Card src={picture} acPrice={200} discount={10} title="This is nothing" />
            <Card src={picture} acPrice={200} discount={10} title="This is nothing" />
            <Card src={picture} acPrice={200} discount={10} title="This is nothing" />
            <Card src={picture} acPrice={200} discount={10} title="This is nothing" />
            <Card src={picture} acPrice={200} discount={10} title="This is nothing" />
            <Card src={picture} acPrice={200} discount={10} title="This is nothing" />
            <Card src={picture} acPrice={200} discount={10} title="This is nothing" />
            <Card src={picture} acPrice={200} discount={10} title="This is nothing" />
        </div>
        </div>
    )
}

export default BestSeller; 