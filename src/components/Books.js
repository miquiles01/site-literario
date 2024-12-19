import React from 'react';

import livro1 from '../assets/livro1.jpg';
import livro2 from '../assets/livro2.jpg';
import livro3 from '../assets/livro3.jpg';
import livro4 from '../assets/livro4.jpg';
import livro5 from '../assets/livro5.jpg';
import livro6 from '../assets/livro6.jpg';
import livro7 from '../assets/livro7.jpg';
import livro8 from '../assets/livro8.jpg';
import livro9 from '../assets/livro9.jpg';
import livro10 from '../assets/livro10.jpg';
import livro11 from '../assets/livro11.jpg';
import livro12 from '../assets/livro12.jpg';

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
          <div className="book-item">
            <img src={livro2} alt="livro2" />
            <strong>⭐⭐⭐⭐⭐</strong>
            <p>Como pode um conto de 22 páginas me fazer surtar tanto??</p>
            </div>
          <div className="book-item">
            <img src={livro3} alt="livro3" />
            <strong>⭐⭐⭐⭐⭐</strong>
            <p>É curtinho, muito bom.</p>
            </div>
          <div className="book-item">
            <img src={livro4} alt="livro4" />
            <strong>⭐⭐⭐</strong>
            <p>Não sei se gostei muito.</p>
            </div>
          <div className="book-item">
            <img src={livro5} alt="livro5" />
            <strong>⭐⭐</strong>
            <p>Primeiro livro da Olivia que eu não gosto kkk</p>
            </div>
          <div className="book-item">
            <img src={livro6} alt="livro6" />
            <strong>⭐⭐⭐⭐</strong>
            <p>A Aly nunca decepciona.</p>
            </div>
          <div className="book-item">
            <img src={livro7} alt="livro7" />
            <strong>⭐⭐⭐⭐</strong>
            <p>Amoooooooooo</p>
            </div>
          <div className="book-item">
            <img src={livro8} alt="livro8" />
            <strong>⭐⭐⭐⭐</strong>
            <p>Eles se completam tantooo</p>
            </div>
          <div className="book-item">
            <img src={livro9} alt="livro9" />
            <strong>⭐⭐⭐⭐⭐</strong>
            <p>Amo todos os livros da Stef</p>
            </div>
          <div className="book-item">
            <img src={livro10} alt="livro10" />
            <strong>⭐⭐⭐⭐⭐</strong>
            <p>O Dan é um querido.</p>
            </div>
          <div className="book-item">
            <img src={livro11} alt="livro11" />
            <strong>⭐⭐⭐</strong>
            <p>Muito bom ler e fazer as expressões da Bella do filme HAHAHA</p>
            </div>
          <div className="book-item">
            <img src={livro12} alt="livro12" />
            <strong>⭐⭐</strong>
            <p>Gostei não kkk</p>
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
