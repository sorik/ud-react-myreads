import React, { Component } from 'react'
import { Link, Route } from 'react-router-dom'
import './App.css';
import Bookshelf from './components/bookshelf'
import SearchBooks from './components/searchBooks'
import { getAll, update } from './utils/BooksAPI'

class App extends Component {

  state = {
    books: []
  }

  onChangeBookshelf = (book, to_shelf) => {
    if (book.shelf !== to_shelf) {
      update(book, to_shelf).then(() => {
        book.shelf = to_shelf
        this.setState(state => ({
          books: state.books.filter(b => b.id !== book.id).concat([book])
        }))
      })
    }
  }

  componentDidMount() {
    getAll().then((books) => {
      this.setState({ books })
    })
  }

  render() {
    return (
      <div className='app'>
        <Route exact path='/' render={() => (
          <div className='list-books'>
            <div className='list-books-title'>
              <h1>MyReads</h1>
            </div>
            <div className='list-books-content'>
              <Bookshelf
                title='Currently reading'
                books={this.state.books.filter(book => book.shelf === 'currentlyReading')}
                onChangeBookshelf={this.onChangeBookshelf}
              />
              <Bookshelf
                title='Want to read'
                books={this.state.books.filter(book => book.shelf === 'wantToRead')}
                onChangeBookshelf={this.onChangeBookshelf}
              />
              <Bookshelf
                title='Read'
                books={this.state.books.filter(book => book.shelf === 'read')}
                onChangeBookshelf={this.onChangeBookshelf}
              />
            </div>
            <div>
              <div className='open-search'>
                <Link to='/search'>Add a book</Link>
              </div>
            </div>
          </div>
        )}>
        </Route>
        <Route path='/search' render={() => (
          <SearchBooks
            onChangeBookshelf={this.onChangeBookshelf}
            bookshelves={this.state.books} />
        )}>
        </Route>
      </div>
    );
  }
}

export default App;
