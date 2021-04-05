import React, { Component } from "react";
import { movieAPI, tvAPI } from "../../api";
import DetailPresenter from "./DetailPresenter";

export class DetailContainer extends Component {
  constructor(props) {
    super(props);
    const {
      location: { pathname },
    } = props;

    this.state = {
      result: null,
      error: null,
      loading: true,
      isMovie: pathname.includes("/movie/"),
    };
  }

  async componentDidMount() {
    const {
      match: {
        params: { id },
      },
      history: { push },
    } = this.props;

    const { isMovie } = this.state;

    if (isNaN(+id)) {
      return push("/");
    }

    let result = null;

    this.setState({ loading: true });
    try {
      if (isMovie) {
        const response = await movieAPI.movieDetailsById(+id);
        result = response.data;
      } else {
        const response = await tvAPI.TVDetailsById(+id);
        result = response.data;
      }
    } catch (error) {
      this.setState({ error: "failed to fetch movie data" });
    } finally {
      this.setState({ loading: false });
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
