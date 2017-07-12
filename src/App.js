import React, { Component } from 'react';
import './App.css';
import Bookself from './components/bookself'

class App extends Component {
  render() {
    return (
      <div className='app'>
        <div className='list-books'>
          <div className='list-books-title'>
            <h1>MyReads</h1>
          </div>
          <div className='list-books-content'>
            <Bookself title='Currently reading'/>
            <Bookself title='Want to read'/>
            <Bookself title='Read'/>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
