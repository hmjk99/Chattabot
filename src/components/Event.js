
import EventImg from "../img/event.webp"
import BottomNav from './bottomNav'
import { useState } from 'react'
import { Link } from 'react-router-dom'

const Event = () => {
    const [backButton, setBackButton] = useState('True')
  return (
    <Link className='info' to='/event/details'>
        <div className='second-page'>
            <img className='main-img' src={EventImg} alt='event'/>
            <p className='second-main-text'>Special Events</p>
            <div className='second-list-content'>
                <h2 className="menu-name event-name">Events & Private Parties</h2>
                <p className='team-text'>Host your next gathering at Baby Shank</p>
                <h2 className="menu-name event-name">Step into an Unforgettable Event Venue</h2>
                <p className='team-text'>Discover the perfect setting for your upcoming event, where we bring your visions to life.</p>
                <p className='team-text'>Discover our versatile event spaces: 4 areas on 2 floors, including an upstairs lounge and rooftop garden.</p>
                <p className='team-text'>Private Dining Excellence awaits</p>
                <p className='team-text'>Baby Shank offers expert private dining for 12 to 350+ guests in a historic, inviting venue.</p>
                <p className='resume'>Call or Email us at Events@BabyShank.com</p>
                
            </div>
            <BottomNav backButton={backButton}/>
        </div>
    </Link>
  )
}

export default Event