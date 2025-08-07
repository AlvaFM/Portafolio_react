import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Inicio from './pages/Inicio';
import Proyectos from './pages/Proyectos';
import './App.css';

function App() {
  return (
    <div className="bg-green-500 text-white p-10">
      <h1 className="text-3xl font-bold">
        ¡Hola, Soy Álvaro bienvenido a mi portafolio!
      </h1>

      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="/proyectos" element={<Proyectos />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
