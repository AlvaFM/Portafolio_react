import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Inicio from './pages/Inicio';
import Proyectos from './pages/Proyectos';
import Aboutme from './pages/Aboutme';
import './App.css';

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <BrowserRouter>
        <main className="flex-grow">
          <div className="min-h-screen">
            <Routes>
              <Route path="/" element={<Inicio />} />
              <Route path="/proyectos" element={<Proyectos />} />
              <Route path="/Aboutme" element={<Aboutme />} />
            </Routes>
          </div>
        </main>
        {/* Navbar ahora funciona como footer */}
        <Navbar />
      </BrowserRouter>
    </div>
  );
}

export default App;
