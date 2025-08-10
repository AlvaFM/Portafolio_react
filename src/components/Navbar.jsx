import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="flex gap-4 p-4 bg-gray-800 text-white">
      <Link to="/">Inicio</Link>
      <Link to="/AboutMe">Sobre mí</Link>
      <Link to="/proyectos">Proyectos</Link>
      
    </nav>
  );
}

export default Navbar;
