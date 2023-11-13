const Book = ({ title, author, img, getBook, id, number }) => {
  return (
    <article className='book'>
      <img alt={title} src={img} />
      <h2>{title}</h2>
      <h4>{author}</h4>
      <button onClick={() => getBook(id)}>click me</button>
      <span className='number'>{`#${number + 1}`}</span>
    </article>
  );
};

export default Book;
