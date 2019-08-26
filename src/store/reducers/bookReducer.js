import {FETCH_BOOKS_ERROR, FETCH_BOOKS_STARTED, FETCH_BOOKS_SUCCESS} from "../actions/bookActions";

export const booksInitialState = {
  booksList: [],
  isLoading: false
};

export function bookReducer(state = booksInitialState, action) {
  switch (action.type) {
    case FETCH_BOOKS_STARTED:
      return {...state, isLoading: true};
    case FETCH_BOOKS_SUCCESS:
      return {...state, isLoading: false, booksList: action.payload};
    case FETCH_BOOKS_ERROR:
      return {...state, isLoading: false, error: action.payload};
    default:
      return state;
  }
}
