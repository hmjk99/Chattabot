import { Link } from 'react-router-dom'
import Logo from '../img/logo.png'
import MainImg from '../img/mainImg.webp'
import Dinner from "../img/dinner.png"
import HappyHour from "../img/happyHour.webp"
import Brunch from "../img/brunch.jpg"
import Team from "../img/Team.webp"
import Event from "../img/event.webp"
import BottomNav from './bottomNav'

const datas = [
    {
        name:"Quick Restaurant Info",
        image: MainImg,
        link: '/info'
    },
    {
        name:"Dinner",
        image: Dinner,
        link: '/dinner'
    },
    {
        name:"Happy Hour",
        image: HappyHour,
        link: '/happyhour'
    },
    {
        name:"Brunch",
        image: Brunch,
        link: '/brunch'
    },
    {
        name:"Join Our Team",
        image: Team,
        link: '/team'
    },
    {
        name:"Special Events",
        image: Event,
        link: '/event'
    },
]

const Home = () => {
  return (
    <div className='container'>
      <img className='logo' src={Logo} alt='logo'/>
      <img className='main-img' src={MainImg} alt='restaurant'/>
      <div className='main-header'>
        <p className='main-text'>Baby Shank</p>
        <p className='sub-text'>Brunch | Happy Hour | Dinner | Private Events</p>
      </div>
      <div className='grid-list'>
        {datas.map((data) => (
            <Link className='grid-item' to={data.link} key={data.name}>
                <img className='data-img' src={data.image}/>
                <p className='grid-img-name'>{data.name}</p>
            </Link>
        ))}
      </div>
      <BottomNav />
    </div>
  )
}

export default Home