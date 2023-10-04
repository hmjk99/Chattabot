
import './App.css';
import { Route, Routes } from 'react-router';
import Home from './components/home';
import Info from './components/Info';

function App() {
  return (
    <>
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/info' element={<Info />} />
      <Route path='/dinner' element={<Home />} />
      <Route path='/happyhour' element={<Home />} />
      <Route path='/brunch' element={<Home />} />
    </Routes>
    </>
  );
}

export default App;

