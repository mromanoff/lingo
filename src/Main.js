import React, { Component } from "react";
import data from "./data";
import Lingo from "./Lingo";

// 1. will fetch data.
// 2. HOC will deside if we need to use Lingo

export default class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: null,
      isLoading: true
    };
  }

  componentWillMount() {
    this.setState({
      data: data,
      isLoading: false
    });
  }

  render() {
    if (this.isLoading) {
      return <h3>Loading...</h3>;
    }

    return (
      <div>
        <h1>{data.title}</h1>
        <h2>{data.subTitle}</h2>
        <Lingo data={data} />
      </div>
    );
  }
}
