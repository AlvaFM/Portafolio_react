import { useState, useRef } from 'react';
import VistaPrevia from './VistaPrevia';
import BotonFlotanteCard from './BotonFlotanteCard';

function ProyectoCard({ titulo, descripcion, repo, contenido, imagenes = [], icono }) {
  const [imagenSeleccionada, setImagenSeleccionada] = useState(null);
  const cardRef = useRef(null); 

  return (
    <div
      ref={cardRef}
      className="bg-gray-900 text-white p-4 sm:p-6 rounded-xl shadow-lg relative overflow-visible flex flex-col md:flex-row gap-4"
    >
      {/* Texto e info */}
      <div className="flex-1 text-left relative">
        <h2 className="text-xl sm:text-2xl neon-text-card font-bold mb-2">{titulo}</h2>
        <p className="text-sm sm:text-base mb-4">{descripcion}</p>

        {repo && (
          <a
            href={repo}
            target="_blank"
            rel="noopener noreferrer"
            className="proyecto-img-neon px-3 py-2 sm:px-4 sm:py-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-lg shadow-lg hover:from-pink-500 hover:to-purple-500 transition transform hover:scale-105 text-sm sm:text-base mb-2 inline-block"
          >
            Ver Repositorio
          </a>
        )}

        {/* Botón exclusivo del card */}
        {contenido && <BotonFlotanteCard icono={icono} contenido={contenido} />}
      </div>

      {/* Imágenes miniatura */}
      <div className="flex flex-row justify-start -ml-2 md:-ml-4 mt-4 md:mt-0">
        {imagenes.slice(0, 3).map((img, idx) => (
          <div
            key={idx}
            className="relative w-16 sm:w-20 h-16 sm:h-20 flex-shrink-0 flex flex-col items-center cursor-pointer"
            style={{ zIndex: 10 - idx, marginLeft: idx === 0 ? 0 : -16 }}
          >
            <img
              src={`${process.env.PUBLIC_URL}${img}`}
              alt={`${titulo} imagen ${idx + 1}`}
              className="proyecto-img-neon w-full h-full object-cover rounded-lg"
              onClick={() => setImagenSeleccionada(img)}
            />
          </div>
        ))}
      </div>

     
      <VistaPrevia
        imagen={imagenSeleccionada}
        onCerrar={() => setImagenSeleccionada(null)}
        referencia={cardRef} 
      />
    </div>
  );
}

export default ProyectoCard;
