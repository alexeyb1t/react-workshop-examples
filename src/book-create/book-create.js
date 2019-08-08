import React from 'react';
import {Component} from 'react';
import './book-create.css';

export class BookCreate extends Component {
  constructor(props) {
    super(props);

    this.state = {
      title: '',
      description: ''
    };
  }

  // Example 1: simplified
  onTitleChange = event => {
    this.setState({
      title: event.target.value
    });
  };

  // Example 2: more generic
  handleChange = fieldName => {
    return event => {
      this.setState({
        [fieldName]: event.target.value
      });
    };
  };

  onSave = () => {
    console.log(this.state);
  };

  render() {
    return (
      <div className='create-book'>
        <form>
          <h1 className='create-book__title'>Create Book</h1>

          <div className='field-container'>
            <input
              className='book-field'
              type="text"
              value={this.state.title}
              onChange={this.onTitleChange}/>
          </div>

          <div className='field-container'>
            <textarea
              className='book-field'
              rows={5}
              value={this.state.description}
              onChange={this.handleChange('description')}/>
          </div>

          <div className='field-container'>
            <button className='save-button' type='button' onClick={this.onSave}>Save</button>
          </div>
        </form>
      </div>
    );
  }
}
