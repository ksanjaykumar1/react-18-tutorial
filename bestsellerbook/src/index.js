import React from 'react';
import ReactDOM from 'react-dom/client';

import './index.css';

const firstBook = {
  title: 'The Stranger',
  author: 'Albert Camus',
  img: 'https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1590930002i/49552.jpg',
};
const secondBook = {
  title: 'Crime and Punishment ',
  author: 'Fyodor Dostoevsky',
  img: 'https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1382846449i/7144.jpg',
};
const BookList = () => {
  return (
    <section className='booklist'>
      <Book
        author={firstBook.author}
        title={firstBook.title}
        img={firstBook.img}
      />
      <Book
        author={secondBook.author}
        title={secondBook.title}
        img={secondBook.img}
      />
    </section>
  );
};
const Book = ({ title, author, img }) => {
  return (
    <article className='book'>
      <img alt={title} src={img} />
      <h2>{title}</h2>
      <h4>{ author}</h4>
    </article>
  );
};

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<BookList />);
