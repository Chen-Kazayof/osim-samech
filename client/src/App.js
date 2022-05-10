import logo from './logo.svg';
import { HomePage } from './components/HomePage';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import './App.css';
import { Gallery } from './components/Gallery';
import { NavBar } from './components/Navbar';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <NavBar />
      {/* navbar */}
        <Routes>
          <Route exact path='/' element={<HomePage />} />
          <Route path='/gallery' element={<Gallery />} />
        </Routes>
      </BrowserRouter>
      {/* <HomePage username="chen" />
      <img src="/images/image1.jpg" /> */}
    </div>
  );
}

export default App;
