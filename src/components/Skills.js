import React from 'react';

function Skills() {
  return (
    <div className="skills-section">
      <h2>Habilidades Técnicas</h2>
      <div className="skills-grid">
        <div className="skills-card">
          <h3>Lenguajes y Tecnologías</h3>
          <ul>
            <li>JavaScript</li>
            <li>Java</li>
            <li>CSS</li>
            <li>HTML</li>
            <li>C#</li>
            <li>C++</li>
            <li>Python</li>
            <li>TypeScript</li>
            <li>Babel</li>
            
          </ul>
        </div>

        <div className="skills-card">
          <h3>Frameworks y Librerias</h3>
          <ul>
            <li>React</li>
            <li>Node.js</li>
            <li>Express.js</li>
            <li>Bootstrap</li>
            <li>Redux</li>
            <li>jQuery</li>
            <li>Angular</li>
            <li>Webpack</li>
          </ul>
        </div>
        <div className="skills-card">
          <h3>Herramientas de Diseño</h3>
          <ul>
              <li>Adobe Photoshop</li>
              <li>Adobe Illustrator</li>
              <li>Figma</li>
            </ul>
        </div>

        <div className="skills-card">
          <h3>Tecnologías Back-end</h3>
          <ul>
            <li>RESTful API</li>
            <li>.NET</li>
            <li>GIT</li>
          </ul>
        </div>
        <div className="skills-card">
          <h3>Manejo de datos</h3>
          <ul>
            <li>JSON</li>
            <li>XML</li>
         
          </ul>
        </div>

        <div className="skills-card">
          <h3>Bases de Datos</h3>
          <ul>
            <li>SQL</li>
            <li>MySQL</li>
            <li>MongoDB</li>
            <li>NoSQL</li>
            <li>PostgreSQL</li>
          </ul>
        </div>
      </div>
      
      

      <div className="design-skills">
        <div className="design-grid">
          
        </div>
      </div>

      <div className="additional-skills">
        <h2>Habilidades Adicionales</h2>
        <ul>
          <li>Diseño y administración de bases de datos</li>
          <li>Organización de equipo</li>
          <li>Conocimientos sobre ciberseguridad</li>
          <li>Metodologías ágiles</li>
          <li>WordPress</li>
          <li>Capacidad de comunicación</li>
        </ul>
      </div>
    </div>
  );
}

export default Skills;