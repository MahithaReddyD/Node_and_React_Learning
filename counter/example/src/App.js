import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Button from './Button';
import Counter from './Counter';
import Textbox from './Textbox';
class App extends Component {
  constructor() {
    super();
    this.state = {
      count: 0
    }
  }
  handleClick = () => {
    console.log("clicked");
    this.setState({ count: this.state.count + 1 });

  }
  update = () => {
    this.setState({ count: this.state.count - 1 });
  }
  render() {
    return (
      <div className="App">
        <Counter count={this.state.count} />
        <Button clickButton={this.handleClick} />
        <Button clickButton={this.update} />
        <Textbox />
      </div>
    );
  }

}
export default App;