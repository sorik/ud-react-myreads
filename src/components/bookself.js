import React, { Component } from 'react'
import Book from './book'

class Bookself extends Component {
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
                    author={book.authors[0]}
                    bgImage={`url(${book.imageLinks.thumbnail})`}/></li>
              ))}
            </ol>
          </div>
        </div>
      </div>
    )
  }
}

export default Bookself
