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

  apiUrl = 'https://gd-react-workshop.herokuapp.com/get-books';

  componentDidMount() {
    fetch(this.apiUrl)
      .then(response => {
        return response.json();
      })
      .then(booksResponse => {
        this.setState({
          books: booksResponse.books
        });
      })
      .catch(error => console.error(error));
  }

  render() {
    return (
      <>
        {this.state.books.map((book, index) => {
          return (
            <BookItem
              key={index}
              image={book.image}
              title={book.title}
              text={book.text}
            />
          );
        })}
      </>
    );
  }
}
