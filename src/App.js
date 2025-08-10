import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Inicio from './pages/Inicio';
import Proyectos from './pages/Proyectos';
import AboutMe from './pages/Aboutme';
import './App.css';

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <BrowserRouter>
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Inicio />} />
            <Route path="/proyectos" element={<Proyectos />} />
            <Route path="/AboutMe" element={<AboutMe />} />
          </Routes>
        </main>
      </BrowserRouter>
      
      <footer className="p-4 bg-gray-800 text-white text-center">
        © 2025 Álvaro Moises
      </footer>
    </div>
  );
}

export default App;
