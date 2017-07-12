import React, { Component } from 'react'
import { Link, Route } from 'react-router-dom'
import './App.css';
import Bookself from './components/bookself'
import SearchBooks from './components/searchBooks'

class App extends Component {
  render() {
    return (
      <div className='app'>
        <Route exact path='/' render={() => (
          <div className='list-books'>
            <div className='list-books-title'>
              <h1>MyReads</h1>
            </div>
            <div className='list-books-content'>
              <Bookself title='Currently reading'/>
              <Bookself title='Want to read'/>
              <Bookself title='Read'/>
            </div>
            <div>
              <div className='open-search'>
                <Link to='/search'>Add a book</Link>
              </div>
            </div>
          </div>
        )}>
        </Route>
        <Route path='/search' component={SearchBooks}></Route>
      </div>
    );
  }
}

export default App;
