import React from 'react';
import {Component} from 'react';
import './book-item.css';

export class BookItem extends Component {
  bookTypes = {
    hardcover: 'hardcover',
    ebook: 'ebook'
  };

  constructor(props) {
    super(props);

    this.state = {
      bookType: this.bookTypes.hardcover
    };
  }

  setHardcoverType = () => {
    this.setState({
      bookType: this.bookTypes.hardcover
    });
  };

  setEbookType = () => {
    this.setState({
      bookType: this.bookTypes.ebook
    });
  };

  render() {
    return (
      <div className='book-item'>
        <img className='book-image' src={this.props.image} alt=""/>

        <div className='book-item__content'>
          <h1 className='book-item__title'>{this.props.title}</h1>
          <p className='book-item__text'>
            {this.props.text}
          </p>

          <div className='controls'>
            <button
              type='button'
              className={this.state.bookType === this.bookTypes.hardcover ? 'active-button' : ''}
              onClick={this.setHardcoverType}>
              Hardcover
            </button>

            <button
              type='button'
              className={this.state.bookType === this.bookTypes.ebook ? 'active-button' : ''}
              onClick={this.setEbookType}>
              E-book
            </button>
          </div>
        </div>
      </div>
    );
  }
}
