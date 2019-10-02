import React, { Component } from 'react';
import UserInput from './UserInput/UserInput';
import UserOutput from './UserOutput/UserOutput';
import './BaseSyntax.css';

class BaseSyntax extends Component {
  state = {
    outputs: [
      { 
        username: 'Matt',
        paragraphs: [
          {paragraph: 'Paragraph One'},
          {paragraph: 'Paragraph Two'}
        ]
      },
      { 
        username: 'Jooje',
        paragraphs: [
          {paragraph: 'Paragraph Three'},
          {paragraph: 'Paragraph Four'}
        ]
      }
    ]
  }
  usernameChangeHandler = (event) => {
    this.setState({
      outputs: [
        { 
          username: event.target.value,
          paragraphs: [
            {paragraph: 'Paragraph One'},
            {paragraph: 'Paragraph Two'}
          ]
        },
        { 
          username: event.target.value,
          paragraphs: [
            {paragraph: 'Paragraph Three'},
            {paragraph: 'Paragraph Four'}
          ]
        }
      ]
    })
  }
  render() {
    return (
      <div className="BaseSyntax">
        <ol>
          <li>Create TWO new components: UserInput and UserOutput</li>
          <li>UserInput should hold an input element, UserOutput two paragraphs</li>
          <li>Output multiple UserOutput components in the App component (any paragraph texts of your choice)</li>
          <li>Pass a username (of your choice) to UserOutput via props and display it there</li>
          <li>Add state to the App component (=> the username) and pass the username to the UserOutput component</li>
          <li>Add a method to manipulate the state (=> an event-handler method)</li>
          <li>Pass the event-handler method reference to the UserInput component and bind it to the input-change event</li>
          <li>Ensure that the new input entered by the user overwrites the old username passed to UserOutput</li>
          <li>Add two-way-binding to your input (in UserInput) to also display the starting username</li>
          <li>Add styling of your choice to your components/ elements in the components - both with inline styles and stylesheets</li>
        </ol>
        <div id='user-input-output'>
          <UserInput
            username = {this.state.outputs[0].username}
            changed = {this.usernameChangeHandler}
          />
          <UserOutput 
            username = {this.state.outputs[0].username}
            userOutputOne = {this.state.outputs[0].paragraphs[0].paragraph} 
            userOutputTwo = {this.state.outputs[0].paragraphs[1].paragraph}
            />
          <UserOutput
            username = {this.state.outputs[1].username} 
            userOutputOne = {this.state.outputs[1].paragraphs[0].paragraph} 
            userOutputTwo = {this.state.outputs[1].paragraphs[1].paragraph}
            />
          </div>
      </div>
    );
  }
}

export default BaseSyntax;
