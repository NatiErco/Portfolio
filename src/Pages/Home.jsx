import React from "react";
import Sidebar from "../Components/Sidebar";

function Home() {
  return (
    <div className="d-flex flex-column flex-md-row me-10">
      <div className="me-4">
        <Sidebar />
      </div>
      <div
        className="content flex-grow-1 px-4 py-5"
        style={{ marginLeft: "320px" }}
      >
        <section
          id="sobre-mi"
          className="section  p-4 rounded shadow-lg w-75 w-75 mb-5 text-center d-flex flex-column justify-content-left"
          style={{
            minHeight: "600px",
            border: "1px solid rgba(216, 211, 211, 0.05)", // Borde casi invisible
            boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)", // Sombra leve
          }}
        >
          <h2 className="fw-bold montserrat">Sobre mí</h2>
          <p className="text-light fs-10 mt-4">
            ¡Hola! Soy Natalia Ercolano, desarrolladora web apasionada por la
            tecnología. Me especializo en JavaScript, React y Node.js, y utilizo
            mi experiencia en análisis de datos para crear aplicaciones
            dinámicas. Mi objetivo es seguir creciendo, colaborar con equipos
            multidisciplinarios y mantenerme siempre actualizada con las últimas
            tendencias del sector.
          </p>
          <div className="botones-container">
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

        <section
          id="Tecnologias"
          className="section p-4 rounded shadow-lg w-75 mb-5 text-center d-flex flex-column justify-content-center"
          style={{
            minHeight: "600px",
            border: "1px solid rgba(216, 211, 211, 0.05)", // Borde casi invisible
            boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)", // Sombra leve
          }}
        >
          <h2 className="fw-bold montserrat ">Tecnologías</h2>

          {/* Contenedor de las tarjetas */}
          <div className="d-flex flex-column align-items-center mt-4">
            <div className="d-flex justify-content-between w-100 mb-4">
              {/* Card 1: Frontend */}
              <div className="card text-center">
                <h3 className="text-light fw-bold">Frontend</h3>
                <p>HTML, CSS, Bootstrap, Tailwind, JavaScript Vanilla, React Vite</p>
          
              </div>

              {/* Card 2: Backend */}
              <div className="card text-center">
                <h3 className="text-light fw-bold">Backend</h3>
                <p>
                  Node.js, Express, MySql
                
                Postgres, JWT, Auth0
              </p>
              </div>
            </div>

            <div className="d-flex justify-content-between w-100">
              {/* Card 3: Educación */}
              <div className="card text-center">
                <h3 className="text-light fw-bold ">Educación</h3>
                <p>Bootcamp FullStack Developer, Develhope-Academy, 2024</p>
                <p>Frontend-Platzi</p>
              </div>

              {/* Card 4: Cursos */}
              <div className="card text-center">
                <h3 className="text-light fw-bold">Metodologías</h3>
                <p>Git, Git-Hub, Trello, 
                despliegue en Netlify, Vercel y Render</p>
              </div>
            </div>
          </div>
        </section>

        <section
          id="Proyectos"
          className="section p-4 rounded shadow-lg w-75 mb-5 text-center d-flex flex-column justify-content-center"
          style={{
            minHeight: "600px",
            
          }}
        >
          <h2 className=" fw-bold montserrat">Proyectos</h2>
          <p className="text-dark">
            Describe tus proyectos y lo que has logrado hasta ahora.
          </p>
        </section>
      </div>
    </div>
  );
}

export default Home;
