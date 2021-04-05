import React, { Component } from "react";
import TVPresenter from "./TVPresenter";

import { tvAPI } from "../../api";

export class TVContainer extends Component {
  state = {
    airing: null,
    topRated: null,
    popular: null,
    error: null,
    loading: true,
  };

  async componentDidMount() {
    try {
      const {
        data: { results: popular },
      } = await tvAPI.popular();
      const {
        data: { results: topRated },
      } = await tvAPI.topRated();
      const {
        data: { results: airing },
      } = await tvAPI.airing();
      this.setState({ popular, topRated, airing });
    } catch (error) {
      this.setState({
        error: "cannot find TV information",
      });
    } finally {
      this.setState({ loading: false });
    }
  }

  render() {
    const { popular, topRated, airing, error, loading } = this.state;
    console.log(this.state);
    return (
      <TVPresenter
        popular={popular}
        topRated={topRated}
        airing={airing}
        error={error}
        loading={loading}
      />
    );
  }
}

export default TVContainer;
