import React, { Component } from 'react'
import { Link, Route } from 'react-router-dom'
import './App.css';
import Bookshelf from './components/bookshelf'
import SearchBooks from './components/searchBooks'
import { getAll, update } from './utils/BooksAPI'

class App extends Component {

  initShelfState = {
    currentlyReading: [],
    wantToRead: [],
    read: []
  }

  state = {
    shelf: this.initShelfState
  }

  categoriseBook(categories, book) {

    if (book.shelf === 'currentlyReading')
      categories.currentlyReading.push(book)
    else if (book.shelf === 'wantToRead')
      categories.wantToRead.push(book)
    else if (book.shelf === 'read')
      categories.read.push(book)

    return categories
  }

  onChangeBookshelf = (book, to_shelf) => {
    const from_shelf = book.shelf

    this.setState((state) => {
      state.shelf[from_shelf] = state.shelf[from_shelf].filter(b => b.id !== book.id)
      if (to_shelf !== 'none')
        state.shelf[to_shelf].push(book)

      return {state}
    })

    debugger
    update(book, to_shelf)
  }

  componentDidMount() {
    getAll().then((books) => {
      this.setState({ shelf: books.reduce(this.categoriseBook, this.initShelfState) })
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
                books={this.state.shelf.currentlyReading}
                onChangeBookshelf={this.onChangeBookshelf}
              />
              <Bookshelf
                title='Want to read'
                books={this.state.shelf.wantToRead}
                onChangeBookshelf={this.onChangeBookshelf}
              />
              <Bookshelf
                title='Read'
                books={this.state.shelf.read}
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
          <SearchBooks onChangeBookshelf={this.onChangeBookshelf} />
        )}>
        </Route>
      </div>
    );
  }
}

export default App;
