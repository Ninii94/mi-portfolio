import React from 'react';
import './styles/App.css';
import Header from './components/Header';
import Experience from './components/Experience';
import Education from './components/Education';
import Languages from './components/Languages';
import Skills from './components/Skills';
import Contact from './components/Contact';

function App() {
  return (
    <div className="container">
      <Header />
      <Education />
      <Experience />
      <Languages />
      <Skills />
      <Contact />
    </div>
  );
}

export default App;