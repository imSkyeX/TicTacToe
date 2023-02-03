import React, { useState, useEffect, useRef } from "react";
import '../styles/mainmenu.css'
import { Link } from 'react-router-dom'
import WAVES from "vanta/dist/vanta.waves.min";
import * as THREE from "three";
import { ImCross, } from 'react-icons/im'
import { motion } from 'framer-motion'
import {  VscCircleOutline } from 'react-icons/vsc'

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

  const cross = {
    rest:{
      opacity: 0
    },
    hover:{
      opacity: 1,
      rotate: 90
    }
  }

  const button = {
    rest:{
      scale:1
    },
    hover:{
      scale:1.1
    }
  }

  return (
    <div ref={vantaRef} className='container'>
      <div className='game-selector'>   
        <h1>Game<br/>Mode</h1>

        <motion.div initial="rest" whileHover="hover" animate="rest" className="motion-button">
          <motion.div variants={cross}><ImCross /></motion.div>
          <motion.div variants={button}><Link to='/singleplayer' className='game-button'>SINGLEPLAYER</Link></motion.div>
          <motion.div variants={cross}><ImCross /></motion.div>
        </motion.div>

        <motion.div initial="rest" whileHover="hover" animate="rest" className="motion-button">
          <motion.div variants={cross}><ImCross /></motion.div>
          <motion.div variants={button}><Link to='/multiplayer' className='game-button'>MULTIPLAYER</Link></motion.div>
          <motion.div variants={cross}><ImCross /></motion.div>
        </motion.div>
       
      </div>
    </div>
  )
}

export default MainMenu
