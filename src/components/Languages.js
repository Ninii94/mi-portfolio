import React from 'react';

function Languages() {
  return (
    <section className="languages">
      <h2>Idiomas</h2>
      <div className="languages-grid">
        <div className="language-card">
          <h3>Español</h3>
          <p className="level">Nativo</p>
          <div className="progress-bar">
            <div className="progress-fill native"></div>
          </div>
        </div>

        <div className="language-card">
          <h3>Inglés</h3>
          <p className="level">C1 - Avanzado</p>
          <div className="progress-bar">
            <div className="progress-fill advanced"></div>
          </div>
        </div>

        <div className="language-card">
          <h3>Coreano</h3>
          <p className="level">A1 - Básico</p>
          <div className="progress-bar">
            <div className="progress-fill basic"></div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Languages;