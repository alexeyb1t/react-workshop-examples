import React from 'react';
import {Component} from 'react';
import {BookItem} from '../book-item/book-item';

export class BookList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      books: []
    };
  }

  apiUrl = 'http://localhost:8000/books';

  componentDidMount() {
    fetch(this.apiUrl, {
      headers: {
        'Content-Type': 'application/json'
      },
      method: 'GET'
    })
      .then(response => {
        return response.json();
      })
      .then(books => {
        this.setState({
          books: books
        });
      })
      .catch(error => console.error(error));
  }

  render() {
    return (
      <>
        {this.state.books
          ? this.state.books.map((book, index) => {
            return (
              <BookItem
                key={index}
                image={book.image}
                title={book.title}
                text={book.text}
              />
            );
          })
          : null
        }
      </>
    );
  }
}
