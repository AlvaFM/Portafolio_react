import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Inicio from './pages/Inicio';
import Proyectos from './pages/Proyectos';
import Aboutme from './pages/Aboutme';
import Error404 from './pages/404notfound'; // renombrado el componente
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
              <Route path="/*" element={<Error404 />} /> 
            </Routes>
          </div>
        </main>
        <Navbar />
      </BrowserRouter>
    </div>
  );
}

export default App;
