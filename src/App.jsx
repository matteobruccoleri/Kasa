import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import './App.module.scss';
import './assets/styles/global.module.scss';

import Footer from './components/organisms/Footer/Footer';
import Header from './components/organisms/Header/Header';

import Home from './components/pages/Home/Home';
import About from './components/pages/About/About';
import NotFound from './components/pages/NotFound/NotFound';

function App() {
  return (
    <Router>
      <Header/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;
