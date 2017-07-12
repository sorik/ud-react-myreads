import React, { Component } from 'react'

class Bookself extends Component {
  render() {
    return (
      <div>
        <div className='bookself'>
          <h2 className='bookself-title'>{this.props.title}</h2>
          <div className='bookself-books'>
            <ol>
            </ol>
          </div>
        </div>
      </div>
    )
  }
}

export default Bookself
