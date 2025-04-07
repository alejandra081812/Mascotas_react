import { BrowserRouter, Routes, Route } from "react-router-dom";
import PagPrincipal from "./formularios/PagPrincipal";
import Login from "./formularios/Login";
import Contraseña1 from "./formularios/contraseña1";
import Citas from "./formularios/citas";
import Propietario from "./formularios/Propietario";
import Ayuda from "./formularios/Ayuda";
import Header from "./formularios/header";
import Servicios from "./formularios/servicios";
import Contraseña2 from "./formularios/contraseña2";
import Footer from "./formularios/Footer";
import './estilos/footer.css';
import UserWelcome from "./formularios/UserWelcome";
import PoliticasP from "./formularios/PoliticasP";



function App() {
  return (
    <BrowserRouter>
        <Header />
          <Routes>
            <Route path="/" element={<PagPrincipal />} />
            <Route path="/Login" element={<Login />} />
            <Route path="/contraseña1" element={<Contraseña1 />} />
            <Route path="/citas" element={<Citas />} />
            <Route path="/servicios" element={<Servicios />} />
            <Route path="/contraseña2" element={<Contraseña2 />} />
            <Route path="/propietario" element={<Propietario />} />
            <Route path="/userwelcome" element={<UserWelcome/>}/>
            <Route path="/Ayuda" element={<Ayuda />} />
            <Route path="/politicas" element={<PoliticasP />} />
          </Routes>
        <Footer />
    </BrowserRouter>
  );
}

export default App;

