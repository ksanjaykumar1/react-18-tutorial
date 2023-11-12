const Book = ({ title, author, img, getBook, id }) => {
  return (
    <article className='book'>
      <img alt={title} src={img} />
      <h2>{title}</h2>
      <h4>{author}</h4>
      <button onClick={() => getBook(id)}>click me</button>
    </article>
  );
};

export default Book;
