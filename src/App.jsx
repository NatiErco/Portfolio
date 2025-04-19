import About from "./Components/About.jsx";
import Contact from "./Components/Contact.jsx";
import Proyects from "./Components/Proyects.jsx";
import Sidebar from "./Components/Sidebar.jsx";
import Technologies from "./Components/Technologies.jsx";

import "./index.css";

function App() {
  return (
    <div className="main-container d-flex">
      <Sidebar />
      <main className="content ms-md-5 px-3">
        <About />
        <Technologies />
        <Proyects />
        <Contact />
      </main>
    </div>
  );
}

export default App;
