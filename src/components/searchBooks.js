import React, { Component } from 'react'
import Book from './book'
import { Link } from 'react-router-dom'
import { search } from '../utils/BooksAPI'

class SearchBooks extends Component {
  state = {
    books: []
  }

  componentDidMount() {

  }

  onSearch = (event) => {
    if (event.key === 'Enter')
      search(event.target.value, 20).then(books => {
        if (Array.isArray(books))
          this.setState({ books })
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
