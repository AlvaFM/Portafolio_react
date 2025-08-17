import { HashRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Inicio from './pages/Inicio';
import Proyectos from './pages/Proyectos';
import Aboutme from './pages/Aboutme';
import Error404 from './pages/404notfound';
import './App.css';

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <HashRouter>
        <main className="flex-grow">
          <div className="min-h-screen">
            <Routes>
              <Route path="/" element={<Inicio />} />
              <Route path="/proyectos" element={<Proyectos />} />
              <Route path="/Aboutme" element={<Aboutme />} />
              <Route path="*" element={<Error404 />} />
            </Routes>
          </div>
        </main>
        <Navbar />
      </HashRouter>
    </div>
  );
}

export default App;
