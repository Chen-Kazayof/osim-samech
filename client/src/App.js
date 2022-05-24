import logo from './logo.svg';
import { HomePage } from './components/HomePage';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import './App.css';
import { Gallery } from './components/Gallery';
import { NavBar } from './components/Navbar';
import { ContactUs } from './components/ContactUs';
import { AboutUs } from './components/AboutUs';
import { OurActive } from './components/OurActive';
import { Donation } from './components/Donation';
import { Volonteere } from './components/Volonteere';



function App() {
  return (
    <div className="App" >
      <BrowserRouter>
      <NavBar />
      {/* navbar */}
        <Routes>
          <Route exact path='/' element={<HomePage/>} />
          <Route path='/Gallery' element={<Gallery/>} />
          <Route path='/OurActive' element={<OurActive/>}/>
          <Route path='/AboutUs' element={<AboutUs/>}/>
          <Route path='/Donation' element={<Donation/>}/>
          <Route path='/Volonteere' element={<Volonteere/>}/>
          <Route path='/ContactUs' element={<ContactUs/>} />
          
        </Routes>
      </BrowserRouter>
      {/* <HomePage username="chen" />
      <img src="/images/image1.jpg" /> */}
    </div>
  );
}

export default App;
