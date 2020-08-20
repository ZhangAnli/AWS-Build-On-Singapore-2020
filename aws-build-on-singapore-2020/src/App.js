import React from 'react';
import './index.css';
import ClientForm from './Components/ClientForm/ClientForm.jsx'

function App() {
  return (
    <div>
      <img src ="https://i.pinimg.com/originals/f7/d2/c0/f7d2c09c8b0feff8ee6378d1a8ae0ddd.png" alt="Logo" className="center" /> 
      
      <hr/> 

      <h1> Investment Recommendation </h1>

      <ClientForm/>

    </div>
  );
}

export default App;
