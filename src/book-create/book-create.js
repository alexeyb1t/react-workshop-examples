import React from 'react';
import {Component} from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import './book-create.css';

export class BookCreate extends Component {
  constructor(props) {
    super(props);

    this.state = {
      title: '',
      description: ''
    };
  }

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
            <TextField
              label="Title"
              value={this.state.title}
              fullWidth={true}
              onChange={this.handleChange('title')}
              margin="normal"
            />
          </div>

          <div className='field-container'>
            <TextField
              label="Description"
              fullWidth={true}
              value={this.state.description}
              rows={5}
              multiline
              onChange={this.handleChange('description')}
              margin="normal"
            />
          </div>

          <div className='field-container'>
            <Button onClick={this.onSave} color="primary" variant="contained">
              Save
            </Button>
          </div>
        </form>
      </div>
    );
  }
}
