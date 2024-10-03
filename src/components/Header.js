import React from 'react';

function Header() {
  return (
    <header className="header">
      <img 
        src="/perfil.jpg" 
        alt="Foto de perfil" 
        className="profile-image"
      />
      <div className="profile-info">
        <h1>Montenegro Pastrana Stefany</h1>
        <p>
        Desarrolladora de Software | Diseñadora UX/UI <br></br>
        Graduada en la Tecnicatura Universitaria de Programacion de la UTN FRT, soy apasionada por el desarrollo de software y el diseño UX/UI. Mi objetivo es crear soluciones tecnológicas que realmente impacten en la vida de las personas.
        <br></br>
🚀 Lo que ofrezco: <br></br>
- Sólida formación en desarrollo de software
- Experiencia práctica en diseño UX/UI
- Conocimientos en gestión de proyectos
<br></br>
🔍 Busco oportunidades para: <br></br>
- Aplicar mis habilidades en proyectos desafiantes
- Colaborar con equipos innovadores
- Seguir creciendo profesionalmente
        </p>
      </div>
    </header>
  );
}

export default Header;