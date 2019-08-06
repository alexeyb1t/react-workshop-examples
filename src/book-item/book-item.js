import React from 'react';
import {Component} from 'react';
import './book-item.css';

export class BookItem extends Component {
  handleClick = (event) => {
    console.log('Event triggered', event);
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
            <button type='button' onClick={this.handleClick}>
              Click Me!
            </button>
          </div>
        </div>
      </div>
    );
  }
}
