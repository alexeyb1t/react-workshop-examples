import React from 'react';
import {Component} from 'react';

export class AboutPage extends Component {
  componentDidMount() {
    console.log(this.props);
  }

  render() {
    return (
      <div>
        About page
      </div>
    );
  }
}
