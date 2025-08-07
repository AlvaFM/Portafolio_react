import ProyectoCard from '../components/ProyectoCard';

function Proyectos() {
  return (
    <div className="p-4 grid grid-cols-1 md:grid-cols-2 gap-4">
      <ProyectoCard
        titulo="Mi primer proyecto"
        descripcion="Una app de tareas con React."
      />
      <ProyectoCard
        titulo="Mi segundo proyecto"
        descripcion="Un portafolio personal con Tailwind."
      />
    </div>
  );
}

export default Proyectos;

