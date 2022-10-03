import React from "react";
import { Link } from "react-router-dom";
import logo from '../images/Logoo.svg';
import lnegro from '../images/iPhone 11 Pro/Logo Negro 1.svg'
import pdf from '../images/iPhone 11 Pro/archivo.svg'
import clip from '../images/iPhone 11 Pro/clip.svg'
import verde from '../images/iPhone 11 Pro/verde.svg'
import rojo from '../images/iPhone 11 Pro/rojo.svg'
import flechan from '../images/iPhone 11 Pro/flechan.svg'
import flechag from '../images/iPhone 11 Pro/flechag.svg'
//import alert  from "../components/Alert";


function Solicitud() {
    return (
        <section className="bg-midgrey">
        <header>
        {/* Navbar */}
        <nav className="flex justify-between items-center h-16 bg-dark text-white relative shadow-sm" >
    
        <Link to = "/" className="pl-8">
            <div className="flex items-center">
                <img src={logo} alt="logo" />
                <p>GentePrevalente</p>
            </div>     
        </Link>
    
        <div>
        <div className="flex items-center">
            
            <span>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
            </svg>
            </span>
            
            <p className="pl-3 ml-2 w-40 bg-grey rounded-md ">Buscar</p>
        </div>
        </div>
      
        <div className="px-4 cursor-pointer md:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
        </svg>
    
        </div>
        <div className="pr-8 hidden md:block">
            <Link to={'/admin'} className="nav-link p-4">          
            Administración
            </Link>
            <Link to={'/empleo'} className="nav-link p-4">
            Empleo
            </Link>
            <Link to={'/cv'} className="nav-link p-4">Mi CV
            </Link>
            <Link to={'/perfil'} className="nav-link p-4">Perfil
            </Link>          
        </div>
    
        </nav>
        </header>

        {/* FORM  */}
        <main >
        <section className="grid justify-center  bg-midgrey h-[1230px] w-full sm:h-[980px]  ">
            
            {/* primera fila texto boton */}
            <div className="sm:h-0">

            <h2 className="flex flex-row mt-[40px] ml-[13px] sm:h-[30px] text-blue"> Administración <p className="text-black pl-2"> / Aprobación de empresas</p>  </h2>
            
            <div className="sm:hidden pt-12">
                <div className="flex flex-row justify-center">
                <img src={flechag} alt="flecha" />
                <p className="px-2 pt-2">Empresa 1 de 2 pendiente por aprobación</p>
                <img className="cursor-pointer" src={flechan} alt="flecha" />
                </div>
              
            </div>
            </div>
            
            <div className="grid place-content-center grid-rows-3 pt-8 rounded-lg bg-white mt-[60px]  w-[357px] h-[1010px] sm:h-[734px] sm:w-[942px] sm:mt-0 sm:grid-rows-2 ;">
               {/* segunda fila imagen info  */}
               
                <div className="flex flex-row gap-12">
                <div className="grid place-content-center bg-white h-[237px] w-[291px] sm:ml-30 ">
                    <img src={lnegro} alt="lnegro" />          
                </div>
                {/* BOTONES R Y A */}
                <div className="flex-col hidden sm:block pt-10">
                <button className="flex flex-row items-center pl-6 mb-4 w-[223px] h-[46px] rounded-lg bg-white shadow-xl hover:bg-midgrey" >                 
                    <img src={verde} alt="verde" />
                    <p className="ml-1.5 font-bold">Aceptar Empresa</p>
                </button>
                <button className="flex flex-row items-center pl-6 w-[223px] h-[46px] rounded-xl bg-white shadow-xl hover:bg-midgrey" >                 
                    <img src={rojo} alt="rojo" />
                    <p className="ml-1.5 font-bold">Rechazar Empresa</p>
                </button>
                </div>
                
                </div>
                {/* FORMULARIO  */}
                <div>
                
                   <form className="grid place-content-center sm:grid-cols-2 sm:grid-rows-3 sm:pt-18 sm:ml-2 sm:gap-8  " action="">
                        <div className="flex flex-col">
                            <label className="text-text text-sm">Nombre de la empresa</label>
                            <input className="border-b-[1px] border-text w-64" type="text" />
                        </div>
                        <div className="flex flex-col py-2 sm:py-0">
                            <label className="text-text text-sm ">Razón Social</label>
                            <input className="border-b-[1px] border-text w-64" type="text" />
                        </div>
                        <div className="flex flex-col py-2 sm:py-0">
                            <label className="text-text text-sm">Tipo de identificación</label>
                            <input className="border-b-[1px] border-text w-64" type="text" />
                        </div>
                        <div className="flex flex-col py-2 sm:py-0"> 
                            <label className="text-text text-sm">Identificación</label>
                            <input className="border-b-[1px] border-text w-64" type="text" />
                        </div>
                        <div className="flex flex-col py-2 sm:py-0">
                            <label className="text-text text-sm"> # de empleados</label>
                            <input className="border-b-[1px] border-text w-64" type="text" />
                        </div>
                        <div className="flex-col py-2 hidden sm:block sm:py-2 ">
                            
                            <Link to={'/modal'}>
                            <button   className="flex flex-row items-center pl-3 w-[228px] h-[60px] rounded-lg bg-white shadow-xl hover:bg-midgrey " >                 
                               <img src={clip} alt="clip" />
                               <p className="ml-1.5 font-bold">Ver archivos adjuntos</p>
                            </button>

                            </Link>
                            

                                             
                            
                        </div>
                   </form>

                    {/* DOCS Cargados */}
                    <div className="sm:hidden">
                        <h1 className="text-black text-[18px] pt-12">Documentos cargados</h1>
                        <ul>
                            <li className="flex flex-row justify-between pt-8">
                                <p>RUT Empresa</p>
                                <img className="cursor-pointer" src={pdf} alt="pdf" />
                            </li>
                            <li className="flex flex-row justify-between pt-8">
                                <p>Cámara de Comercio</p>
                                <img className="cursor-pointer" src={pdf} alt="pdf" />
                            </li>
                            <li className="flex flex-row justify-between pt-8">
                                <p>Acta de constitución</p>
                                <img className="cursor-pointer" src={pdf} alt="pdf" />
                            </li>
                        </ul>
                    </div>
                
                <div className="hidden sm:block mt-28 ">
                <div className="flex flex-row justify-center">
                <img src={flechag} alt="flecha" />
                <p className="px-2 pt-2">Empresa 1 de 2 pendiente por aprobación</p>
                
                <img className="cursor-pointer" src={flechan} alt="flecha" />
                
                </div>
            </div>
                
                
               </div>           
            </div>
           
            
        
        
        
        </section>

   


        </main>
        </section>
    );
  }
  
  export default Solicitud;