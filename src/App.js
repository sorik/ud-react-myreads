import React, { Component } from 'react'
import { Link, Route } from 'react-router-dom'
import './App.css';
import Bookshelf from './components/bookshelf'
import SearchBooks from './components/searchBooks'
import { getAll } from './utils/BooksAPI'

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
              />
              <Bookshelf
                title='Want to read'
                books={this.state.shelf.wantToRead}
              />
              <Bookshelf
                title='Read'
                books={this.state.shelf.read}/>
            </div>
            <div>
              <div className='open-search'>
                <Link to='/search'>Add a book</Link>
              </div>
            </div>
          </div>
        )}>
        </Route>
        <Route path='/search' component={SearchBooks}></Route>
      </div>
    );
  }
}

export default App;
