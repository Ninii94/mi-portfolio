import React from 'react';

function Contact() {
  return (
    <section className="contact">
      <h2>Contacto</h2>
      <div className="contact-info">
        <div className="contact-item">
          <span>📱</span>
        
        <a href="https://api.whatsapp.com/send?phone=543816591850">+54 381-6591850</a>.
        </div>
        <div className="contact-item">
          <span>📧</span>
          <span>stefany.mon73@gmail.com</span>
        </div>
        <div className="contact-item">
          <span>💻</span>
          
          <a href="https://github.com/Ninii94">Github</a>.

        </div>
      </div>
    </section>
  );
}

export default Contact;