import React, { Component } from 'react'

class Book extends Component {
  render() {
    const { title, authors, bgImage, bookShelf } = this.props

    return (
      <div className='book'>
        <div className='book-top'>
          <div className='book-cover' style={{ width: 128, height: 193, backgroundImage: bgImage }}></div>
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
