import React, { Component } from "react";
import HomePresenter from "./HomePresenter";

import { movieAPI } from "../../api";
export class HomeContainer extends Component {
  state = {
    nowPlaying: null,
    upcoming: null,
    popular: null,
    error: null,
    loading: true,
  };
  async componentDidMount() {
    try {
      const {
        data: { results: nowPlaying },
      } = await movieAPI.nowPlaying();

      const {
        data: { result: upComing },
      } = await movieAPI.upComing();

      const {
        data: { result: popular },
      } = await movieAPI.popular();

      this.setState({
        nowPlaying,
        upComing,
        popular,
      });
    } catch (error) {
      this.setState({ error: "failed to fetch movie data" });
    } finally {
      this.setState({ loading: false });
    }
  }

  render() {
    const { nowPlaying, upcoming, popular, error, loading } = this.state;

    return (
      <HomePresenter
        nowPlaying={nowPlaying}
        upcoming={upcoming}
        popular={popular}
        error={error}
        loading={loading}
      />
    );
  }
}

export default HomeContainer;
