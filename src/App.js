import React from 'react';
import {Component} from 'react';
import './App.css';
import {BookList} from './book-list/book-list';

class App extends Component {
  render() {
    return (
      <div className="app">
        <BookList/>
      </div>
    );
  }
}

export default App;
