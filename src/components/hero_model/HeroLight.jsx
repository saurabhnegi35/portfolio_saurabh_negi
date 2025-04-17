import React from "react";
import * as THREE from "three";

const HeroLight = () => {
  return (
    <>
      {/* <ambientLight intensity={2} color="#1a1a40" />
      <directionalLight position={[5, 5, 5]} intensity={1} /> */}

      <spotLight
        position={[2, 5, 4]}
        intensity={100}
        angle={0.15}
        penumbra={0.3}
        color="white"
      />
      <spotLight
        position={[4, 5, 4]}
        intensity={40}
        angle={0.3}
        penumbra={0.3}
        color="#9d4edd"
      />
      <spotLight
        position={[-3, 5, 5]}
        intensity={60}
        angle={0.4}
        penumbra={1}
        color="blue"
      />

      <primitive
        object={new THREE.RectAreaLight("#A259FF", 8, 3, 2)}
        position={[1, 3, 4]}
        intensity={15}
        rotation={[-Math.PI / 4, Math.PI / 4, 0]}
      />

      <pointLight position={[0, 1, 0]} intensity={10} color="#7209b7" />
      <pointLight position={[1, 2, -2]} intensity={10} color="#0d00a4" />
    </>
  );
};

export default HeroLight;
