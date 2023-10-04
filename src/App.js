
import './App.css';
import { Route, Routes } from 'react-router';
import Logo from './img/logo.png'
import Home from './components/home';
import Info from './components/Info';
import InfoDetails from './components/InfoDetails';
import Dinner from './components/Dinner';
import DinnerDetails from './components/DinnerDetails';
import HappyHour from './components/HappyHour';
import HappyHourDetails from './components/HappyHourDetails';
import Brunch from './components/Brunch';
import BrunchDetails from './components/BrunchDetails';
import Team from './components/Team';
import TeamDetails from './components/TeamDetails';
import Event from './components/Event';
import EventDetails from './components/EventDetails';

function App() {
  return (
    <div className='main'>
      <img className='logo' src={Logo} alt='logo'/>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/info' element={<Info />} />
        <Route path='/dinner' element={<Dinner />} />
        <Route path='/happyhour' element={<HappyHour />} />
        <Route path='/brunch' element={<Brunch />} />
        <Route path='/team' element={<Team />} />
        <Route path='/event' element={<Event />} />
        <Route path='/info/details' element={<InfoDetails />} />
        <Route path='/dinner/details' element={<DinnerDetails />} />
        <Route path='/happyhour/details' element={<HappyHourDetails />} />
        <Route path='/brunch/details' element={<BrunchDetails />} />
        <Route path='/team/details' element={<TeamDetails />} />
        <Route path='/event/details' element={<EventDetails />} />
      </Routes>
    </div>
  );
}

export default App;

