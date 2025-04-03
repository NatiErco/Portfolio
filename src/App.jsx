
import ParticlesBackground from "./Components/Particles.jsx";
import "./index.css";

import Home from "./Pages/Home.jsx";

function App() {
  return (
    <div style={{ position: "relative", minHeight: "100vh" }}>
      <ParticlesBackground/> {/* Fondo de partículas en toda la app */}
      <Home/>
 
    </div>
  );
}

export default App;
