
import HappyHourImg from "../img/happyHour.webp"
import BottomNav from './bottomNav'
import { useState } from 'react'

const HappyHourDetails = () => {
    const [backButton, setBackButton] = useState('True')
  return (
    <div className='second-page details'>
            <img className='main-img' src={HappyHourImg} alt='cocktail'/>
            <p className='second-main-text detail-text'>Happy Hour Menu</p>
            <div className='second-list-content extra-info'>
                <h2 className="extra-info-text">Served at the bar only</h2>
                <p className='extra-info-sub'>Wednesday, Thursday, Friday</p>
                <p className='extra-info-sub'>4:30pm to 6:30pm</p>
            </div>
            <div className='second-list-content'>
                <h2 className="menu-name">Food</h2>
                <p className='sub-menu'>Truffle Fries. $7</p>
                <p className='sub-menu'>Onion Rings $7</p>
                <p className='sub-menu'>Shishito Peppers $7</p>
                <p className='sub-menu'>Baby Shank Sliders 10</p>
                <p className='sub-menu'>Mussels $13</p>
                <p className='sub-menu'>Charcuterie Board of (3) $19</p>
            </div>
            <div className='second-list-content'>
                <h2 className="menu-name price-name">Sushi</h2>
                <p className='sub-menu price'>$9</p>
                <p className='sub-menu'>Spicy Tuna</p>
                <p className='sub-menu'>Vegetable</p>
                <p className='sub-menu'>Salmon Avocado</p>
                <p className='sub-menu'>Mussels $13</p>
                <p className='sub-menu'>Beets Tartare</p>
            </div>
            <div className='second-list-content'>
                <h2 className="menu-name price-name">Beer Draft</h2>
                <p className='sub-menu price'>$7</p>
                <p className='sub-menu'>Sam Adams Octoberfest</p>
                <p className='sub-menu'>Devil's Backbone IPA</p>
                <p className='sub-menu'>Devil's Backbone Vienna Lager</p>
                <p className='sub-menu'>Stella</p>
                <p className='sub-menu'>Blue Moon</p>
            </div>
            <div className='second-list-content'>
                <h2 className="menu-name price-name">Wine By The Glass</h2>
                <p className='sub-menu price'>$8</p>
                <p className='sub-menu'>Chianti, Tuscany, IT</p>
                <p className='sub-menu'>Smoke Tree Chardonnay, Sonoma, CA</p>
            </div>
            <BottomNav backButton={backButton}/>
        </div>
  )
}

export default HappyHourDetails