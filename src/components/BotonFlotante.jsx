import { useState } from 'react';

export default function BotonFlotante({ icono, contenido, position = { bottom: '2.5rem', right: '1rem' } }) {
  const [show, setShow] = useState(false);

  return (
    <div className="fixed z-50" style={position}>
      {/* Botón flotante neon morado más pequeño */}
      <button
        onClick={() => setShow(!show)}
        className="bg-gradient-to-r from-pink-600 to-purple-700 text-white font-bold rounded-full w-12 h-12 flex items-center justify-center text-sm transition-all duration-300 hover:scale-105"
        style={{
          boxShadow: '0 0 10px #ff00ff, 0 0 20px #ff00ff, 0 0 30px #ff00ff, 0 0 40px #8000ff',
        }}
        title="Abrir información"
      >
        {icono}
      </button>

      {show && (
        <div
          className="absolute mb-2 w-60 p-3 rounded-lg shadow-[0_0_15px_rgba(128,0,128,0.8)] animate-fadeSlideUp overflow-auto max-h-64"
          style={{
            bottom: '100%',
            right: 0,
            background: 'linear-gradient(to bottom, rgba(75,0,130,0.9), rgba(0,0,0,0.8))',
            color: 'white',
            border: '1px solid rgba(128,0,128,0.8)',
            textShadow: '0 0 5px rgba(255,255,255,0.5)',
          }}
        >
          <div
            className="overflow-auto max-h-60"
            style={{
              scrollbarWidth: 'thin',
              scrollbarColor: '#ff00ff #1a1a1a', 
            }}
          >
            {contenido}

            
         <style>{`
  div::-webkit-scrollbar {
    width: 0px; 
    background: transparent; 
  }
  div {
    scrollbar-width: none; 
    -ms-overflow-style: none; 
  }
`}</style>


          </div>
        </div>
      )}
    </div>
  );
}
