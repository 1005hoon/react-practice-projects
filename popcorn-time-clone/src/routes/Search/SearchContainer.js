import React, { Component } from "react";
import TVPresenter from "./SearchPresenter";
import { movieAPI, tvAPI } from "../../api";

export class SearchContainer extends Component {
  state = {
    movieResults: null,
    TVResults: null,
    searchTerm: "",
    error: null,
    loading: true,
  };

  handleSubmit = () => {
    const { searchTerm } = this.state;
    if (searchTerm !== "") {
      this.searchByTerm();
    }
  };

  searchByTerm = async () => {
    const { searchTerm } = this.state;
    this.setState({ loading: true });

    try {
      const {
        data: { results: movieResults },
      } = await movieAPI.search(searchTerm);
      const {
        data: { results: tvResults },
      } = await tvAPI.search(searchTerm);

      this.setState({ movieResults, tvResults });
    } catch (error) {
      this.setState({ error: "cannot find results" });
    } finally {
      this.setState({ loading: false });
    }
  };

  render() {
    const { movieResults, TVResults, searchTerm, error, loading } = this.state;

    return <TVPresenter />;
  }
}

export default SearchContainer;
