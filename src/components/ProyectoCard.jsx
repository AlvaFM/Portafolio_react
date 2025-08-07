function ProyectoCard({ titulo, descripcion }) {
  return (
    <div className="bg-white text-black p-4 rounded shadow">
      <h2 className="text-xl font-bold">{titulo}</h2>
      <p>{descripcion}</p>
    </div>
  );
}

export default ProyectoCard;
