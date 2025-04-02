import React from "react";
import Sidebar from "../Components/Sidebar";

function Home() {
  return (
    <div className="d-flex flex-column flex-md-row me-10">
      <div className="me-4">
        <Sidebar />
      </div>
      <div className="content flex-grow-1 px-4 py-5">
        <section
          id="sobre-mi"
          className="section bg-white p-4 rounded shadow-lg w-75 w-75 mb-5 text-center d-flex flex-column justify-content-left"
          style={{ minHeight: "600px" }}
        >
          <h2 className="text-primary fw-bold montserrat">Sobre mí</h2>
          <p className="text-dark">¡Hola! Soy Natalia Ercolano, una apasionada desarrolladora web con experiencia en análisis de datos y optimización de procesos. Mi trayectoria comenzó como contable, donde perfeccioné mis habilidades en el manejo de datos y la mejora de sistemas.

          Actualmente, me especializo en tecnologías como JavaScript, React y Node.js, creando aplicaciones web dinámicas y eficientes.
          
          Estoy en búsqueda activa de prácticas o programas de trainee en el ámbito del desarrollo web, con el objetivo de seguir creciendo profesionalmente y aportar valor a equipos innovadores. Además, estoy aprendiendo inglés técnico para ampliar mis horizontes y colaborar en proyectos internacionales.
          
          Si buscas una desarrolladora web comprometida, con una sólida base en análisis de datos y una actitud proactiva, ¡estaré encantada de conectar contigo!
        
  
          </p>
        
        
          <button className="btn btn-primary mt-4" onClick={() => window.location.href = "#Contactame"}>
          Descagar CV  </button>
          <button className="btn btn-primary mt-4" onClick={() => window.location.href = "#Contactame"}>
          Contactame  </button> 
          

        </section>

        <section
          id="Tecnologias"
          className="section bg-white p-4 rounded shadow-lg w-75 mb-5 text-center d-flex flex-column justify-content-center"
          style={{ minHeight: "600px" }}
        >
          <h2 className="text-primary fw-bold montserrat">Tecnologías</h2>
          <p className="text-dark">
            En esta sección mencionas las tecnologías que dominas.
          </p>
        </section>

        <section
          id="Proyectos"
          className="section bg-white p-4 rounded shadow-lg w-75 mb-5 text-center d-flex flex-column justify-content-center"
          style={{ minHeight: "600px" }}
        >
          <h2 className="text-primary fw-bold montserrat">Proyectos</h2>
          <p className="text-dark">
            Describe tus proyectos y lo que has logrado hasta ahora.
          </p>
        </section>
      </div>
    </div>
  );
}

export default Home;
