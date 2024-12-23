import React, { useState } from 'react';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);

    const formData = {
      name,
      email,
      message,
    };

    try {
      const response = await axios.post('http://localhost/request/contact.php', formData);

      if (response.status === 200) {
        toast.success('Mensagem enviada com sucesso!');
        setName('');
        setEmail('');
        setMessage('');
      }
    } catch (err) {
      toast.error('Ocorreu um erro ao enviar a mensagem. Tente novamente.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="contact-section">
      <div className="container">
        <h2>Contato</h2>
        <p>
          Gostaria de <strong>firmar parceira</strong> ou entrar em contato
          comigo? Preencha o formulário abaixo ou envie um e-mail para:{' '}
          <a href="mailto:bookstan.emvelaris@gmail.com">
            bookstan.emvelaris@gmail.com
          </a>
        </p>

        <form method='POST' className="contact-form" onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Nome"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <textarea
            placeholder="Sua mensagem"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
          ></textarea>
          <button type="submit" disabled={loading}>
            {loading ? 'Enviando...' : 'Enviar'}
          </button>
        </form>

        <ToastContainer position="top-right" autoClose={2000} />
      </div>
    </section>
  );
}

export default Contact;
