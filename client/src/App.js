import { HomePage } from './components/HomePage';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import './App.css';
import { Gallery } from './components/Gallery';
import { NavBar } from './components/Navbar';
import { Mesamchim_act } from './components/Mesamchim_act';
import { Shabbat_meat } from './components/Shabbat_meat';
import { About } from './components/About';
import { Submit_Shabbat } from './components/Submit_Shabbat';
import { Donations } from './components/Donations';
import { Volonteere } from './components/Volonteere';
import { ContactUs } from './components/ContactUs';
import { Act_shabbat } from './components/Act_shabbat';
import { Act_tipach } from './components/Act_tipach';
import { Act_help } from './components/Act_help';
import { Vol_sec } from './components/Vol_sec';
import { FunWagonChild } from './components/FunWagonChild';
import { FunWagonAdult } from './components/FunWagonAdult';
import { OurActive } from './components/OurActive';




 

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
          <Route path='/ContactUs' element={<ContactUs/>} />
          <Route path='/Shabbat_meat' element={<Shabbat_meat/>}/>
          <Route path='/About' element={<About/>}/>
          <Route path='/Donations' element={<Donations/>}/>
          <Route path='/Submit_Shabbat' element={<Submit_Shabbat/>}/>
          <Route path='/Volonteere' element={<Volonteere/>}/>
          <Route path='/Mesamchim_act' element={<Mesamchim_act/>} />
          <Route path='/Act_shabbat' element={<Act_shabbat/>} />
          <Route path='/Act_tipach' element={<Act_tipach/>} />
          <Route path='/Act_help' element={< Act_help/>} />
          <Route path='/Vol_sec' element={<Vol_sec/>} />
          <Route path='/OurActive' element={<OurActive/>} />
          <Route path='/FunWagonChild' element={<FunWagonChild/>} />
          <Route path='/FunWagonAdult' element={<FunWagonAdult/>} />
        </Routes>
      </BrowserRouter>
    </div>
    
  );
}

export default App;


