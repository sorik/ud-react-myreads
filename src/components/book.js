import React, { Component } from 'react'

class Book extends Component {
  render() {
    const { title, author, bgImage, bookShelf } = this.props

    return (
      <div className='book'>
        <div className='book-top'>
          <div className='book-cover' style={{ width: 128, height: 193, backgroundImage: bgImage }}></div>
        </div>
        <div className='book-title'>{title}</div>
        <div className='book-authors'>{author}</div>
      </div>
    )
  }
}

export default Book
