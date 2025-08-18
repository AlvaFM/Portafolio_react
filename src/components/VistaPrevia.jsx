import { useEffect } from 'react';
import { createPortal } from 'react-dom';

function VistaPrevia({ imagen, onCerrar }) {
  // Evitar scroll de fondo mientras el modal está abierto
  useEffect(() => {
    document.body.style.overflow = imagen ? 'hidden' : 'auto';
    return () => { document.body.style.overflow = 'auto'; };
  }, [imagen]);

  if (!imagen) return null;

  return createPortal(
    <div
      className="fixed inset-0 z-[9999] bg-black bg-opacity-90 flex items-center justify-center"
      onClick={onCerrar}
    >
      <div
        className="relative"
        onClick={(e) => e.stopPropagation()}
        style={{
          position: 'fixed',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          maxWidth: '90vw',
          maxHeight: '90vh',
        }}
      >
        <img
          src={`${process.env.PUBLIC_URL}${imagen}`}
          alt="Vista previa"
          className="w-auto h-auto max-w-full max-h-full rounded-lg shadow-2xl"
        />
        <button
          className="absolute top-2 right-2 text-white text-3xl font-bold hover:text-red-500"
          onClick={onCerrar}
        >
          ×
        </button>
      </div>
    </div>,
    document.body
  );
}

export default VistaPrevia;
