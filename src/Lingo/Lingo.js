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

  componentWillMount() {
    let keys = this.shouldParse(this.isMeta(this.data));
    this.lingos = keys.map(item => this.parseData(item));
  }

  isMeta = data => {
    if (!data.meta) return;
    return data.meta;
  };

  shouldParse = data => {
    if (Array.isArray(data.smartContent) && !data.smartContent) return;
    return data.smartContent;
  };

  parseData = propName => {
    return this.data[propName];
  };

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
        {this.lingos.map((lingo, index) => (
          <div key={`lingos-${index}`}>
            {lingo.map((block, index) => (
              <div key={`lingo-${index}`}>
                {this.getBlockComponent(block, index)}
              </div>
            ))}
          </div>
        ))}
      </div>
    );
  }
}
