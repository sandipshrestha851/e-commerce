import styles from './CategoryCard.module.css'
import {NavLink} from 'react-router-dom'
function CategoryCard({src,title,items}){

    // function hoverEff(){
    //     const container = document.querySelector(".container");
    //     const image = document.querySelector(".bgImage");
    //      image.style.transform = 'scale(1.1)';
    // }

    return(
        <div>
            <div className={styles.container}>
                <div className={styles.info}>
                    <h3 className={styles.categoryTitle}>{title}</h3>
                    <p className={styles.totalItems}>{items}+ items</p>
                    <NavLink className={styles.NavLink} to={`/category/${title}`}><button className={styles.btnExplore}>Explore</button></NavLink>
                </div>
                <div className={styles.layer}></div>
                <img src={src} alt="background-image-card" className={styles.bgImage} />
            </div>
        </div>
    )
}

export default CategoryCard;