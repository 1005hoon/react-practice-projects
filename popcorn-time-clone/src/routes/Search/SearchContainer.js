import React, { Component } from "react";
import TVPresenter from "./SearchPresenter";

export class SearchContainer extends Component {
  state = {
    movieResults: null,
    TVResults: null,
    searchTerm: "",
    error: null,
    loading: true,
  };

  render() {
    const { movieResults, TVResults, searchTerm, error, loading } = this.state;

    return <TVPresenter />;
  }
}

export default SearchContainer;
