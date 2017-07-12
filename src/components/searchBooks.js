import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class SearchBooks extends Component {
  render() {
    return (
      <div className='search-books'>
        <div className='search-books-bar'>
          <div className='close-search-bar'>
            <Link to='/' className='close-search'>Close</Link>
          </div>
        </div>
      </div>
    )
  }
}

export default SearchBooks
