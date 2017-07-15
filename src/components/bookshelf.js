import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Book from './book'

class Bookshelf extends Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
    books: PropTypes.array,
    onChangeBookshelf: PropTypes.func
  }

  render() {
    const { title, books, onChangeBookshelf } = this.props

    return (
      <div>
        <div className='bookself'>
          <h2 className='bookself-title'>{title}</h2>
          <div className='bookself-books'>
            <ol className='books-grid'>
              {books.map((book) => (
                <li key={book.id}>
                  <Book
                    bookshelf={book.shelf}
                    onChangeBookshelf={(newShelf) => (onChangeBookshelf(book, newShelf))}
                    title={book.title}
                    authors={book.authors}
                    bgImage={`url(${book.imageLinks.thumbnail})`}/>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </div>
    )
  }
}

export default Bookshelf
