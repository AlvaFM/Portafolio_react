import { useState, useEffect } from 'react';

const coloresNeon = {
  morado: 'text-purple-500',
  rosa: 'text-pink-500',
  azul: 'text-blue-500',
  verde: 'text-green-500',
  naranja: 'text-orange-500', 
  amarillo: 'text-yellow-500', 
};

const barrasNeon = {
  morado: 'bg-purple-500 shadow-[0_0_15px_rgba(128,0,128,0.9)]',
  rosa: 'bg-pink-500 shadow-[0_0_15px_rgba(255,0,150,0.9)]',
  azul: 'bg-blue-500 shadow-[0_0_15px_rgba(0,150,255,0.9)]',
  verde: 'bg-green-500 shadow-[0_0_15px_rgba(0,255,128,0.9)]',
  naranja: 'bg-orange-500 shadow-[0_0_15px_rgba(255,165,0,0.9)]', 
  amarillo: 'bg-yellow-500 shadow-[0_0_15px_rgba(255,255,0,0.9)]', 
};


function SkillBar({ nombre, porcentaje, color = 'azul' }) {
  const colorTexto = coloresNeon[color] || coloresNeon.azul;
  const colorBarra = barrasNeon[color] || barrasNeon.azul;

  const [width, setWidth] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => setWidth(porcentaje), 200); // Pequeña demora inicial
    return () => clearTimeout(timer);
  }, [porcentaje]);

  return (
    <div className="mb-6 group">
      {/* Nombre y porcentaje */}
      <div className={`flex justify-between mb-2 font-semibold ${colorTexto} transition-transform duration-300 group-hover:scale-110`}>
        <span>{nombre}</span>
        <span>{width}%</span>
      </div>

      {/* Línea de barra */}
      <div className={`relative w-full h-1 rounded-full bg-gray-800`}>
        <div
          className={`h-1 rounded-full ${colorBarra} transition-all duration-1000 ease-out`}
          style={{ width: `${width}%` }}
        ></div>

        {/* Puntito neón */}
        <div
          className={`absolute top-1/2 -translate-y-1/2 h-4 w-4 rounded-full ${colorBarra} transition-transform duration-300 group-hover:scale-125`}
          style={{ left: `${width}%` }}
        ></div>
      </div>
    </div>
  );
}

export default SkillBar;
