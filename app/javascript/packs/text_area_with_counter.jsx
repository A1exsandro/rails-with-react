import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class TextAreaWithCounter extends Component {
  render() {
    return (
      <textarea 
        name="posts[content]" 
        cols="80" 
        rows="10"
      >
        
      </textarea>
    );
  }
}

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <TextAreaWithCounter />,
    document.querySelector('.text-area-with-counter')
  )
});

