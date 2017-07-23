import React, { Component } from 'react'
import PropTypes from 'prop-types'

class BookshelfChanger extends Component {
  static propTypes = {
    currentBookshelf: PropTypes.string.isRequired,
    onChangeBookshelf: PropTypes.func.isRequired
  }

  state = {
    currentBookshelf: 'none'
  }

  onChange = (event) => {
    this.setState({ currentBookshelf: event.target.value })
    this.props.onChangeBookshelf(event.target.value)
  }

  componentDidMount() {
    this.setState({ currentBookshelf: this.props.currentBookshelf })
  }

  render() {
    return (
      <div className="book-shelf-changer">
        <select
          value={this.state.currentBookshelf}
          onChange={this.onChange}>
          <option value="none" disabled>Move to...</option>
          <option value="currentlyReading">Currently Reading</option>
          <option value="wantToRead">Want to Read</option>
          <option value="read">Read</option>
          <option value="none">None</option>
        </select>
      </div>
    )
  }
}

export default BookshelfChanger
