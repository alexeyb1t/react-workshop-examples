import React from 'react';
import {Component} from 'react';
import './App.css';
import {BookItem} from './book-item/book-item';

class App extends Component {
  book = {
    image: '/images/godfather.jpg',
    title: 'Godfather',
    text: `With its brilliant and brutal portrayal of the Corleone family,
      The Godfather burned its way into our national consciousness.
      This unforgettable saga of crime and corruption, passion and loyalty continues to
      stand the test of time, as the definitive novel of the Mafia underworld.\n`
  };

  render() {
    return (
      <div className="app">
        <BookItem
          image={this.book.image}
          title={this.book.title}
          text={this.book.text}
        />
      </div>
    );
  }
}

export default App;
