
import TeamImg from "../img/Team.webp"
import BottomNav from './bottomNav'
import { useState } from 'react'
import { Link } from 'react-router-dom'

const Team = () => {

    const [backButton, setBackButton] = useState('True')

  return (
    <Link className='info' to='/Team/details'>
        <div className='second-page'>
            <img className='main-img' src={TeamImg} alt='team'/>
            <p className='second-main-text'>Join Our Team</p>
            <div className='second-list-content'>
                <h2 className="menu-name">About Us</h2>
                <p className='team-text'>Baby Shank is a vibrant French-inspired bistro with a unique addition of sushi to its menu. We offer a dynamic and welcoming environment where teamwork and passion for food are valued. With three bars and a rooftop garden, we provide a variety of dining experiences.</p>
                <p className='team-text'>Join our team to contribute to an exceptional dining atmosphere. Grow your career in a creative and innovative setting at Baby Shank.</p>
                <p className='resume'>Send resume to behdad@babyshank.com</p>
                
            </div>
            <BottomNav backButton={backButton}/>
        </div>
    </Link>
  )
}

export default Team