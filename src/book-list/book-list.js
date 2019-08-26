import React from 'react';
import {Component} from 'react';
import {BookItem} from '../book-item/book-item';
import {connect} from 'react-redux';
import {fetchBooks} from "../store/actions/bookActions";
import {getBooksList, getBooksLoading} from "../store/selectors/bookSelectors";

class BookList extends Component {
  componentDidMount() {
    this.props.fetchBooks();
  }

  render() {
    const {booksList, isLoading} = this.props;

    return (
      <>
        {isLoading ? <span>Is Loading</span> : null}

        {booksList.map((book, index) => {
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

function mapStateToProps(state) {
  return {
    booksList: getBooksList(state),
    isLoading: getBooksLoading(state)
  };
}

function mapDispatchToProps(dispatch) {
  return {
    fetchBooks: function() {
      return dispatch(fetchBooks())
    }
  };
}

export const BookListContainer = connect(
  mapStateToProps, mapDispatchToProps
)(BookList);
