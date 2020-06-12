import React from 'react';
import Router from './Router';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar1 from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import './App.css';

const App = () => {
  return (
    <div className="App">
        <Navbar1/>
        <Router/>
        <Footer/>
    </div>
  );
}

export default App;