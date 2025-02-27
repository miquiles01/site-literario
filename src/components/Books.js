import React from 'react';

import livro1 from '../assets/livro1.jpg';
import livro2 from '../assets/livro2.jpg';
import livro3 from '../assets/livro3.jpg';
import livro4 from '../assets/livro4.jpg';
import livro6 from '../assets/livro6.jpg';
import livro7 from '../assets/livro7.jpg';
import livro8 from '../assets/livro8.jpg';
import livro9 from '../assets/livro9.jpg';
import livro10 from '../assets/livro10.jpg';
import livro11 from '../assets/livro11.jpg';
import livro12 from '../assets/livro12.jpg';

const books = [
  { img: livro1, rating: '⭐⭐⭐⭐⭐+❤️', review: 'Ai gente, eu amei.' },
  { img: livro2, rating: '⭐⭐⭐⭐⭐', review: 'Como pode um conto de 22 páginas me fazer surtar tanto??' },
  { img: livro3, rating: '⭐⭐⭐⭐⭐', review: 'É curtinho, muito bom.' },
  { img: livro4, rating: '⭐⭐⭐', review: 'Não sei se gostei muito.' },
  { img: livro6, rating: '⭐⭐⭐⭐', review: 'A Aly nunca decepciona.' },
  { img: livro7, rating: '⭐⭐⭐⭐', review: 'Amoooooooooo' },
  { img: livro8, rating: '⭐⭐⭐⭐', review: 'Eles se completam tantooo' },
  { img: livro9, rating: '⭐⭐⭐⭐⭐', review: 'Amo todos os livros da Stef' },
  { img: livro10, rating: '⭐⭐⭐⭐⭐', review: 'O Dan é um querido.' },
  { img: livro11, rating: '⭐⭐⭐', review: 'Muito bom ler e fazer as expressões da Bella do filme HAHAHA' },
  { img: livro12, rating: '⭐⭐', review: 'Gostei não kkk' },
];

function Books() {
  return (
    <section id="books" className="books-section">
      <div className="container">
        <h2>Livros Lidos em 2024 📚</h2>
        <div className="book-grid">
          {books.map((book, index) => (
            <div key={index} className="book-item">
              <img src={book.img} alt={`Livro ${index + 1}`} />
              <strong>{book.rating}</strong>
              <p>{book.review}</p>
            </div>
          ))}
        </div>
        <div className="view-more">
          <p><a href="#intro">Ver mais livros</a></p>
        </div>
      </div>
    </section>
  );
}

export default Books;
