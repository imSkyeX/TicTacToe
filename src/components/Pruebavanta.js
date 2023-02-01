import React, { useState, useEffect, useRef } from "react";
import WAVES from "vanta/dist/vanta.waves.min";
import * as THREE from "three";

const Pruebavanta = () => {
  const [vantaEffect, setVantaEffect] = useState(0);
  const vantaRef = useRef(null);

  useEffect(() => {
    if (!vantaEffect) {
      setVantaEffect(
        WAVES({
          el: vantaRef.current,
          THREE: THREE,
          mouseControls: true,
          touchControls: true,
          gyroControls: false,
          // minHeight: 600.00,
          // minWidth: 600.00,
          scale: 1.00,
          scaleMobile: 1.00,
          color: 0x848484,
          shininess: 73.00,
          waveHeight: 21.00,
          waveSpeed: 0.50
        })
      );
    }
    return () => {
      if (vantaEffect) vantaEffect.destroy();
    };
  }, [vantaEffect]);
  return (
    <div style={{width: '100vw', height: '100vh'}} ref={vantaRef}>
      <div>Prueba Vanta</div>
    </div>
  );
};

export default Pruebavanta;