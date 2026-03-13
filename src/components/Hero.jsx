function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center text-center px-6 pt-28"
    >
      {" "}
      <div className="max-w-3xl">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6">
          Rusbel Cuello
        </h1>

        <p className="text-gray-400 text-lg md:text-xl mb-8">
          Desarrollador Frontend especializado en React
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#projects"
            className="bg-blue-500 px-6 py-3 rounded-lg hover:bg-blue-600"
          >
            Ver proyectos
          </a>

          <a
            href="#contact"
            className="border px-6 py-3 rounded-lg hover:bg-white hover:text-black"
          >
            Contacto
          </a>
        </div>
      </div>
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <a href="#about" className="text-gray-400 text-3xl">
          ↓
        </a>
      </div>
    </section>
  );
}

export default Hero;
