import React from 'react';
import FetchRM from './components/FetchRM';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="background">
      <Navbar/>
      
      <div className="container">
      
      <h1>Hola mundo</h1>
      <FetchRM/>

      </div>
      
    </div>
  )
}

export default App
