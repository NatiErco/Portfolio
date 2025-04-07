import { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";


const ParticlesBackground = () => {
  return (
    <Particles
      params={{
        particles: {
          number: { value: 50 },
          size: { value: 3 },
          move: { enable: true, speed: 1 },
        },
      }}
    />
  );
};

export default ParticlesBackground;

// const ParticlesBackground = () => {
//   const particlesInit = useCallback(async (engine) => {
//     await loadFull(engine);
//   }, []);

//   return (
//     <Particles
//       init={particlesInit}
//       options={{
//         background: { color: "#121212" }, // Fondo oscuro suave
//         particles: {
//           number: { value: 80 },
//           color: { value: "#ffffff" }, // Partículas blancas
//           shape: { type: "circle" },
//           opacity: { value: 0.5 },
//           size: { value: 2 },
//           move: { enable: true, speed: 0.5 }, // Movimiento suave
//           links: {
//             enable: true,
//             distance: 150,
//             color: "#ffffff",
//             opacity: 0.2,
//             width: 1,
//           },
//         },
//       }}
//       style={{
//         position: "absolute",
//         top: 0,
//         left: 0,
//         width: "100%",
//         height: "100%",
//         zIndex: -1,
//       }}
//     />
//   );
// };

// export default ParticlesBackground;


// import Particles from "react-tsparticles";

