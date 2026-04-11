import CategoryCard from './CategoryCard.jsx'
import styles from './Category.module.css'
import accessories from '../assets/example.png'
import household from '../assets/household.png'
import clothing from '../assets/clothing.png'
import electronics from '../assets/electronics.png'
import gym from '../assets/gym.png'
import beauty from '../assets/beauty.png'

function Category() {

    return (
        <div className={styles.categorySection}>
            <div className={styles.heading}>
                <h2>Category</h2>
                <p>Find exactly what you're looking for in our organized collections</p>
            </div>
            <div className={styles.categoryCardContainer}>
                <CategoryCard src={accessories} title="Accessories" items={500} />
                <CategoryCard src={household} title="Household Items" items={3000} />
                <CategoryCard src={clothing} title="Clothing" items={5000} />
                <CategoryCard src={electronics} title="Electronics" items={600} />
                <CategoryCard src={gym} title="Gym" items={1000} />
                <CategoryCard src={beauty} title="Beauty and Personal Care" items={8000} />
            </div>
        </div>
    )
}
export default Category;