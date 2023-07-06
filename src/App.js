import './App.css';
import Counter from './components/counter';
import Total from './components/total';

import React, { Component } from 'react'
class App extends Component {
  state = {
    count: 0
  }
  incrementHandler = () => {
    this.setState(prevState => ({ count: prevState.count + 1 }));
  };
  decrementHandler = () => {
    this.setState(prevState => ({ count: prevState.count > 0 ? prevState.count - 1 : 0 }))
  }
  render() {
    // const { count } = this.state;

    return (
      <div className="App">
        <header className="App-header">
          <Total>
            {/* Another Attempt <Counter
              count={count}
              incrementHandler={this.incrementHandler}
              decrementHandler={this.decrementHandler} 
            /> */}
            <Counter /> 
            <Counter /> 
            <Counter /> 
            <Counter /> 
          </Total>
        </header>
      </div>
    )
  }
}

export default App;