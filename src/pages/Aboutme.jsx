

function AboutMe() {
  return (
    <div className="max-w-6xl mx-auto p-6">

      <section className="mb-12">
        <h2 className="text-3xl font-semibold mb-4">Historia profesional</h2>
        <p className="text-gray-700 leading-relaxed">
          Aquí puedes escribir un texto más extenso hablando de tu formación, experiencia, intereses y lo que te hace único como desarrollador.
        </p>
      </section>

      <section>
        <h2 className="text-3xl font-semibold mb-4">Habilidades </h2>

         <p className="text-gray-700 leading-relaxed">
          Aquí puedes escribir un texto más extenso hablando de tu formación, experiencia, intereses y lo que te hace único como desarrollador.
        </p>


        <h2 className="text-3xl font-semibold mb-4">Dominio de lenguajes web  </h2>

        <div className="space-y-4 max-w-md">
          <div>
            <div className="flex justify-between mb-1">
              <span>React</span>
              <span>80%</span>
            </div>
            <div className="w-full bg-gray-300 rounded h-4">
              <div className="bg-blue-500 h-4 rounded" style={{ width: '80%' }}></div>
            </div>
          </div>

          <div>
            <div className="flex justify-between mb-1">
              <span>JavaScript</span>
              <span>90%</span>
            </div>
            <div className="w-full bg-gray-300 rounded h-4">
              <div className="bg-green-500 h-4 rounded" style={{ width: '90%' }}></div>
            </div>
          </div>
          
        </div>
      </section>

    </div>
  );
}

export default AboutMe;
