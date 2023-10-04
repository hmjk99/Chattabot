
import './App.css';
import { Route, Routes } from 'react-router';
import Logo from './img/logo.png'
import Home from './components/home';
import Info from './components/Info';
import InfoDetails from './components/InfoDetails';
import Dinner from './components/Dinner';
import DinnerDetails from './components/DinnerDetails';

function App() {
  return (
    <div className='main'>
      <img className='logo' src={Logo} alt='logo'/>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/info' element={<Info />} />
        <Route path='/dinner' element={<Dinner />} />
        <Route path='/happyhour' element={<Home />} />
        <Route path='/brunch' element={<Home />} />
        <Route path='/team' element={<Home />} />
        <Route path='/event' element={<Home />} />
        <Route path='/info/details' element={<InfoDetails />} />
        <Route path='/dinner/details' element={<DinnerDetails />} />
      </Routes>
    </div>
  );
}

export default App;

