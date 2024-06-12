import { BrowserRouter, Route, Routes } from 'react-router-dom';

import './App.css';
import Navbar from "./Components/Header/navbar";
import HomepageOne from "./Components/homepage/homepage";
import Secondpage from './Components/second-homepage/second-page';


const App=()=>{
  return(
    <div className='app'>
    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path='/' element={<Secondpage/>} />
      <Route path='/second-page' element={<HomepageOne/>} />
    </Routes>
    </BrowserRouter>
    </div>
  )
}

export default App