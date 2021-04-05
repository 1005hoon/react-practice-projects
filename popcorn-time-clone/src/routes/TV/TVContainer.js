import React, { Component } from "react";
import TVPresenter from "./TVPresenter";

export class TVContainer extends Component {
  state = {
    nowPlaying: null,
    upcoming: null,
    popular: null,
    error: null,
    loading: true,
  };

  render() {
    const { nowPlaying, upcoming, popular, error, loading } = this.state;

    return <TVPresenter />;
  }
}

export default TVContainer;
