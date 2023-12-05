import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Component/Home';
import Header from './Component/Header';
import Services from './Component/Services';
import Gallery from './Component/Gallery';
import Contact from './Component/Contact';
import Login from './Component/Login'
import SignUp from './Component/SignUp';

const App = () => {
  return (
    <>
    <Header/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/services' element={<Services/>}/>
      <Route path='/gallery' element={<Gallery/>}/>
      <Route path='/contact' element={<Contact/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/signup' element={<SignUp/>}/>
      </Routes>

    </>
  );
}

export default App;
