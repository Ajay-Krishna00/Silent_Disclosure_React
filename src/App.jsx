import './App.css'
import React from 'react';
import Navbar from './component/Navbar';
import AddConfession from './pages/AddConfession'
import About from './pages/About';
import { BrowserRouter,Routes, Route } from 'react-router-dom';
import Feed from './pages/Feed';

function App() {

  return (
    <>
      <BrowserRouter>
      <Navbar/>
      
      <Routes>
        <Route path='/' Component={Feed} />
        <Route path='/add' Component={AddConfession} />
        <Route path='/about' Component={About} />
      </Routes>
      </BrowserRouter>
      
    </>
  );
}

export default App;
