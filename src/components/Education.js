import React from 'react';

function Education() {
  return (
    <section className="education">
      <h2>Formación Académica</h2>
      <div className="education-card">
        <h3>Universidad Tecnológica Nacional (UTN)</h3>
        <h4>Facultad Regional Tucumán (FRT)</h4>
        <div className="education-details">
          <p className="degree">Tecnico Universitario en Programacion, 2021 -2024</p>
          <p className="status">Graduada</p>
        </div>
      </div>
      
      <div className="education-card">
        <h3>Instituto Eton</h3>
        
        <div className="education-details">
          <p className="degree">Traductorado superior en Inglés, 2020 - 2021</p>
          <p className="status">No completado</p>
        </div>
      </div>
      <div className="education-card">
        <h3>Educacion IT</h3>
        
        <div className="education-details">
          <p className="degree">Introduccion a la ciberseguridad, 2022</p>
          <p className="status">Completado</p>
        </div>
      </div>
    </section>
  );
}

export default Education;