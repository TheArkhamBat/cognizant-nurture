function BookDetails() {
  const books = [
    { id: 1, title: 'The Great Gatsby', author: 'F. Scott Fitzgerald' },
    { id: 2, title: 'To Kill a Mockingbird', author: 'Harper Lee' }
  ];

  return (
    <div style={{ padding: '20px', border: '1px solid #ccc' }}>
      <h3>Book Details</h3>
      {books.map(book => (
        <div key={book.id} style={{ margin: '10px 0' }}>
          <p><strong>{book.title}</strong> by {book.author}</p>
        </div>
      ))}
    </div>
  );
}

export default BookDetails;
