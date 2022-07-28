import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class TextAreaWithCounter extends Component {
  state = {
    content: '',
    statusColor: ''
  }

  handleContentChange = (e) => {
    this.setState({content: e.target.value.slice(0,this.props.limit)});
  }
  render() {
    return (
      <>
        <div>
          <textarea 
            name="posts[content]" 
            cols="80" 
            rows="10"
            value={this.state.content}
            onChange={this.handleContentChange}
          >  
          </textarea>
        </div>

        <small>Total de caracteres: {this.state.content.length}/{this.props.limit}</small>
      </>
    );
  }
}

document.addEventListener('DOMContentLoaded', () => {
  const element = document.querySelector('.text-area-with-counter');

  ReactDOM.render(
    <TextAreaWithCounter limit={element.dataset.limit} />,
    element  
  )
});

