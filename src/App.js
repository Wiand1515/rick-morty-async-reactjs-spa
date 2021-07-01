import React from 'react';
import FetchRM from './components/FetchRM';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="background">
      <Navbar/>
      
      <div className="container">
        <div className="d-flex justify-content-center">

      <img src="\img\logo.png" alt="" className="col-12 col-sm-6 col-md-4 " />
        </div>
      
      
      <FetchRM/>

      </div>
      
    </div>
  )
}

export default App
