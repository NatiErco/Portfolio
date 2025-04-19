import React from "react";

function About() {
  return (
    <section
      id="about-me"
      className="section  p-4 rounded shadow-lg w-75 w-75 mb-5 text-center d-flex flex-column justify-content-left"
      style={{
        border: "1px solid rgba(216, 211, 211, 0.05)", // Borde casi invisible
        boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)", // Sombra leve
      }}
    >
      <h2 className="fw-bold montserrat">Hola! Soy Natalia</h2>
      
      <div class="maquina">
        <span class="texto text-light">Desarrolladora Fullstack</span>
      </div>

      <p className="text-light fs-6 mt-4">
        Desarrolladora web full stack con una sólida base en análisis de datos y
        gestión administrativa. Me apasiona transformar ideas en soluciones
        digitales usando  <strong>JavaScript, React y Node.js.</strong> <br />
        <br />
        Tras una trayectoria en el mundo contable, hoy aplico ese pensamiento
        analítico en el desarrollo de aplicaciones web dinámicas, funcionales y
        bien estructuradas. <br />
        <br />
        Me encanta aprender, colaborar en entornos multidisciplinarios y aportar
        valor con empatía, compromiso y creatividad. Mi meta: crecer
        profesionalmente mientras ayudo a otros a hacer realidad sus proyectos.
        🚀
      </p>
      <div className="botones-container mt-4 d-flex gap-3 justify-content-center">
        <button
          className="boton"
          onClick={() => window.open("/cv.pdf", "_blank")}
        >
          CV Español{" "}
        </button>
        <button
          className="boton"
          onClick={() => (window.location.href = "#Contactame")}
        >
          Contactame{" "}
        </button>
      </div>
    </section>
  );
}

export default About;
