import logo from './logo.svg';
import { HomePage } from './components/HomePage';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import './App.css';
import { Gallery } from './components/Gallery';
import { NavBar } from './components/Navbar';
import { AboutUs } from './components/AboutUs';
import { Shabbat_meat } from './components/Shabbat_meat';
import { About } from './components/About';
import { OurActive } from './components/OurActive';
import { Donations } from './components/Donations';
import { Volonteere } from './components/Volonteere';
import { FunWagonChild } from './components/FunWagonChild';
import { FunWagonAdult } from './components/FunWagonAdult';




 

function App() {
  return (
    <div className="App" >
      <BrowserRouter>
      <NavBar />
      {/* navbar */}
        <Routes>
          <Route exact path='/' element={<HomePage/>} />
          <Route exact path='/HomePage' element={<HomePage/>} />
          <Route path='/Gallery' element={<Gallery/>} />
          <Route path='/OurActive' element={<OurActive/>}/>
          <Route path='/Shabbat_meat' element={<Shabbat_meat/>}/>
          <Route path='/About' element={<About/>}/>
          <Route path='/Donations' element={<Donations/>}/>
          <Route path='/Volonteere' element={<Volonteere/>}/>
          <Route path='/AboutUs' element={<AboutUs/>} />
          <Route path='/FunWagonChild' element={<FunWagonChild/>} />
          <Route path='/FunWagonAdult' element={<FunWagonAdult/>} />
        </Routes>
      </BrowserRouter>
      {/* <HomePage username="chen" />
      <img src="/images/image1.jpg" /> */}
    </div>
    
  );
}

export default App;


