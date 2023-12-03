import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Component/Home';
import Header from './Component/Header';
import Services from './Component/Services';
import Gallery from './Component/Gallery';
import Contact from './Component/Contact';

const App = () => {
  return (
    <>
    <Header/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/services' element={<Services/>}/>
      <Route path='/gallery' element={<Gallery/>}/>
      <Route path='/contact' element={<Contact/>}/>
    </Routes>

    </>
  );
}

export default App;
