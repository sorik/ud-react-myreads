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

  addToBookshelf = (bookshelf, book, to_shelf) => {
    book.shelf = to_shelf
    bookshelf.push(book)
    return bookshelf
  }

  removeFromBookshelf = (bookshelf, book) => {
    return bookshelf.filter(b => book.id !== b.id)
  }

  moveToBookshelf = (bookshelf, book, to_shelf) => {
    return bookshelf.map(b => {
      if (b.id === book.id)
        b.shelf = to_shelf
      return b
    })
  }

  onChangeBookshelf = (book, to_shelf) => {
    const from_shelf = book.shelf
    let updated

    this.setState((state) => {
      if (from_shelf === 'none' || from_shelf === undefined)
        updated = this.addToBookshelf(state.books, book, to_shelf)
      else if (to_shelf === 'none')
        updated = this.removeFromBookshelf(state.books, book)
      else
        updated = this.moveToBookshelf(state.books, book, to_shelf)

      return { books: updated }
    })

    update(book, to_shelf)
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
