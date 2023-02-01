import React, { useState, useEffect, useRef } from "react";
import '../styles/mainmenu.css'
import { Link } from 'react-router-dom'
import WAVES from "vanta/dist/vanta.waves.min";
import * as THREE from "three";

const MainMenu = () => {
  const [vantaEffect, setVantaEffect] = useState(0);
  const vantaRef = useRef(null);

  useEffect(() => {
    if (!vantaEffect) {
      setVantaEffect(
        WAVES({
          el: vantaRef.current,
          THREE: THREE,
          mouseControls: false,
          touchControls: false,
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
    <div ref={vantaRef} className='container'>
      <div className='game-selector'>   
        <h1>Game<br/>Mode</h1>
        <Link to='/singleplayer' className='game-button'>SINGLEPLAYER</Link>
        <Link to='/multiplayer' className='game-button'>MULTIPLAYER</Link>
      </div>
    </div>
  )
}

export default MainMenu
