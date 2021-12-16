import BookList from './views/Books/BookList';
import './App.css';
import { BrowserRouter, Route, NavLink, Switch } from 'react-router-dom';
import BookDetail from './views/Books/BookDetail';

function App() {
  // TODO: Add routes to books & views
  return (
    <main className="container">
      <BrowserRouter>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/books">Books</NavLink>
        <Switch>
          <Route path="/books/:id" component={BookDetail}></Route>
          <Route path="/books">
            <BookList />
          </Route>
          <Route path="/">
            <h1>Library Catalog</h1>
          </Route>
        </Switch>
      </BrowserRouter>
    </main>
  );
}

export default App;
