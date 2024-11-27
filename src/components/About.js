import React from 'react';

import icon from '../assets/icon.png';


function About() {
  return (
    <section id="about" className="about-section">
      <div className="container">
      <img src={icon} alt="thali" />
      <div className="text-content">
          <h2>Sobre Mim</h2>
          <p>Olá, tudo bem? Meu nome é Thalita e sou uma apaixonada por literatura, sempre à procura de novas histórias para me inspirar. Este blog é uma maneira de compartilhar minhas experiências de leitura com o mundo.</p>
        </div>
      </div>
    </section>
  );
}

export default About;
