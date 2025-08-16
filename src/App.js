import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Inicio from './pages/Inicio';
import Proyectos from './pages/Proyectos';
import Aboutme from './pages/Aboutme'; // asegúrate que el nombre coincida con el archivo
import './App.css';

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <BrowserRouter basename="/Portafolio_react">
        <main className="flex-grow">
          <div className="min-h-screen">
            <Routes>
              <Route path="/" element={<Inicio />} />
              <Route path="/proyectos" element={<Proyectos />} />
              <Route path="/Aboutme" element={<Aboutme />} />
            </Routes>
          </div>
        </main>
        {/* Navbar como footer */}
        <Navbar />
      </BrowserRouter>
    </div>
  );
}

export default App;
