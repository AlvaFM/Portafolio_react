import { useState } from 'react';

export default function BotonFlotanteCard({ icono = <span></span>, contenido }) {
  const [show, setShow] = useState(false);

  return (
    <div className="relative">
     
      <button
        onClick={() => setShow(!show)}
        className={`
          absolute 
          bottom--4 right-0                /* Móvil */
          sm:bottom-[-2rem] sm:right-[-15rem]  /* Escritorio */
          bg-gradient-to-r from-pink-600 to-purple-700 text-white font-bold
          rounded-full w-12 h-12 flex items-center justify-center text-sm
          transition-all duration-300 hover:scale-105 shadow-lg
        `}
        style={{
          boxShadow: '0 0 10px #ff00ff, 0 0 20px #ff00ff, 0 0 30px #ff00ff, 0 0 40px #8000ff',
        }}
        title="Abrir información"
      >
        {icono}
      </button>

     
      {show && (
        <div
          className={`
            absolute 
            bottom--1 right-12             /* Móvil, encima del botón */
            sm:bottom-[-2rem] sm:right-0   /* Escritorio, relativo al botón */
            w-60 p-3 rounded-lg shadow-[0_0_15px_rgba(128,0,128,0.8)]
            animate-fadeSlideUp max-h-64 overflow-y-auto break-words z-50
            bg-gradient-to-b from-indigo-900 to-black border border-indigo-800 text-white
          `}
        >
          {contenido}

         
          <style>{`
            div::-webkit-scrollbar {
              width: 0px;
              background: transparent;
            }
            div {
              scrollbar-width: none;  /* Firefox */
              -ms-overflow-style: none;  /* IE 10+ */
            }
          `}</style>
        </div>
      )}
    </div>
  );
}
