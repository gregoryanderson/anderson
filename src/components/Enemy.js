import React, { Component } from "react";
import './Game.css'


class Enemy extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div
        className="enemy"
        style={{ top: this.props.top, left: this.props.left }}
      ></div>
    );
  }
}

export default Enemy;
