import React from 'react';
import ReactDOM from 'react-dom/client';

import './index.css';
import { books } from './books';
import Book from './Book';

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

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<BookList />);
