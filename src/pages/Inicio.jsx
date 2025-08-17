import perfil from '../assets/perfil_inicio.jpg';

function Inicio() {
  return (
    <div className="animate-fadeBounce w-full min-h-screen relative overflow-y-auto">

      {/* Fondo negro */}
      <div className="absolute top-0 left-0 w-full h-full bg-black -z-20" />

      {/* Imagen a la derecha con degradado */}
      <div className="absolute top-0 right-0 w-full md:w-1/2 h-full overflow-hidden">
        <img
          src={perfil}
          alt="Foto de Álvaro Moisés"
          className="h-full w-full object-contain"
        />
        <div
          className="absolute top-0 left-0 w-full h-full"
          style={{
            background: 'linear-gradient(to left, rgba(0,0,0,0), rgba(0,0,0,0.9) 100%)'
          }}
        />
      </div>

      {/* Información sobrepuesta */}
      <div className="absolute top-0 left-0 w-full md:w-1/2 min-h-screen flex flex-col justify-center p-6 md:p-8 text-white z-10">

        {/* Sección principal */}
        <section className="space-y-4">
          <h1 className="text-4xl sm:text-5xl font-bold neon-text">
            Álvaro Flores... (■_■)
          </h1>
          <h2 className="text-lg sm:text-xl text-blue-400 font-semibold">
            Desarrollador Web | Backend & Frontend
          </h2>
          <p className="leading-relaxed text-sm sm:text-base">
            Soy un desarrollador web con pasión por crear experiencias modernas,
            fluidas y centradas en el usuario.
          </p>
        </section>

        {/* Saludos */}
        <section className="mt-6 sm:mt-8">
          <h2 className="text-2xl sm:text-3xl font-semibold mb-2">Saludos</h2>
          <p className="leading-relaxed text-sm sm:text-base">
            Bienvenido a mi portafolio, donde comparto mis proyectos, habilidades y experiencia.
          </p>
        </section>

        {/* Contactos */}
        <section id="contacto" className="mt-6 sm:mt-8">
          <h2 className="text-2xl sm:text-3xl font-semibold mb-2">Contactos Rápidos</h2>
          <ul className="text-sm sm:text-base space-y-1">
            <li>
              📧 Email: 
              <a href="mailto:alvaroflores.mf@gmail.com" className="text-blue-400 hover:underline">
                alvaroflores.mf@gmail.com
              </a>
            </li>
            <li>
              💼 LinkedIn: 
              <a href="https://linkedin.com/in/tuusuario" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">
                linkedin.com/in/tuusuario
              </a>
            </li>
            <li>
              🖥 GitHub: 
              <a href="https://github.com/AlvaFM" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">
                github.com/AlvaFM
              </a>
            </li>
          </ul>

          {/* Botón CV */}
          <div className="flex justify-center mt-4">
            <a
              href="/cv.pdf"
              download
              className="proyecto-img-neon px-6 py-2 sm:px-8 sm:py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold rounded-lg shadow-lg hover:from-pink-500 hover:to-purple-500 transition-all duration-300 transform hover:scale-105"
            >
              Descargar CV
            </a>
          </div>

          {/* Texto invisible */}
          <div className="flex justify-center mt-4">
            <p style={{ color: 'transparent' }}>
              (⌐■_■) hola
            </p>
          </div>

          {/* Degradado extra */}
          <div className="flex justify-center mt-4">
            <div
              style={{
                background: 'linear-gradient(to left, rgba(0,0,0,0), rgba(0,0,0,0.9) 100%)'
              }}
            />
          </div>
        </section>

      </div>
    </div>
  );
}

export default Inicio;
