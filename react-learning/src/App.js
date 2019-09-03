// Use for Component Design
import React, { Component } from 'react';
// Use for Hook Design
// import React, { useState } from 'react';
// import logo from './logo.svg';
import './App.css';
import Person from './Person/Person';

// Using Component
// #region Component
class App extends Component {
  state = {
    persons: [
      { name: 'Max', age: 28 },
      { name: 'Matt', age: 21 },
      { name: 'Jooje', age: 21}
    ]
  }

  switchNameHandler = (newName) => {
    // console.log('Was clicked');
    // DON'T DO THIS: this.state.persons[0].name = 'Maxamilian';
    this.setState({
      persons: [
        { name: newName, age: 28 },
        { name: 'Matt', age: 21 },
        { name: 'Jooje', age: 21}
      ]
    })
  }

  nameChangeHandler = (event) => {
    this.setState({
      persons: [
        { name: 'Max', age: 28 },
        { name: event.target.value, age: 21 },
        { name: 'Jooje', age: 21}
      ]
    })
  }
  // For Switch Name button we return an anonymous function that gives the name.
  // We should use this.function.bind() instead, like on the Person.click property
  render() {

    // Inline CSS styles
    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    }
    return (
      <div className="App">
        <h1>Hi I'm a React App</h1>
        <p>This is working!</p>
        <button
          style = {style} 
          onClick = {() => this.switchNameHandler('Max Max')}>
            Switch Name
          </button>
        <Person 
          name={this.state.persons[0].name} 
          age={this.state.persons[0].age} />
        <Person 
          name={this.state.persons[1].name} 
          age={this.state.persons[1].age}
          click={this.switchNameHandler.bind(this, 'Max! Max!')}
          changed={this.nameChangeHandler}>My Hobbies: Racing</Person>
        <Person 
          name={this.state.persons[2].name} 
          age={this.state.persons[2].age} />
      </div>
    );
    //return React.createElement('div',{className: 'App'},React.createElement('h1',null,'I\'m a React App!'));
  }
}
// #endregion


// Using Hooks
// #region Hook
// const App = props => {
//  const [ personsState, setPersonsState ] = useState({
//       persons: [
//         { name: 'Max', age: 28 },
//         { name: 'Matt', age: 21 },
//         { name: 'Jooje', age: 21}
//       ]
//   });

//   const switchNameHandler = () => {
//     // console.log('Was clicked');
//       setPersonsState({
//         persons: [
//           { name: 'Maximilian', age: 28 },
//           { name: 'Matt', age: 21 },
//           { name: 'Jooje', age: 21}
//         ]
//       })
//     }

//     return (
//       <div className="App">
//         <h1>Hi I'm a React App</h1>
//         <p>This is working!</p>
//         <button onClick={switchNameHandler}>Switch Name</button>
//         <Person name={personsState.persons[0].name} age={personsState.persons[0].age} />
//         <Person name={personsState.persons[1].name} age={personsState.persons[1].age}>My Hobbies: Racing</Person>
//         <Person name={personsState.persons[2].name} age={personsState.persons[2].age} />
//       </div>
//     );
// }
// #endregion

export default App;
