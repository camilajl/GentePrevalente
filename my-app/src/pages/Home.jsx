import React from "react";
import { Link } from "react-router-dom";
import logo from '../images/Logoo.svg'
import img1 from '../images/img1.svg'
import img2 from '../images/img2.svg'
import img3 from '../images/img3.svg'
import img4 from '../images/img4.svg'
//import line from '../images/iPhone 11 Pro/Line 1.svg'
import clock from '../images/iPhone 11 Pro/Vector.svg'
//import admin from '../images/adm.svg'

function Navbar() {
    return (

    <section>
    <header>
    {/* Navbar */}
    <nav className="flex justify-between  items-center h-16 bg-dark text-white static shadow-sm" >

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
        
        <form >          
          <input placeholder="Buscar" className="pl-3 ml-2 w-40 bg-grey rounded-md placeholder-white" type="text" />  
        </form>
    </div>
    </div>
  
    <div className="px-4 cursor-pointer md:hidden">
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
    </svg>

    </div>
    <div className="pr-8 hidden md:block">
        <Link to={'/admin'} className="nav-link p-4 ">          
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
    <main>
        {/* CARDS */}
    <section className="bg-midgrey p-16 grid place-content-center gap-10 grid-cols-1 sm:grid-cols-2 ">
        <Link to = "/Solicitud">
        {/* PRIMERA CARD */}
        <div className="flex pl-8 items-center bg-white rounded-2xl shadow-xl min-h-[145px] min-w-[345px] sm:h-80 sm:w-100">
            
            {/* IMAGEN */}
            <span className=" absolute left-18 top-28 h-[67px] w-[62px] bg-blue rounded-md sm:h-28 sm:w-24">
            <img className="mx-2.5 my-3.5 h-10 w-10 sm:mx-4 sm:my-6 sm:h-16 sm:w-16" src={img1} alt="img1" />
            </span>
            {/* TEXTO,LINEA,RELOJ */}

            
            <div className="flex flex-col  mt-12  sm:gap-10 sm:mt-20 ">
            <p className="sm:text-3xl text-base mb-3 ">Solicitudes de creación de empresas</p>

            {/* LINEA */}
            <span className="h-px w-full bg-lowgrey mb-2"  >
                {/*  <img  src={line} alt="line" /> */}
            </span>
             {/* RELOJ */}
            <div className="flex space-between items-start">             
                <span>
                    <img className="w-4 h-4 " src={clock} alt="clock" /> 
                </span>
                <p className="text-xs text-grey ml-2">2 solicitudes sin tratar</p>
            </div>
            </div>
            
        </div>

        </Link>
        {/* SEGUNDA CARD */}
        <div className="bg-white rounded-2xl shadow-xl min-h-[145px] min-w-[345px] cursor-pointer sm:h-80 sm:w-100">
        <span className=" absolute left-auto ml-8 top-[296px] h-[67px] w-[62px] bg-blue rounded-md sm:h-28 sm:w-24 sm:top-28 sm:ml-8">
            <img className="mx-2.5 my-3.5 h-10 w-10 sm:mx-4 sm:my-6 sm:h-16 sm:w-16" src={img2} alt="img1" />
            </span>
            
            <div className="flex flex-col mr-8 mt-16 ml-8  sm:gap-10 sm:mt-[124px] sm:mr-12 ">
            <p className="sm:text-3xl text-base mb-3 ">Indicadores</p>
            <span className="h-px w-full bg-lowgrey mb-2"  >
                {/*  <img  src={line} alt="line" /> */}
            </span>
            <div className="flex space-between items-start">
                <span>
                    <img className="w-4 h-4 " src={clock} alt="clock" /> 
                </span>
                <p className="text-xs text-grey ml-2">Visitado por última vez: 30/11/2022</p>
            </div>
            </div>
        </div>

         {/* TERCERA CARD */}
        <div className="bg-white cursor-pointer rounded-2xl shadow-xl min-h-[145px] min-w-[345px] sm:h-80 sm:w-100">

        <span className=" absolute left-auto ml-8 top-[478px] h-[67px] w-[62px] bg-blue rounded-md sm:h-28 sm:w-24 sm:top-[472px] sm:ml-8">
            <img className="mx-2.5 my-3.5 h-10 w-10 sm:mx-4 sm:my-6 sm:h-16 sm:w-16" src={img4} alt="img1" />
            </span>
            
            <div className="flex flex-col mr-8 mt-16 ml-8  sm:gap-10 sm:mt-[124px] sm:mr-12 ">
            <p className="sm:text-3xl text-base mb-3 ">Inscripción de empleados en empresas</p>
            <span className="h-px w-full bg-lowgrey mb-2"  >
                {/*  <img  src={line} alt="line" /> */}
            </span>
            <div className="flex space-between items-start">
                <span>
                    <img className="w-4 h-4 " src={clock} alt="clock" /> 
                </span>
                <p className="text-xs text-grey ml-2">3 usuarios sin empresa registrada</p>
            </div>
            </div>
        </div>

        {/* CUARTA CARD */}
        <div className="bg-white cursor-pointer rounded-2xl shadow-xl min-h-[145px] min-w-[345px] sm:h-80 sm:w-100">
        <span className=" absolute left-auto ml-8 top-[666px] h-[67px] w-[62px] bg-blue rounded-md sm:h-28 sm:w-24 sm:top-[472px] sm:ml-8">
            <img className="mx-2.5 my-3.5 h-10 w-10 sm:mx-4 sm:my-6 sm:h-16 sm:w-16" src={img3} alt="img1" />
            </span>
            
            <div className="flex flex-col mr-8 mt-16 ml-8  sm:gap-10 sm:mt-[124px] sm:mr-12 ">
            <p className="sm:text-3xl text-base mb-3 ">Gestión de usuarios</p>
            <span className="h-px w-full bg-lowgrey mb-2"  >
                {/*  <img  src={line} alt="line" /> */}
            </span>
            <div className="flex space-between items-start">
                <span>
                    <img className="w-4 h-4 " src={clock} alt="clock" /> 
                </span>
                <p className="text-xs text-grey ml-2">532 usuarios activos en la plataforma</p>
            </div>
            </div>


        </div>

    </section>

</main>
</section>
    
    );
} 
export default Navbar;

