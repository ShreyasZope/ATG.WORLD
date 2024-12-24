import { BrowserRouter, Routes, Route } from 'react-router-dom';
import React, { useState } from 'react';
import Create from './Components/create.js';
import Signin from './Components/signin.js';
import Home from './Components/Home.js';
import './App.css';

function App() {
  const [formData, setFormData] = useState(null);  // Store the form data

    const handleFormSubmit = (data) => {
        setFormData(data);
        console.log("Form Data in App.js:", data);
    };
  return (
    <BrowserRouter>
    <div className='App'>
     <Routes>
      <Route path='/' element={<Home />} />
      <Route path='signup' element={<Create onFormSubmit={handleFormSubmit} />} />
      <Route path='signin' element={<Signin Signin formData={formData} />} />
     </Routes>
     </div>
    </BrowserRouter>
    
  );
}

export default App;
