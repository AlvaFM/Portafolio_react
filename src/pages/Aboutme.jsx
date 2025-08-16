import SkillBar from '../components/SkillBar';

function AboutMe() {
  return (
    <div className="animate-fadeBounce w-full min-h-screen flex flex-col md:flex-row overflow-hidden relative">

      {/* Columna izquierda: contenido */}
      <div className="w-full md:w-3/5 bg-black text-white p-6 md:p-12 overflow-y-auto flex flex-col z-10">
        <section className="space-y-6">
          <h2 className="text-2xl md:text-3xl font-semibold">Historia profesional</h2>
          <p className="leading-relaxed text-sm md:text-base">
            Aquí puedes escribir un texto más extenso hablando de tu formación, experiencia, intereses y lo que te hace único como desarrollador.
          </p>

          <h2 className="text-2xl md:text-3xl font-semibold">Habilidades</h2>
          <p className="leading-relaxed text-sm md:text-base">
            Aquí puedes escribir un texto sobre tus habilidades, experiencia y lo que te distingue como profesional.
          </p>
        </section>
      </div>

      {/* Columna derecha: fondo negro difuminado + habilidades */}
      <div className="w-full md:w-2/5 bg-blue-950 relative p-6 md:p-12 flex flex-col text-white">
        {/* Overlay difuminado para fundir con la columna izquierda */}
        <div
          className="absolute top-0 left-0 w-full h-full z-0"
          style={{
            background: 'linear-gradient(to left, rgba(0,0,0,0), rgba(0,0,0,0.9) 80%)',
          }}
        />
        {/* Contenido de habilidades encima del difuminado */}
        <div className="space-y-4 max-w-md relative z-10">
          <h5 className="text-4xl md:text-5xl neon-text font-bold">
            Stack Web
          </h5>

          <SkillBar nombre="React" porcentaje={80} color="azul" />
          <SkillBar nombre="JavaScript" porcentaje={90} color="verde" />
          <SkillBar nombre="Tailwind" porcentaje={75} color="rosa" />
          <SkillBar nombre="Node.js" porcentaje={70} color="morado" />
        </div>
      </div>

    </div>
  );
}

export default AboutMe;
