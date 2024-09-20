import { useState } from 'react'
import './estilos/App.css'
import logo from './assets/logo.png'

function Navbar() {
    const[MenuAbierto,abrirMenu] = useState(false)

    return (

    <div className= "w-full h-full ">

        <header className="flex justify-between items-center text-white
        py-6 px-8 md:px32 bg-gray-700 drop-shadow-md">

            <a href="#">
                <img src={logo} alt="" className="w-52 hover:scale-105 transition-all"/>
            </a>

            <ul className="hidden xl:flex items-center gap-12 font-bold">

                <li className="p-3 hover:bg-sky-400 hover:text-white 
                rounded-md transition-all"> Mujer </li>
                <li className="p-3 hover:bg-sky-400 hover:text-white 
                rounded-md transition-all"> Hombre </li>
                <li className="p-3 hover:bg-sky-400 hover:text-white 
                rounded-md transition-all"> Unisex </li>
            </ul> 
            <div className="relative ml:hidden md:flex items-center justify-center gap-3">
                <i className="bx bx-search top-1/2 -translate-y-1/2 absolute left-3 text 2xl text-gray-500"></i>
                <input type="text" placeholder="Search..." className="py-2 pl-10 rounded-xl border-2
                 text-black focus:text-white
                 border-blue-300 focus:bg-gray-700 focus:outline-sky-500"/>
 
            </div>
            <i className="bx bx-menu xl:hidden block text-5xl cursor-pointer" 
            onClick={() => abrirMenu(!MenuAbierto)}></i>
            <div className={`absolute xl:hidden top-24 left-0 w-full bg-gray-700 
                flex flex-col items-center gap-6 font-bold text-lg
                transform transition-transform ${MenuAbierto ? "opacity-100" : "opacity-0"}`}
                style={{transition: "transform 0.3s ease, opacity 0.3s ease"}}
                >
                    <li className="list-none w-full text-center p-4 hover:bg-sky-400
                    hover:text-white transition-all cursor-pointer ">Mujer</li>
                    <li className="list-none w-full text-center p-4 hover:bg-sky-400
                    hover:text-white transition-all cursor-pointer ">Hombre</li>
                    <li className="list-none w-full text-center p-4 hover:bg-sky-400
                    hover:text-white transition-all cursor-pointer ">Unisex</li>


                     

                    
 

                </div>
        </header>
        
    </div>


    );
  }

export default Navbar