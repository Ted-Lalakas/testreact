import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {

state = {
  questions: [
    { question1: 'Is this a JOTE form', answer1: true, answer2: false },
    { question2: 'Should I move to the next question?', answer1: true, answer2: false },
    { question3: 'End of form', answer1: true, answer2: false }
  ],
  testingVar: "default text",
  errorMessage: false
}

updateInput1 = (event) => {
  // console.log('Was clicked!');
  const matches = event.target.value.match(/\d+/g);
  if (matches !== null) {
    this.setState( {
      errorMessage: true,
      testingVar: ""
    })
  } else {
    this.setState( {
      errorMessage: false,
      testingVar: event.target.value
    })
  }
}

render() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <content>
        <div className="input1-wrapper">
          <label className="title">This is a test form (no numbers allowed)</label>

          {this.state.errorMessage ? 
          (
          <div className="error-message">NO numbers allowed in this form!</div>
          ) : null }

          <input type="text" value={this.state.testingVar} onChange={this.updateInput1} />
        </div>
      </content>
      <p className="content-value">Content Entered: <span>{this.state.testingVar}</span></p>
    </div>
  );
 }
}

export default App;