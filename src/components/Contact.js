import React, { useState } from 'react';
import axios from 'axios';

function Contact() {

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);

  // Função para lidar com o envio do formulário
  const handleSubmit = async (e) => {
    e.preventDefault(); 

    setLoading(true);
    setError(null);
    setSuccess(null);

    const formData = {
      name,
      email,
      message,
    };

    try {
      const response = await axios.post('https://sua-api.com/contato', formData);
      
      if (response.status === 200) {
        setSuccess('Mensagem enviada com sucesso!'); // Exibe mensagem de sucesso
      }
    } catch (err) {
      setError('Ocorreu um erro ao enviar a mensagem. Tente novamente.');
    } finally {
      setLoading(false); 
    }
  };

  return (
    <section id="contact" className="contact-section">
      <div className="container">
        <h2>Contato</h2>
        <p>Gostaria de <strong>firmar parceira</strong> ou entrar em contato comigo? Preencha o formulário abaixo ou envie um e-mail para: <a href="mailto:bookstan.emvelaris@gmail.com">bookstan.emvelaris@gmail.com</a></p>
        
        <form className="contact-form" onSubmit={handleSubmit}>
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

        {error && <div className="error-message">{error}</div>}
        {success && <div className="success-message">{success}</div>}
      </div>
    </section>
  );
}

export default Contact;
