import logo from "./logo.svg";
import "./css/App.css";
//Componentes
import CarruselIngreso from "./components/CarruselIngreso";
import Navbar from "./components/Navbar";
import Nosotros from "./components/Nosotros";
import Inicio from "./components/Inicio";
import Contactenos from "./components/Contactenos";
import { Route, Routes } from "react-router-dom";
import Login from "./components/login";
import ProductosIndex from "./components/productos";

function App() {
    return (
        <div>
            <div className="APP">
                <Navbar />
            </div>
            <Routes>
                <Route path="/" element={<CarruselIngreso />} />
                <Route path="/Nosotros" element={<Nosotros />} />
                <Route path="/inicio" element={<Inicio />} />
                <Route path="/Contactenos" element={<Contactenos />} />
                <Route path="/productos" element={<ProductosIndex />} />
                <Route path="/login" element={<Login />} />
            </Routes>
        </div>
    );
}

export default App;
