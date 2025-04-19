import React from "react";
import { motion } from "framer-motion";

function Contact() {
  return (
    <motion.div
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8, delay: 0.2 }}
    viewport={{ once: true }}
  >
    <section
      id="Contactame"
      className="section  p-4 rounded shadow-lg w-75 w-75 mb-5 text-center d-flex flex-column justify-content-left"
      style={{
        border: "1px solid rgba(216, 211, 211, 0.05)", // Borde casi invisible
        boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)", // Sombra leve
        color: "#fff",
      }}
    >
      <h2 className=" fw-bold montserrat mb-4">Contactame</h2>
      <form className="d-flex flex-column gap-3 w-100" 
      style={{ maxWidth: "300px" }}
      >
        <input
          type="text"
          placeholder="Nombre"
          className="mb-3 form-control "
          required
        />
        <input
          type="email"
          placeholder="Email"
          className="mb-3 form-control"
          required
        />
        <textarea
          placeholder="Mensaje"
          className="mb-3 form-control"
          rows="4"
          required
        ></textarea>
        <button type="submit" className="boton">
          Enviar Mensaje
        </button>
      </form>
    </section>
    </motion.div>
  );
}
export default Contact;
