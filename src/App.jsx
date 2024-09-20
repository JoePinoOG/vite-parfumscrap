import { useState } from 'react'
import './estilos/App.css'
import Navbar from './Navbar'
import Productos from './productos';
function App() {
  

  return (
    <>
    <div><Navbar></Navbar></div>
     <div className="mt-20 p-8">
     
        <Productos></Productos>
        
    </div>
    
    </>
  

  );
}


export default App
