function Inicio() {
  return (
    <div className="max-w-6xl mx-auto p-6">

      {/* Foto y presentación */}
      <section className="flex flex-col md:flex-row items-center gap-6 mb-12">
        <img 
          src="/ruta-a-tu-foto.jpg" 
          alt="Foto de Álvaro Moisés" 
          className="w-48 h-48 rounded-full object-cover shadow-lg"
        />
        <div>
          <h1 className="text-4xl font-bold mb-4">Álvaro Moisés Flores Muñoz</h1>
          <p className="text-lg text-gray-700">
            Soy desarrollador web con pasión por crear experiencias increíbles. Me especializo en React y Tailwind CSS.
          </p>
        </div>
      </section>

      {/* Mensaje o descripción */}
      <section className="mb-12">
        <h2 className="text-3xl font-semibold mb-4">Mensaje</h2>
        <p className="text-gray-700 leading-relaxed">
          Bienvenido a mi portafolio donde comparto mis proyectos y habilidades. Siempre estoy abierto a nuevos retos y colaboraciones.
        </p>
      </section>

      {/* Contactos rápidos */}
      <section className="mb-12">
        <h2 className="text-3xl font-semibold mb-4">Contactos Rápidos</h2>
        <ul className="text-gray-700 space-y-2">
          <li>Email: <a href="mailto:tuemail@example.com" className="text-blue-600 hover:underline">tuemail@example.com</a></li>
          <li>LinkedIn: <a href="https://linkedin.com/in/tuusuario" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">linkedin.com/in/tuusuario</a></li>
          <li>GitHub: <a href="https://github.com/tuusuario" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">github.com/tuusuario</a></li>
          {/* Puedes agregar más contactos como Twitter, WhatsApp, etc */}
        </ul>
      </section>

    </div>
  );
}

export default Inicio;
