import SkillBar from '../components/SkillBar';

function AboutMe() {
  return (
    <div className="animate-fadeBounce w-full min-h-screen flex flex-col md:flex-row overflow-hidden relative">

      {/* Columna izquierda: contenido */}
      <div className="w-full md:w-3/5 bg-black text-white p-6 md:p-12 overflow-y-auto h-screen flex flex-col z-10">
        <section className="space-y-6">
          <h2 className="text-4xl md:text-2xl neon-text font-bold to-blue-700">
            Historia
          </h2>
          <p className="leading-relaxed text-sm md:text-base">
            Me gradué de 4º medio y actualmente curso el sexto semestre de Ingeniería Informática en DUOC UC. Mi experiencia laboral formal aún es limitada, pero he participado en numerosos proyectos académicos y personales, donde me especializo en el desarrollo backend y en la gestión de bases de datos.

En mis años de estudio he conformado un equipo llamado “Dino Equipo”, donde colaboramos en proyectos evaluados. Aunque todos contribuimos, mayormente me encargo de resolver errores, proponer mejoras y definir la lógica y la estructura de los sistemas.

Me apasiona crear soluciones intuitivas y seguras, enfocadas en brindar una experiencia fácil para el usuario. Actualmente, estoy profundizando mis conocimientos en Machine Learning, combinando la programación con el análisis de datos, y explorando cómo estos campos pueden integrarse para desarrollar sistemas inteligentes y eficientes.
          </p>

          <h2 className="text-lg sm:text-xl text-blue-400 font-semibold">
            Habilidades
          </h2>
          <p className="leading-relaxed text-sm md:text-base">
            Me destaco por liderazgo y creatividad, cumplo con los plazos, priorizo resolver problemas antes de explicarlos y aprendo rápido nuevas herramientas y tecnologías.
          </p>
        </section>
      </div>

      {/* Columna derecha: fondo difuminado + habilidades */}
      <div className="w-full md:w-2/5 bg-blue-950 relative p-6 md:p-12 flex flex-col text-white overflow-y-auto h-screen">
        {/* Overlay difuminado para fundir con la columna izquierda */}
        <div
          className="absolute top-0 left-0 w-full h-full z-0"
          style={{
            background: 'linear-gradient(to left, rgba(0,0,0,0), rgba(0,0,0,0.9) 80%)',
          }}
        />
      
        <div className="space-y-4 max-w-md relative z-10">
          <h5 className="text-4xl md:text-5xl neon-text font-bold">
            Nivel de dominio
          </h5>

          <SkillBar nombre="Python" porcentaje={40} color="azul" />
          <SkillBar nombre="JavaScript" porcentaje={30} color="amarillo" />
          <SkillBar nombre="MySQL" porcentaje={75} color="rosa" />
          <SkillBar nombre="Node.js" porcentaje={30} color="morado" />
          <SkillBar nombre="React" porcentaje={30} color="azul" />
          <SkillBar nombre="Typescript" porcentaje={50} color="verde" />
          <SkillBar nombre="Java" porcentaje={75} color="naranja" />
        </div>
      </div>

    </div>
  );
}

export default AboutMe;
