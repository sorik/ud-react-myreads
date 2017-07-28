import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Book from './book'
import { Link } from 'react-router-dom'
import { search } from '../utils/BooksAPI'

class SearchBooks extends Component {

  static propTypes = {
    bookshelves: PropTypes.object.isRequired,
    onChangeBookshelf: PropTypes.func.isRequired
  }

  state = {
    books: []
  }

  isTheSameBook = (bookA, bookB) => {
    return bookA.id === bookB.id
  }

  findBook = (books, book) => {
    return books.filter((b) => this.isTheSameBook(b, book))
  }

  setBookshelf = (book) => {
    let bookInShelf
    const { bookshelves } = this.props

    Object.keys(bookshelves).forEach((key) => {
      bookInShelf = this.findBook(bookshelves[key], book)

      if (bookInShelf.length > 0)
        book.shelf = bookInShelf[0].shelf
    })

    return book
  }

  onSearch = (event) => {
    if (event.key === 'Enter')
      search(event.target.value, 20).then(books => {
        if (Array.isArray(books)) {
          let updatedBooks = books.map((book) => this.setBookshelf(book))
          this.setState({ books: updatedBooks })
        }
      })
  }

  render() {
    return (
      <div className='search-books'>
        <div className='search-books-bar'>
          <Link to='/' className='close-search'>Close</Link>
          <div className='search-books-input-wrapper'>
            <input
              type='text'
              placeholder='Search by title or author'
              onKeyDown={this.onSearch}
            />
          </div>
        </div>
        <div className="search-books-results">
              <ol className="books-grid">
                {this.state.books.map((book) => (
                  <li key={book.id}>
                    <Book
                      onChangeBookshelf={(newShelf) => (this.props.onChangeBookshelf(book, newShelf))}
                      bookshelf={book.shelf}
                      title={book.title}
                      authors={book.authors}
                      bgImage={`url(${book.imageLinks.thumbnail})`}/>
                  </li>
                ))}
              </ol>
            </div>
      </div>
    )
  }
}

export default SearchBooks
