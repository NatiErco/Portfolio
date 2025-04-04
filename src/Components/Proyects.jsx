import React from "react";

function Proyects() {
  return (
    <div className="d-flex flex-column flex-md-row me-10">
      <section
        id="Proyects"
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
  );
}

export default Proyects;
