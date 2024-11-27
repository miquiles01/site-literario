import React from 'react';

function Contact() {
  return (
    <section id="contact" className="contact-section">
      <div className="container">
        <h2>Contato</h2>
        <p>Gostaria de <strong>firmar parceira</strong> ou entrar em contato comigo? Preencha o formulário abaixo ou envie um e-mail para: <a href="mailto:bookstan.emvelaris@gmail.com">bookstan.emvelaris@gmail.com</a></p>
        <form className="contact-form">
          <input type="text" placeholder="Nome" required />
          <input type="email" placeholder="Email" required />
          <textarea placeholder="Sua mensagem" required></textarea>
          <button type="submit">Enviar</button>
        </form>
      </div>
    </section>
  );
}

export default Contact;
