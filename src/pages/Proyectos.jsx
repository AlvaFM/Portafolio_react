import ProyectoCard from '../components/ProyectoCard';

function Proyectos() {
  return (
    <div className="animate-fadeBounce w-full min-h-screen relative bg-black p-4 md:p-8">

      {/* Overlay difuminado solo como fondo */}
      <div
        className=" absolute inset-0 -z-10"
        style={{
          background: 'linear-gradient(to left, rgba(0,0,0,0.8), rgba(0,0,0,0.95))'
        }}
      />

      <h1 className=" text-3xl md:text-5xl neon-text font-bold text-center mb-8 md:mb-12">
        Mis Proyectos
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-4 md:gap-8">
        <ProyectoCard
          className="animate-fadeSlideUp"
          titulo="Mi primer proyecto"
          descripcion="Una app de tareas con React."
          repo="https://github.com/tuusuario/primer-proyecto"
          imagenes={["/img/perfil_inicio.jpg","/img/perfil_inicio.jpg","/img/perfil_inicio.jpg"]}
        />

        <ProyectoCard
          className="animate-fadeSlideUp"
          titulo="Mi segundo proyecto"
          descripcion="Un portafolio personal con Tailwind."
          repo="https://github.com/tuusuario/segundo-proyecto"
          imagenes={["/img/perfil_inicio.jpg","/img/imagen_2.png","/img/perfil_inicio.jpg"]}
        />
      </div>

    </div>
  );
}

export default Proyectos;
