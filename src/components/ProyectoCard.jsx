import { useState } from 'react';
import VistaPrevia from './VistaPrevia';

function ProyectoCard({ titulo, descripcion, repo, imagenes = [] }) {
  const [imagenSeleccionada, setImagenSeleccionada] = useState(null);

  return (
    <div className="bg-gray-900 text-white p-4 sm:p-6 rounded-xl shadow-lg relative overflow-visible group flex flex-col md:flex-row items-start gap-4 md:gap-6">
      
      {/* Contenido alineado a la izquierda */}
      <div className="flex-1 text-left">
        <h2 className="text-xl sm:text-2xl neon-text font-bold mb-2">{titulo}</h2>
        <p className="text-sm sm:text-base mb-4">{descripcion}</p>
        {repo && (
          <a
            href={repo}
            target="_blank"
            rel="noopener noreferrer"
            className="px-3 py-2 sm:px-4 sm:py-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-lg shadow-lg hover:from-pink-500 hover:to-purple-500 transition transform hover:scale-105 text-sm sm:text-base"
          >
            Ver Repositorio
          </a>
        )}
      </div>

      {/* Cascada de imágenes de izquierda a derecha */}
      <div className=" flex flex-row justify-start -ml-2 md:-ml-4 mt-4 md:mt-0">
        {imagenes.slice(0, 3).map((img, idx) => (
          <div
            key={idx}
            className="relative w-16 sm:w-20 h-16 sm:h-20 flex-shrink-0 flex flex-col items-center cursor-pointer"
            style={{ zIndex: 10 - idx, marginLeft: idx === 0 ? 0 : -16 }}
          >
            <img
              src={img}
              alt={`${titulo} imagen ${idx + 1}`}
              className="proyecto-img-neon w-full h-full object-cover rounded-lg"
              onClick={() => setImagenSeleccionada(img)}
            />
          </div>
        ))}
      </div>

      {/* Vista previa */}
      <VistaPrevia
        imagen={imagenSeleccionada}
        onCerrar={() => setImagenSeleccionada(null)}
      />
    </div>
  );
}

export default ProyectoCard;
