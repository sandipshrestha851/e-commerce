import Card from './Card.jsx'
import styles from './ForYou.module.css'
import picture from '../assets/winter.png'

function ForYou(){

    return(
        <div className={styles.foryouSection}>
                <div className = {styles.heading}>
                    <h2>For You</h2>
                    <p>These are exactly the things you are looking for</p>
                </div>
            <div className={styles.container}>
            <Card src={picture} acPrice={200} discount={10} title="This is nothing" />
            <Card src={picture} acPrice={200} discount={10} title="This is nothing" />
            <Card src={picture} acPrice={200} discount={10} title="This is nothing" />
            <Card src={picture} acPrice={200} discount={10} title="This is nothing" />
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
export default ForYou;