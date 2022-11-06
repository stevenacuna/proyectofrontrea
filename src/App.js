import logo from './logo.svg';
import './css/App.css';
//Componentes
import CarruselIngreso from './components/CarruselIngreso';
import Navbar from './components/Navbar';
import Nosotros from './components/Nosotros';
import Inicio from './components/Inicio';


function App() {
  return (
<div>
    <div className='APP'>
    <Navbar/>
    </div>
    <div>
    <CarruselIngreso/>
    </div>
    <Nosotros/>
    <Inicio/>
  </div>
  );
}

export default App;
