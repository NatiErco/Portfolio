import React from "react";
import { motion } from "framer-motion";

function Technologies() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.2 }}
      viewport={{ once: true }}
    >
      <section
        id="Tecnologias"
        className="section  p-4 rounded shadow-lg w-75 mb-5 text-center d-flex flex-column justify-content-start"
        style={{
          border: "1px solid rgba(216, 211, 211, 0.05)", // Borde casi invisible
          boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)", // Sombra leve
        }}
      >
        <h2 className="fw-bold montserrat text-center">Tecnologías</h2>

        {/* Contenedor de las tarjetas */}
        <div className="row row-cols-1 row-cols-md-2 gx-1 gy-4 justify-content-center mx-auto  mt-4" style={{ maxWidth: '800px' }}>
          <div className="col">
            <div className="card text-center h-100 p-3">
              <h3 className="text-light fw-bold">Frontend</h3>
              <p>
                HTML, CSS, Bootstrap, Tailwind, JavaScript Vanilla, React Vite
              </p>
            </div>
          </div>

          <div className="col">
            <div className="card text-center h-100 p-3">
              <h3 className="text-light fw-bold">Backend</h3>
              <p>Node.js, Express, MySQL, Postgres, JWT, Auth0</p>
            </div>
          </div>

          <div className="col">
            <div className="card text-center h-100 p-3">
              <h3 className="text-light fw-bold">Educación</h3>
              <p>Bootcamp FullStack Developer, Develhope-Academy, 2024</p>
              <p>Frontend - Platzi</p>
            </div>
          </div>

          <div className="col">
            <div className="card text-center h-100 p-3">
              <h3 className="text-light fw-bold">Metodologías</h3>
              <p>Git, GitHub, Trello, despliegue en Netlify, Vercel y Render</p>
            </div>
          </div>
        </div>
      </section>
    </motion.div>
  );
}

export default Technologies;
