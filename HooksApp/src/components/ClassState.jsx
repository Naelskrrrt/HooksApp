import React, { Component } from "react";

export default class ClassState extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }
  render() {
    return (
      <div>
        <p>Class State: {this.state.count}</p>
        <button onClick={() => this.setState({ count: this.state.count + 1 })}>
          ADD 1
        </button>
      </div>
      
    );
  }
}
