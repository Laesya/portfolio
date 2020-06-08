import React from 'react';
import Router from './Router';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import './App.css';

const App = () => {
  return (
    <div className="App">
        <Navbar/>
        <Router/>
        <Footer/>
    </div>
  );
}

export default App;