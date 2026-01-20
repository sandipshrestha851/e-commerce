import Navbar from './Components/Navbar.jsx'
import Slider from './Components/Slider.jsx'
import BestSeller from './Components/BestSeller.jsx'
import Category from './Components/Category.jsx'
import ForYou from './Components/ForYou.jsx'
import Footer from './Components/Footer.jsx'
import Card from './Components/Card.jsx'
import picture from './assets/winter.png'

import CategoryCard from './Components/CategoryCard.jsx'

function App(){

  return(
    <>
    <Navbar/>
    <Slider/>
    <BestSeller/>
    <Category/>
    <ForYou/>
    <Footer/>
    {/* <CategoryCard src={example} title="Accessories" items={500}/> */}
    {/* <Card src={picture} acPrice={200} discount={10} title="This is nothing" /> */}
    </>
  )
}

export default App;