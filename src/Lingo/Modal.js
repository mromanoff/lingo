import React, { Component } from "react";
import lib from "./lib";

const styles = {
  link: {
    color: "darkblue",
    textDecoration: "underlined"
  },
  tooltip: {
    width: 300,
    padding: 5,
    border: "1px solid darkgray",
    position: "absolute",
    top: -90,
    left: 0,
    backgroundColor: "lightgray"
  }
};

class Modal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false
    };
  }

  handleClick = event => {
    event.preventDefault();
    this.setState({
      isOpen: !this.state.isOpen
    });
  };

  render() {
    return (
      <span style={{ position: "relative" }}>
        <a
          href={this.props.libKey}
          style={styles.link}
          onClick={event => this.handleClick(event)}
        >
          {this.props.text}
        </a>
        <span>🗯</span>
        <span style={{ display: this.state.isOpen ? "block" : "none" }}>
          <span style={styles.tooltip}>{lib[this.props.libKey]}</span>
        </span>
      </span>
    );
  }
}

export default Modal;
