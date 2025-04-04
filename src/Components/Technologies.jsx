import React from 'react';

function Technologies() {
  return (
    <div className="d-flex flex-column flex-md-row me-10">
      <div
        className="content flex-grow-1 px-4 py-5"
        style={{ marginLeft: '320px' }}
      >
        <section
          id="Tecnologias"
          className="section p-4 rounded shadow-lg w-75 mb-5 text-center d-flex flex-column justify-content-center"
         
        >
          <h2 className="fw-bold montserrat">Tecnologías</h2>

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
                  Node.js, Express, MySQL, Postgres, JWT, Auth0
                </p>
              </div>
            </div>

            <div className="d-flex justify-content-between w-100">
              {/* Card 3: Educación */}
              <div className="card text-center">
                <h3 className="text-light fw-bold">Educación</h3>
                <p>Bootcamp FullStack Developer, Develhope-Academy, 2024</p>
                <p>Frontend - Platzi</p>
              </div>

              {/* Card 4: Metodologías */}
              <div className="card text-center">
                <h3 className="text-light fw-bold">Metodologías</h3>
                <p>Git, GitHub, Trello, despliegue en Netlify, Vercel y Render</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Technologies;
