import React, { useState } from 'react';
import './contacts.css';

function Contatos() {
  const [formData, setFormData] = useState({
    fullName: '',
    subject: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // I will add email sending logic later (email API EmailJS or a backend server)
    alert(`Messagem enviada com sucesso! Entraremos em contato o mais breve possivel.`);
  };

  return (
    <div className="contatos-container">
      <h1>Entrar em Contato</h1>
      <form className="contact-form" onSubmit={handleSubmit}>
        <label htmlFor="fullName">Nome:</label>
        <input
          type="text"
          id="fullName"
          name="fullName"
          value={formData.fullName}
          onChange={handleChange}
          placeholder="Escreva seu nome completo"
          required
        />

        <label htmlFor="subject">Email:</label>
        <input
          type="text"
          id="subject"
          name="subject"
          value={formData.subject}
          onChange={handleChange}
          placeholder="Escreva seu email de contato"
          required
        />  

        <label htmlFor="subject">Assunto:</label>
        <input
          type="text"
          id="subject"
          name="subject"
          value={formData.subject}
          onChange={handleChange}
          placeholder="Escreva o assunto"
          required
        />

        <label htmlFor="message">Mensagem:</label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          placeholder="Escreva sua mensagem aqui..."
          rows="7"
          required
        ></textarea>

        <button type="submit" className="send-button">Enviar</button>
      </form>
    </div>
  );
}

export default Contatos;