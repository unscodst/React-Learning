import React, { Component } from 'react';
import ValidationComponent from './ValidationComponent/ValidationComponent';
import CharComponent from './CharComponent/CharComponent';


class ListAndConditionals extends Component {
  state = {
    textCount: 0,
    characters: []
  }

  countTextHandler(event) {
    let textCount = event.target.value.length;
    // let lastChar = event.target.value.split('');
    // console.log('lastChar: ',lastChar[lastChar.length-1])

    const characters = event.target.value.split('');    

    this.setState({
      textCount: textCount,
      characters: characters
    })
  }

  removeCharHandler = (characterIndex) => {
    // console.log(characterIndex);
    const characters = [...this.state.characters];
    characters.splice(characterIndex, 1);
    let textCount = characters.length;
    this.setState({
      textCount: textCount,
      characters: characters
    })
  }

  render() {

    let characters = null;
    if(this.state.characters) {
      characters = (
        <div>
            {
              this.state.characters.map((character,index) => {
                return <CharComponent
                  click = {() => this.removeCharHandler(index)}
                  char = {character}
                />
              })
            }
        </div>
      )
    }

    return (
      <div className="App">
        <ol>
          <li>Create an input field (in App component) with a change listener which outputs the length of the entered text below it (e.g. in a paragraph).</li>
          <li>Create a new component (=> ValidationComponent) which receives the text length as a prop</li>
          <li>Inside the ValidationComponent, either output "Text too short" or "Text long enough" depending on the text length (e.g. take 5 as a minimum length)</li>
          <li>Create another component (=> CharComponent) and style it as an inline box (=> display: inline-block, padding: 16px, text-align: center, margin: 16px, border: 1px solid black).</li>
          <li>Render a list of CharComponents where each CharComponent receives a different letter of the entered text (in the initial input field) as a prop.</li>
          <li>When you click a CharComponent, it should be removed from the entered text.</li>
        </ol>
        <p>Hint: Keep in mind that JavaScript strings are basically arrays!</p>

        {characters}
        <input 
          type = "text"
          onChange = {(event) => this.countTextHandler(event)}
          value = {this.state.characters.join('')}
        ></input>

        <p>{this.state.textCount}</p>

        <ValidationComponent 
          textCount = {this.state.textCount}
        />

      </div>



    );
  }
}

export default ListAndConditionals;
