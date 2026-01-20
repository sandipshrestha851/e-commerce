import styles from './Slider.module.css'
import switch1 from '../assets/left.svg'
import switch2 from '../assets/right.svg'
// import { useState } from 'react'

function Slider() {
    let images = ['/images/image1.png', '/images/image2.png','./images/image3.png','./images/image4.png'];
    // const [index , setIndex] = useState(0);
    let index = 0;

    function shiftRight(){
        if(index <images.length-1){
            const currentImg = document.getElementById(`img-${index}`);
            const nextImg = document.getElementById(`img-${index+1}`);
            const pulledImg = document.getElementById(`img-${index+2}`)
            currentImg.style.transform = `translateX(${-100*(index+1)}%)`;
            nextImg.style.transform = `translateX(${-100 * (index+1)}%)`;
            if(index!=images.length-2){
            pulledImg.style.transform = `translateX(${-100 * (index+1)}%)`;
            }
            index++;
            console.log(index);
        }
    }

    function shiftLeft(){
        if(index >0){
            const currentImg = document.getElementById(`img-${index}`);
            const prevImg = document.getElementById(`img-${index-1}`);
            currentImg.style.transform = `translateX(${-100 *(index-1)}%)`;
            prevImg.style.transform = `translateX(${-100 * (index-1)}%)`;
            index--;
            console.log(index);
        }
    }


    return (
        <div id={styles.sliderContainer}>
            <div className={styles.sliderContainer}>
                <div className={styles.buttons} >
                    <img src={switch1} alt="left-button" className={styles.left} onClick={()=>shiftLeft()} />
                    <img src={switch2} alt="right-button" className={styles.right} onClick = {()=>shiftRight()} />
                </div>
                {
                    images.map((src, index) => (
                        <img key={index} src={src} alt="slider image" className={styles.sliderImage} id={`img-${index}`} />
                    ))
                    }
            </div>
        </div>
    )
}
export default Slider;