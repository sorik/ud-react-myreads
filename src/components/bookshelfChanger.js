import React, { Component } from 'react'
import PropTypes from 'prop-types'

class BookshelfChanger extends Component {
  static propTypes = {
    currentBookshelf: PropTypes.string.isRequired,
    onChangeBookshelf: PropTypes.func.isRequired
  }

  onChange(selected) {
    this.props.onChangeBookshelf(selected.target.value)
  }

  render() {
    console.log(this.props.currentBookshelf)
    return (
      <div className="book-shelf-changer">
        <select
          value={this.props.currentBookshelf}
          onChange={(selected) => (this.props.onChangeBookshelf(selected.target.value))}>
          <option value="none" disabled>Move to...</option>
          <option value="currentlyReading" selected>Currently Reading</option>
          <option value="wantToRead">Want to Read</option>
          <option value="read">Read</option>
          <option value="none">None</option>
        </select>
      </div>
    )
  }
}

export default BookshelfChanger
