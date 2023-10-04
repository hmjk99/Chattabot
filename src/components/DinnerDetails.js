
import DinnerImg from "../img/dinner.png"
import BottomNav from './bottomNav'
import { useState } from 'react'

const DinnerDetails = () => {
    const [backButton, setBackButton] = useState('True')
  return (
    <div className='second-page details'>
            <img className='main-img' src={DinnerImg} alt='restaurant'/>
            <p className='second-main-text detail-text'>Dinner</p>
            <div className='second-list-content'>
                <h2 className="menu-name">Charcuterie & Cheese</h2>
                <p className='main-menu'>Board of (3) $23</p>
                <p className='sub-menu'>duck prosciutto - cabot clothbound cheddar - salame piccante</p>
                <p className='main-menu'>Board of (5) $37</p>
                <p className='sub-menu'>duck prosciutto - cabot clothbound - cheddar</p>
                <p className='sub-menu'>salame piccante - wheel of brie - prosciutto</p>
                <p className='sub-menu'>Duck Pate - Add to any Charcuterie $8</p>
                <p className='main-menu'>Duck Pate $17</p>
                <p className='sub-menu'>smoked bourbon, walnut</p>
                
            </div>
            <div className='second-list-content'>
                <h2 className="menu-name">Soup & Salad</h2>
                <p className='main-menu'>French Onion Soup $10</p>
                <p className='sub-menu'>beef stock, caramelized onions, gruyere toast</p>
                <p className='main-menu'>Classic Caesar Salad $13</p>
                <p className='sub-menu'>crisp romaine, parmesan, garlic dressing, brioche croutons</p>
                <p className='main-menu'>Burrata $16</p>
                <p className='sub-menu'>heirloom tomato, basil, aged balsamic, olive oil</p>
                <p className='main-menu'>Jicama Salad $13</p>
                <p className='sub-menu'>jicama, avocado, watermelon, grapefruit, arugula
                orange, red chili vinaigrette</p>
            </div>
            <div className='second-list-content'>
                <h2 className="menu-name">Sea & Land</h2>
                <p className='main-menu'>Roasted Salmon $24</p>
                <p className='sub-menu'>wild rice, roasted corn</p>
                <p className='main-menu'>Bavette Steak. $26</p>
                <p className='sub-menu'>arugula salad, crispy shallots, thyme</p>
                <p className='main-menu'>Steamed Mussels $17</p>
                <p className='sub-menu'>pomodoro sauce, white wine</p>
                <p className='main-menu'>Roasted Chicken $19</p>
                <p className='sub-menu'>half chicken marinated with herbs</p>
                <p className='main-menu'>Branzino $36</p>
                <p className='sub-menu'>persillade , baby tomatoes</p>
                <p className='main-menu'>Black Angus Burger $17</p>
                <p className='sub-menu'>cabot clothbound, swiss cheese, prosciutto
                add fries $5</p>
            </div>
            <BottomNav backButton={backButton}/>
        </div>
  )
}

export default DinnerDetails