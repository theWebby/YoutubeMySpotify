import React from 'react';
import logo from './logo.svg';
import './App.css';

class App extends React.Component {
  constructor(){
    super()
    this.state = { 
      isTrue: true
    };

    this.someFunction()
  }

  someFunction = () => {
    this.setState({isTrue: !this.state.isTrue})
    setTimeout(this.someFunction, 500);
  }
  
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            {this.state.isTrue ? 'Working...' : ' '} 
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
          </a>
        </header>
      </div>
    )
  };
}

export default App;
