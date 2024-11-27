import React from 'react';

import livro1 from '../assets/livro1.jpg';

function Books() {
  return (
    <section id="books" className="books-section">
      <div className="container">
        <h2>Livros Lidos em 2024 📚</h2>
        <div className="book-grid">
          <div className="book-item">
          <img src={livro1} alt="livro1" />
            <strong>⭐⭐⭐⭐⭐+❤️</strong>
            <p>Ai gente, eu amei.</p>
          </div>
        </div>
        <div className="view-more">
          <p><a href="lidos.html">Ver mais livros</a></p>
        </div>
      </div>
    </section>
  );
}

export default Books;
