import rusbel from "../assets/rusbel.jpg";

function Hero() {
  return (
    <section
      id="home"
      className="min-h-[90vh] flex flex-col items-center justify-center text-center px-6"
    >
      {/* Foto */}
      <div className="mb-8">
        <img
          src={rusbel}
          alt="Rusbel Cuello"
          className="w-44 h-44 md:w-52 md:h-52 rounded-full border-4 border-blue-500 shadow-xl shadow-blue-500/30 mb-8 object-cover object-[50%_20%] transition-transform duration-500 hover:scale-110"
        />
      </div>

      {/* Titulo */}
      <h1 className="text-4xl md:text-6xl font-bold leading-tight">
        Hola, soy{" "}
        <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
          Rusbel
        </span>
      </h1>

      {/* Subtitulo */}
      <p className="mt-6 text-lg md:text-xl text-gray-300 max-w-xl">
        Desarrollador Frontend especializado en React. Me enfoco en crear
        interfaces modernas, rápidas y experiencias web de alta calidad.
      </p>

      {/* Botones */}
      <div className="flex gap-4 mt-10">
        <a
          href="#projects"
          className="px-6 py-3 bg-blue-500 hover:bg-blue-600 transition rounded-lg font-medium shadow-lg"
        >
          Ver proyectos
        </a>

        <a
          href="#contact"
          className="px-6 py-3 border border-gray-400 hover:border-white transition rounded-lg font-medium"
        >
          Contacto
        </a>
      </div>

      {/* Flecha para bajar */}
      <div className="mt-20 animate-bounce text-gray-400 text-2xl">↓</div>
    </section>
  );
}

export default Hero;
