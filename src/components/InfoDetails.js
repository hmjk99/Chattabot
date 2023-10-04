import MainImg from '../img/mainImg.webp'
import BottomNav from './bottomNav'
import { useState } from 'react'
import { Bars3Icon, BuildingStorefrontIcon, CalendarDaysIcon, GlobeAltIcon } from '@heroicons/react/24/solid'

const InfoDetails = () => {
    const [backButton, setBackButton] = useState('True')
  return (
    <div className='second-page details'>
        <img className='main-img' src={MainImg} alt='restaurant'/>
        <p className='second-main-text detail-text'>Restaurant Info</p>
        <div className='detail-info'>
            <div className='info-icon'>
                <Bars3Icon/>
                <p className='info-icon-text'>Menu</p>
            </div>
            <div className='info-icon'>
                <GlobeAltIcon/>
                <p className='info-icon-text'>Website</p>
            </div>
            <div className='info-icon'>
                <CalendarDaysIcon/>
                <p className='info-icon-text'>Reservations</p>
            </div>
            <div className='info-icon'>
                <BuildingStorefrontIcon/>
                <p className='info-icon-text'>Directions</p>
            </div>
        </div>
        <div className='second-list-content'>
                <h2>Happy Hour</h2>
                <p className='info-text'>Wednesday - Thursday - Friday</p>
                <p className='info-text'>4:30pm - 6:30pm</p>
        </div>
        <div className='second-list-content'>
            <h2>Brunch & Day Party</h2>
            <p className='info-text'>Sundays 12 noon - 7pm</p>
            <p className='info-text'>$25 Unlimited Mimosas</p>
            <p className='info-text'>$200 Bottle Service Special</p>
        </div>
        <div className='second-list-content'>
            <h2>Dinner</h2>
            <p className='info-text'>Wednesday - Saturday</p>
            <p className='info-text'>4:30pm - 1am</p>
        </div>
        <BottomNav backButton={backButton}/>
    </div>
  )
}

export default InfoDetails