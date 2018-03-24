import React, { Component } from "react";

import Link from "./Link";
import Text from "./Text";
import Modal from "./Modal";
import NewLine from "./NewLine";

export default class Lingo extends Component {
  constructor(props) {
    super(props);
    this.data = this.props.data;
  }
  getBlockComponent(block) {
    switch (block.type) {
      case "modal":
        return <Modal {...block} />;

      case "newLine":
        return <NewLine />;

      case "link":
        return <Link {...block} />;

      default:
        return <Text {...block} />;
    }
  }

  render() {
    return (
      <div>
        {this.data.map((block, index) => (
          <div key={`lingo-${index}`}>
            {this.getBlockComponent(block, index)}
          </div>
        ))}
      </div>
    );
  }
}
