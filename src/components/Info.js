
import MainImg from '../img/mainImg.webp'
import BottomNav from './bottomNav'
import { useState } from 'react'
import { Link } from 'react-router-dom'

const Info = () => {

    const [backButton, setBackButton] = useState('True')

  return (
    <Link className='info' to='/info/details'>
        <div className='second-page'>
            <img className='main-img' src={MainImg} alt='restaurant'/>
            <p className='second-main-text'>Hours of Operation</p>
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
    </Link>
  )
}

export default Info