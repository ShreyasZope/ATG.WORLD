import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Create from './Components/create.js';
import React from 'react';
import Signin from './Components/signin.js';
import Home from './Components/Home.js';
import './App.css';

function App() {
  return (
    <BrowserRouter>
    <div className='App'>
     <Routes>
      <Route path='/' element={<Home />} />
      <Route path='signup' element={<Create />} />
      <Route path='signin' element={<Signin />} />
     </Routes>
     </div>
    </BrowserRouter>
    
  );
}

export default App;
