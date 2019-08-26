import {bookReducer} from "./bookReducer";
import {fetchBooksStarted, fetchBooksSuccess} from "../actions/bookActions";

const booksList = [{
  id: 1,
  image: "/images/godfather.jpg",
  price: 100,
  text: "text",
  title: "Godfather",
  type: "hardcover"
}];

describe('Book reducer', () => {
  describe('FETCH_BOOKS_STARTED', () => {
    it('should set the loading flag', () => {
      const action = fetchBooksStarted();
      const initialState = {
        booksList: [],
        isLoading: false
      };
      const expectedState = {
        booksList: [],
        isLoading: true
      };
      const newState = bookReducer(initialState, action);

      expect(newState).toEqual(expectedState);
    });
  });

  describe('FETCH_BOOKS_SUCCESS', () => {
    it('should set the books', () => {
      const action = fetchBooksSuccess(booksList);
      const initialState = {
        booksList: [],
        isLoading: false
      };
      const expectedState = {
        booksList: booksList,
        isLoading: false
      };
      const newState = bookReducer(initialState, action);

      expect(newState).toEqual(expectedState);
    });
  });
});
