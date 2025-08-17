import vista_satelite from '../assets/vista_satelite.png';

function Error404() {
  return (
    <div className="animate-fadeBounce w-full min-h-screen relative overflow-y-auto">

      <div className="absolute top-0 left-0 w-full h-full bg-black -z-20" />
      <div className="absolute top-0 right-0 w-full md:w-1/2 h-full overflow-hidden">
        <img
          src={vista_satelite}
          alt="Vista Satelite"
          className="h-full w-full object-contain"
        />

        <div
          className="absolute top-0 left-0 w-full h-full"
          style={{
            background: 'linear-gradient(to left, rgba(0,0,0,0), rgba(0,0,0,0.9) 100%)'
          }}
        />
      </div>

      <div className="absolute top-0 left-0 w-full md:w-1/2 min-h-screen flex flex-col justify-center p-6 md:p-8 text-white z-10">
        <section className="space-y-4">
          <h1 className="text-4xl sm:text-5xl font-bold neon-text">
          (⌐■_■)...  Error 404 
          </h1>

       <h2 className="text-lg sm:text-xl text-blue-400 font-semibold mt-4">
  La dirección que ingresaste no es válida. Por favor, selecciona una de las opciones en barra de navegacíon inferior para continuar, gracias.

</h2>
       <h2 className="text-lg sm:text-xl text-blue-400 font-semibold mt-4">
(■_■)

</h2>

        </section>
      </div>

    </div>
  );
}

export default Error404;
