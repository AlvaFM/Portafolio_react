import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'; // Para estilos personalizados

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
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [lastScrollY]);

  return (
    <nav
      className={`fixed bottom-0 w-full flex flex-wrap justify-center gap-4 sm:gap-8 p-4 z-50 neon-navbar transition-all duration-500 ${
        show ? 'translate-y-0' : 'translate-y-20'
      }`}
    >
      <Link to="/" className="neon-link text-sm sm:text-base">Inicio</Link>
      <Link to="/Aboutme" className="neon-link text-sm sm:text-base">Sobre mí</Link>
      <Link to="/proyectos" className="neon-link text-sm sm:text-base">Proyectos</Link>
    </nav>
  );
}

export default Navbar;
