import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './component/navbar';
import Home from './component/home';
import Footer from './component/footer';

function App() {
  
  window.addEventListener('contextmenu', e => {
    e.preventDefault();
  })
  return (
    <Router>
      <Navbar/>
      <Routes>
         <Route element={<Home />} exact path='/' /> 
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;