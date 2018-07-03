import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class Components extends React.Component {

  constructor(props={name: 'ivan', age: 24}) {
    super(props);
    this.state = {
    }
  }
  componentWillMount() {
    console.log("实例化：componentWillMount")
  }
  componentDidMount() {
    console.log("实例化：componentDidMount")
  }
  componentWillReceiveProps() {
    console.log("存在期：componentWillReceiveProps")
  }
  shouldComponentUpdate(nextProps, nextState) {
    console.log("存在期：shouldComponentUpdate", nextProps, nextState)
    return true;
  }
  componentWillUpdate() {
    console.log("存在期：componentWillUpdate")
  }
  componentDidUpdate() {
    console.log("存在期：componentDidUpdate")
  }
  render() {
    if (!this.props.reRender) {
      console.log("实例化：render")
    } else {
      console.log("存在期：render")
    }
    return (
      <div>
        <span key={this.props.count}>
            {this.props.count}
        </span>;
        <br />
        请查看下面的console
        <br />
      </div>
    )

  }
}
Components.defaultProps = {
  count: 0,
}
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    }
  }
  refresh() {
    return (e) => {
      this.setState({
        reRender: true,
        count: this.state.count+1
      })
    }
  }
  render() {
    return (
      <div>
        <Components reRender={this.state.reRender} count={this.state.count}/>
        <button onClick={this.refresh()}>
          更新Component
        </button>
      </div>
    )
  }
}


export default App;
