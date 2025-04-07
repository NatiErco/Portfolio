import React from "react";
import About from "../Components/About";
import Technologies from "../Components/technologies";
import Proyects from "../Components/Proyects";

function Home() {
  return (
    <div className="d-flex flex-column flex-md-row me-10">
      <About />
      <Technologies />
      <Proyects />
    </div>
  );
}

export default Home;
