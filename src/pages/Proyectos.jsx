import ProyectoCard from '../components/ProyectoCard';


function Proyectos() {
  return (
    <div className="animate-fadeBounce w-full min-h-screen relative p-4 md:p-8">

      {/* Fondo estático con gradiente de azul a negro */}
      <div
        className="absolute inset-0 -z-10"
     style={{
  background: 'linear-gradient(to bottom, #1e3a8a 0%, #000000 20%)', // azul reducido
}}

      />

      <h1 className="text-3xl md:text-5xl neon-text font-bold text-center mb-8 md:mb-12">
        Mis Proyectos
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-4 md:gap-8">
<ProyectoCard
  titulo="Prueba de visualizacion"
  descripcion="Creado especialmente para visualizar"
  repo="https://github.com/tuusuario/primer-proyecto"
  contenido={<p>Contenido largo para probar scroll vertical dentro del botón. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur sit amet.adaddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
  </p>}
  icono={<span>🔥</span>}
  imagenes={[
    "/img/perfil_inicio.jpg",
    "/img/perfil_inicio.jpg",
    "/img/perfil_inicio.jpg"
  ]}
/>
<ProyectoCard
  titulo="Prueba de visualizacion"
  descripcion="Creado especialmente para visualizar"
  repo="https://github.com/tuusuario/primer-proyecto"
  contenido={<p>Contenido largo para probar scroll vertical dentro del botón. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur sit amet.adaddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
  </p>}
  icono={<span>🔥</span>}
  imagenes={[
    "/img/perfil_inicio.jpg",
    "/img/perfil_inicio.jpg",
    "/img/perfil_inicio.jpg"
  ]}
/>
<ProyectoCard
  titulo="Prueba de visualizacion"
  descripcion="Creado especialmente para visualizar"
  repo="https://github.com/tuusuario/primer-proyecto"
  contenido={<p>Contenido largo para probar scroll vertical dentro del botón. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur sit amet.adaddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
  </p>}
  icono={<span>🔥</span>}
  imagenes={[
    "/img/perfil_inicio.jpg",
    "/img/perfil_inicio.jpg",
    "/img/perfil_inicio.jpg"
  ]}
/>
<ProyectoCard
  titulo="Prueba de visualizacion"
  descripcion="Creado especialmente para visualizar"
  repo="https://github.com/tuusuario/primer-proyecto"
  contenido={<p>Contenido largo para probar scroll vertical dentro del botón. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur sit amet.adaddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
  </p>}
  icono={<span>🔥</span>}
  imagenes={[
    "/img/perfil_inicio.jpg",
    "/img/perfil_inicio.jpg",
    "/img/perfil_inicio.jpg"
  ]}
/>



      </div>

    </div>
  );
}

export default Proyectos;
