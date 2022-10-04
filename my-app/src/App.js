import './App.css';
import { Route, Routes} from "react-router-dom";
//import Home from "./pages/Home"
import Admin from "./pages/Admin"
import Cv from "./pages/Cv"
import Empleo from './pages/Empleo';
import Perfil from './pages/Perfil';
import GentePrevalente from './pages/GentePrevalente';
import Modal from './components/Modal';
import Solicitud from './pages/Solicitud';

//import { getUserData } from "./api";
//import {UserForm} from './UserForm'
//import Notas from '../src/components/Notas'
//import { EasybaseProvider } from 'easybase-react' //, useEasybase } ;
//import { useEffect } from 'react';

function App() {
  return (
    
    <Routes>
        <Route exact path="/GentePrevalente" element={<GentePrevalente />} /> {/* SE CAMBIA EL NOMBRE DEL COMPONENTE a GentePrevalente PARA PODER DESPLEGAR EN GITHUB */}
        <Route exact path="/solicitud" element={<Solicitud />} /> 
        <Route exact path="/admin" element={<Admin />} />  
        <Route exact path="/cv" element={<Cv />} />      
        <Route exact path="/empleo" element={<Empleo />} />   
        <Route exact path="/perfil" element={<Perfil />} />
        <Route exact path="/modal" element={<Modal />} />  
        </Routes>



   
  
  );
}

export default App;
