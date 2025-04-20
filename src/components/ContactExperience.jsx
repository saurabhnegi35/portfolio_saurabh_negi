import React, { useEffect, useState } from "react";
import { Environment, Float, OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Computer } from "./hero_model/models/Computer";

const ContactExperience = () => {
  const [scale, setScale] = useState(2.75);

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;

      if (width < 640) {
        // Tailwind: sm
        setScale(2.3);
      } else if (width < 1024) {
        // Tailwind: md
        setScale(2.5);
      } else {
        // Tailwind: lg+
        setScale(2.75);
      }
    };

    handleResize(); // Initial run
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return (
    <Canvas camera={{ position: [0, 3, 7], fov: 45 }} shadows>
      <ambientLight intensity={0.5} color="#fff4e6" />
      <directionalLight
        position={[-9, 9, 1]}
        intensity={2.5}
        castShadow
        shadow-mapSize-width={2048}
        shadow-mapSize-height={2048}
        shadow-bias={-0.001}
        color="#ffd9b3"
      />

      {/* <spotLight
        position={[-5, 5, 5]}
        angle={0.15}
        penumbra={1}
        intensity={1}
        castShadow
      /> */}

      <directionalLight
        position={[-9, 9, 1]}
        intensity={2.5}
        castShadow
        color="#ffd9b3"
      />

      <OrbitControls
        enableZoom={false}
        enablePan={false}
        minPolarAngle={Math.PI / 6}
        maxPolarAngle={Math.PI / 2}
        minAzimuthAngle={Math.PI / 10 - 0.8} // slight left
        maxAzimuthAngle={Math.PI / 10 + 0.2} // slight right
      />

      <group
        scale={scale}
        position={[0, -1.51, -1]}
        rotation={[0, 0.4, 0]}
        castShadow
      >
        <Computer />
      </group>

      <group scale={[1, 1, 1]}>
        <mesh
          receiveShadow
          position={[0, -1.5, 0]}
          rotation={[-Math.PI / 2, 0, 0.4]}
        >
          <planeGeometry args={[30, 30]} />
          <meshStandardMaterial color="#a47b2d" />
        </mesh>
      </group>
    </Canvas>
  );
};

export default ContactExperience;
