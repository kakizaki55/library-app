import { useEffect, useState } from 'react';
import Book from '../../components/book/Book';
import { getBooks } from '../../services/books';
import { BrowserRouter, Link, Switch, Route } from 'react-router-dom';

function BookList() {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const { data } = await getBooks();
      setBooks(data);
      setLoading(false);
    };
    fetchData();
  }, []);

  if (loading) return <h1>Loading books...</h1>;

  return (
    <>
      <h1>Welcome to the books page</h1>
      <ul className="book-list" aria-label="book list">
        {books.map((book) => (
          <li key={book.book_id}>
            <Link key={book.book_id} to={`/books/${book.book_id}`} p>
              <Book book={book} />
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
}

export default BookList;
