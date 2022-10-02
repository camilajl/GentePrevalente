import './App.css';
import { Route, Routes} from "react-router-dom";
import Home from "./pages/Home"
import Admin from "./pages/Admin"
import Cv from "./pages/Cv"
import Empleo from './pages/Empleo';
import Perfil from './pages/Perfil';
import Solicitud from './pages/Solicitud';
import Modal from './components/Modal';

//import { getUserData } from "./api";
//import {UserForm} from './UserForm'

function App() {
  return (
    
    <Routes>
        <Route exact path="/" element={<Home />} />
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
