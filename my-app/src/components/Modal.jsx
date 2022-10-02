import React from "react";
import pdf from '../images/iPhone 11 Pro/archivo.svg'

function Modal() {
    return (
     <div className="flex place-content-center">
       <div className="h-screen w-[300px]" >
                <div className="flex flex-row justify-between">
                <p className="text-black text-[18px] font-bold  pt-12">Documentos cargados</p>
                <span className="flex items-end">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>

                </span>
                </div>
                 
                    <ul>
                      <li className="flex flex-row justify-between pt-8">
                           <p>RUT Empresa</p>
                           <img className="cursor-pointer" src={pdf} alt="pdf" />
                      </li>
                      <li className="flex flex-row justify-between pt-8">
                            <p>Acta de Constitución</p>
                            <img className="cursor-pointer" src={pdf} alt="pdf" />
                      </li>
                      <li className="flex flex-row justify-between pt-8">
                            <p>Cámara de Comercio</p>
                            <img className="cursor-pointer" src={pdf} alt="pdf" />
                      </li>
                      <li className="flex flex-row justify-between pt-8">
                            <p>logo</p>
                            <img className="cursor-pointer" src={pdf} alt="pdf" />
                      </li>
                      <li className="flex flex-row justify-between pt-8">
                            <p>Otro Documento</p>
                            <img className="cursor-pointer" src={pdf} alt="pdf" />
                      </li>
                    </ul>
                    </div>



     </div>
        
  
    );
  }
export default Modal;