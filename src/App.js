import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import {Component} from 'react';
import './App.css';
import {BookListContainer} from './book-list/book-list';
import {AboutPage} from './about-page/about-page';
import {BookCreate} from './book-create/book-create';

class App extends Component {
  render() {
    return (
      <Router>
        <div className='links'>
          <Link to='/'>Home</Link>
          <Link to='/about'>About</Link>
          <Link to='/book-create'>Create Book</Link>
        </div>

        <div className="app">
          <Route exact path="/" component={BookListContainer}/>
          <Route path="/about" component={AboutPage}/>
          <Route path="/book-create" component={BookCreate}/>
        </div>
      </Router>
    );
  }
}

export default App;
