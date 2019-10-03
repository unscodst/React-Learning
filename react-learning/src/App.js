// Use for Component Design
import React, { Component } from 'react';
// Use for Hook Design
// import React, { useState } from 'react';
// import logo from './logo.svg';
import classes from './App.css';
// import Radium, { StyleRoot } from 'radium';
import Person from './Person/Person';
import ErrorBoundary from './ErrorBoundary/ErrorBoundary';


// Using Component
// #region Component
class App extends Component {
  state = {
    persons: [
      { id: 0, name: 'Max', age: 28 },
      { id: 1, name: 'Matt', age: 21 },
      { id: 2, name: 'Jooje', age: 21}
    ],
    showPersons: false
  }

  // switchNameHandler = (newName) => {
  //   // console.log('Was clicked');
  //   // DON'T DO THIS: this.state.persons[0].name = 'Maxamilian';
  //   this.setState({
  //     persons: [
  //       { name: newName, age: 28 },
  //       { name: 'Matt', age: 21 },
  //       { name: 'Jooje', age: 21}
  //     ]     
  //   })
  // }

  nameChangeHandler = (event, id) => {
    // Get the index of the person we want to change based on the id
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });

    // Make a copy of the person we want to edit from this.state.persons
    const person = {
      ...this.state.persons[personIndex]
    };

    // Edit the persons name with the passes in name from the event.
    person.name = event.target.value;

    // Make a copy of this.state.persons
    const persons = [...this.state.persons];

    // Update the copied state with the edited person data
    persons[personIndex] = person;

    this.setState({ persons: persons})
  }

  deletePersonHandler = (personIndex) => {
    // const persons = this.state.persons.slice();
    const persons = [...this.state.persons]
    persons.splice(personIndex, 1);
    this.setState({persons: persons});
  }

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({showPersons: !doesShow})
  }
  // For Switch Name button we return an anonymous function that gives the name.
  // We should use this.function.bind() instead, like on the Person.click property
  render() {

    // Inline CSS styles
    // const style = {
    //   backgroundColor: 'green',
    //   color: 'white',
    //   font: 'inherit',
    //   border: '1px solid blue',
    //   padding: '8px',
    //   cursor: 'pointer',
    //   // ':hover': {
    //   //   backgroundColor: 'lightgreen',
    //   //   color: 'black'
    //   // }
    // }

    let persons = null;
    let btnClass = '';

    if(this.state.showPersons) {
      persons = (
        <div>
          {
            this.state.persons.map((person, index) => {
            return <ErrorBoundary key = {person.id}><Person
              click = {() => this.deletePersonHandler(index)}             
              name = {person.name}
              age = { person.age}
              changed = {(event) => this.nameChangeHandler(event, person.id)}
              
              // click={this.switchNameHandler.bind(this, 'Max! Max!')}
              
            /></ErrorBoundary>
            })
          }
        </div>
      );
      btnClass = classes.red;
      // style.backgroundColor = 'red';
      // style[':hover'] = {
      //   backgroundColor: 'salmon',
      //   color: 'black'
      // }
    }

    let assignedClasses = [];
    if(this.state.persons.length <= 2) assignedClasses.push(classes.red);
    if(this.state.persons.length <= 1) assignedClasses.push(classes.bold);


    return (
        <div className = {classes.App}>
          <h1>Hi I'm a React App</h1>
          <p className = {assignedClasses.join(' ')}>This is working!</p>
          <button
          className = {btnClass}
            onClick = {this.togglePersonsHandler}>
              Toggle Person
            </button>
            { persons }
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
