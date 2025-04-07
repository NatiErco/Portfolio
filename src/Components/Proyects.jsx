import React from "react";

function Proyects() {
  return (
    <section
      id="Proyects"
      className="section  p-4 rounded shadow-lg w-75 w-75 mb-5 text-center d-flex flex-column justify-content-left"
      style={{
        border: "1px solid rgba(216, 211, 211, 0.05)", // Borde casi invisible
        boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)", // Sombra leve
      }}
    >
      <h2 className=" fw-bold montserrat">Proyectos</h2>
      <p className="text-dark">
        Describe tus proyectos y lo que has logrado hasta ahora.
      </p>
    </section>
  );
}

export default Proyects;
