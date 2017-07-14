import React, { Component } from 'react'
import Book from './book'

class Bookshelf extends Component {
  render() {
    return (
      <div>
        <div className='bookself'>
          <h2 className='bookself-title'>{this.props.title}</h2>
          <div className='bookself-books'>
            <ol className='books-grid'>
              {this.props.books.map((book) => (
                <li key={book.id}>
                  <Book
                    title={book.title}
                    authors={book.authors}
                    bgImage={`url(${book.imageLinks.thumbnail})`}/></li>
              ))}
            </ol>
          </div>
        </div>
      </div>
    )
  }
}

export default Bookshelf