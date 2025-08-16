import React from 'react';

function VistaPrevia({ imagen, onCerrar }) {
  if (!imagen) return null;

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50"
      onClick={onCerrar}
    >
      <div className="relative">
        <img
          src={imagen}
          alt="Vista previa"
          className="max-w-[80vw] max-h-[80vh] rounded-lg shadow-2xl"
        />
        {/* Botón de cerrar */}
        <button
          className="absolute top-2 right-2 text-white text-2xl font-bold hover:text-red-500"
          onClick={(e) => { e.stopPropagation(); onCerrar(); }}
        >
          ×
        </button>
      </div>
    </div>
  );
}

export default VistaPrevia;
