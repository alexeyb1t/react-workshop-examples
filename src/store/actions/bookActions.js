export const FETCH_BOOKS_STARTED = '[Books] FETCH_BOOKS_STARTED';
export const FETCH_BOOKS_SUCCESS = '[Books] FETCH_BOOKS_SUCCESS';
export const FETCH_BOOKS_ERROR = '[Books] FETCH_BOOKS_ERROR';

const apiUrl = 'https://gd-react-workshop.herokuapp.com/get-books';

export function fetchBooks() {
  return function(dispatch) {
    dispatch(fetchBooksStarted());

    fetch(apiUrl)
      .then(response => response.json())
      .then(booksResponse => dispatch(fetchBooksSuccess(booksResponse.books)))
      .catch(error => dispatch(fetchBooksError(error)));
  }
}

export function fetchBooksStarted() {
  return {
    type: FETCH_BOOKS_STARTED
  };
}

export function fetchBooksSuccess(booksList) {
  return {
    type: FETCH_BOOKS_SUCCESS,
    payload: booksList
  };
}

export function fetchBooksError(error) {
  return {
    type: FETCH_BOOKS_ERROR,
    payload: error
  };
}
