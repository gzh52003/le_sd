import React from 'react';
import logo from './logo.svg';
import './App.css';
import { withRouter } from 'react-router-dom';

// @withRouter

class App extends React.Component {
  state = {
    num: 10
  }
  changeNumber = () => {
    this.setState({
      num: this.state.num + 1
    })
  }
  render() {
    console.log('App.props', this.props);
    return (
      <div className='App'>
        叼你嗨啊 <br />
        SEVEN HEAD<br />
        {this.state.num}<br />
        <button onClick={this.changeNumber}>叼多一次</button>
      </div>
    );
  }
}

export default App;
