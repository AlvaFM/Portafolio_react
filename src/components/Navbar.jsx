import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'; 
import BotonFlotante from '../components/BotonFlotante';

function Navbar() {
  const [show, setShow] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const controlNavbar = () => {
      if (window.scrollY > lastScrollY) setShow(false);
      else setShow(true);
      setLastScrollY(window.scrollY);
    };

    window.addEventListener('scroll', controlNavbar);
    return () => window.removeEventListener('scroll', controlNavbar);

  }, [lastScrollY]);

  return (
    
    <nav
    
    
      className={`fixed bottom-0 w-full flex flex-wrap justify-center gap-4 sm:gap-8 p-4 z-50 neon-navbar transition-all duration-500 ${
        show ? 'translate-y-0' : 'translate-y-20'
      }`}
    >
                <BotonFlotante
  icono={<span>(■_■)</span>}
  contenido={
   <div>
  <h3 className="font-bold text-lg text-pink-600">Desarrollo del Portafolio</h3>
  <p>
   desarrollado con <strong className="text-lg sm:text-xl text-blue-400 font-semibold" >React</strong> para la estructura y <strong className="text-lg sm:text-xl text-blue-400 font-semibold" >Tailwind CSS</strong> para el diseño y la estilización, asegurando una experiencia moderna y responsiva.
  </p>
  <p>
    el desarrolo se hizo con la asistencia de <strong className="text-lg sm:text-xl text-blue-400 font-semibold" >ChatGPT</strong>, lo que permitió agilizar la estructura y mejorar la presentación del contenido.
  </p>
</div>

  }
/>
      <Link to="/" className="neon-link text-sm sm:text-base">Inicio</Link>
      <Link to="/Aboutme" className="neon-link text-sm sm:text-base">Sobre mí</Link>
      <Link to="/proyectos" className="neon-link text-sm sm:text-base">Proyectos</Link>
    </nav>
  );
}

export default Navbar;
