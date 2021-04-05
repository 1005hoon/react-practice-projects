import React, { Component } from "react";
import DetailPresenter from "./DetailPresenter";

export class DetailContainer extends Component {
  state = {
    result: null,
    error: null,
    loading: true,
  };

  render() {
    const { popular, error, loading } = this.state;

    return <div></div>;
  }
}

export default DetailContainer;
