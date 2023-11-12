import React from 'react';
import ReactDOM from 'react-dom/client';

import './index.css';

const books = [
  {
    title: 'The Stranger',
    author: 'Albert Camus',
    img: 'https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1590930002i/49552.jpg',
    id: 1,
  },
  {
    title: 'Crime and Punishment ',
    author: 'Fyodor Dostoevsky',
    img: 'https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1382846449i/7144.jpg',
    id: 2,
  },
];
const BookList = () => {
  const getBook = (id) => {
    const book = books.find((b) => b.id === id);
    console.log(book);
  };
  return (
    <section className='booklist'>
      {books.map((book) => (
        <Book {...book} key={book.id} getBook={getBook} />
      ))}
    </section>
  );
};
const Book = ({ title, author, img, getBook, id }) => {
  return (
    <article className='book'>
      <img alt={title} src={img} />
      <h2>{title}</h2>
      <h4>{author}</h4>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perspiciatis
        quaerat reprehenderit minima facere, eos officia omnis, sapiente sed
        neque eligendi, nulla ea illum saepe distinctio aspernatur soluta.
        Molestiae, ipsa voluptatibus.
      </p>
      <button onClick={() => getBook(id)}>click me</button>
    </article>
  );
};

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<BookList />);
