import React, { Component } from 'react'
import PropTypes from 'prop-types'
import BookshelfChanger from './bookshelfChanger'

class Book extends Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
    authors: PropTypes.array.isRequired,
    bgImage: PropTypes.string.isRequired,
  }

  render() {
    const { title, authors, bgImage, bookshelf } = this.props

    return (
      <div className='book'>
        <div className='book-top'>
          <div className='book-cover' style={{ width: 128, height: 193, backgroundImage: bgImage }}></div>
          <BookshelfChanger currentBookshelf={bookshelf}/>
        </div>
        <div className='book-title'>{title}</div>
        {authors.map(author => (
          <div className='book-authors' key={author}>{author}</div>
        ))}
      </div>
    )
  }
}

export default Book
