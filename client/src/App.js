import logo from './logo.svg';
import { HomePage } from './components/HomePage';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import './App.css';
import { Gallery } from './components/Gallery';
import { NavBar } from './components/Navbar';
import { AboutUs } from './components/AboutUs';
import { Shabbat_meat } from './components/Shabbat_meat';
import { About } from './components/About';
import {Submit_Shabbat} from './components/Submit_Shabbat';
import { OurActive } from './components/OurActive';
import { Donations } from './components/Donations';
import { Volonteere } from './components/Volonteere';
import { ContactUs } from './components/ContactUs';





function App() {
  return (
    <div className="App" >
      <BrowserRouter>
      <NavBar />
      {/* navbar */}
        <Routes>
          <Route exact path='/' element={<HomePage/>} />
          <Route path='/Gallery' element={<Gallery/>} />
          <Route path='/ContactUs' element={<ContactUs/>} />

          <Route path='/OurActive' element={<OurActive/>}/>
          <Route path='/Shabbat_meat' element={<Shabbat_meat/>}/>
          <Route path='/About' element={<About/>}/>
          <Route path='/Donations' element={<Donations/>}/>
          <Route path='/Submit_Shabbat' element={<Submit_Shabbat/>}/>
          <Route path='/Volonteere' element={<Volonteere/>}/>
          <Route path='/AboutUs' element={<AboutUs/>} />
          {/* <Route path='/Activities' element={<Activities/>} /> */}

        
        </Routes>
      </BrowserRouter>
      {/* <HomePage username="chen" />
      <img src="/images/image1.jpg" /> */}
    </div>
    
  );
}

export default App;


