import React, { Component } from "react";
import DetailPresenter from "./DetailPresenter";

export class DetailContainer extends Component {
  state = {
    result: null,
    error: null,
    loading: true,
  };

  async componentDidMount() {
    const {
      match: {
        params: { id },
      },
      history: { push },
    } = this.props;

    if (isNaN(+id)) {
      return push("/");
    }
  }

  render() {
    const { popular, error, loading } = this.state;

    return (
      <DetailPresenter popular={popular} error={error} loading={loading} />
    );
  }
}

export default DetailContainer;
