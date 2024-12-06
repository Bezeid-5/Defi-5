'use client'
import React from "react";
import { useEffect } from 'react';
import '../styles/corps.css';


const HomeIntro = () => {
    useEffect(() => {
      document.body.style.background = "linear-gradient(90deg, #3b82f6, #9333ea)";
      return () => {
        document.body.style.background = "linear-gradient(90deg, #3b82f6, #9333ea)"; 
      };
    }, []);
  
    return (
      <div className="home-intro-container">
        <div className="home-intro-content">
          <h1>Cyber c'est super</h1>
          <p>
            Découvrez le monde fascinant de la cybersécurité et comment il façonne notre avenir numérique. 
            Restez protégé et maîtrisez les outils pour sécuriser votre environnement numérique.
          </p>
        </div>
      </div>
    );
  };
  
  export default HomeIntro;