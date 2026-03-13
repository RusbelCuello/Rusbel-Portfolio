function About() {
  return (
    <section id="about" className="py-24 px-6 max-w-4xl mx-auto">
      <h2 className="text-3xl md:text-4xl font-bold mb-10 text-center">
        Sobre mí
      </h2>

      <div className="space-y-6 text-gray-300 text-lg leading-relaxed text-justify">
        <p>
          Soy un desarrollador web dominicano apasionado por la tecnología y por
          crear interfaces modernas, rápidas y responsivas. Disfruto construir
          experiencias digitales que sean intuitivas y eficientes para los
          usuarios.
        </p>

        <p>
          Me considero una persona soñadora, con una mente creativa y una gran
          motivación por aprender constantemente y enfrentar nuevos retos dentro
          del mundo del desarrollo web.
        </p>
      </div>

      {/* Bloque destacado */}
      <div className="mt-12 p-6 md:p-8 rounded-xl bg-slate-900 border border-slate-700 text-center">
        <p className="text-lg md:text-xl text-gray-200 font-medium">
          "Mi objetivo es seguir creciendo como desarrollador y crear proyectos
          que aporten valor real a las personas."
        </p>
      </div>
    </section>
  );
}

export default About;
