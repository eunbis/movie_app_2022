import React, { Component } from "react";
import Router from "react-dom";
import axios from "axios";
import Movie from "./Movie";
import styles from "./App.css";

class App extends Component {
  state = {
    isLoading: true,
    movies: [],
  };

  getMovieData = async () => {
    const {
      data: {
        data: { movies },
      },
    } = await axios.get(
      "https://yts.mx/api/v2/list_movies.json?sort_by=rating"
    );

    this.setState({ isLoading: false, movies });
  };

  componentDidMount() {
    this.getMovieData();
  }

  render() {
    const { isLoading, movies } = this.state;

    return (
      // <Router basename="./movie_app_2022">
      <body>
        <section className="container">
          {isLoading ? (
            <div>
              <span className="loader">Loading...</span>
            </div>
          ) : (
            <div className="movies">
              {movies.map((data) => {
                return (
                  <Movie
                    key={data.id}
                    id={data.id}
                    title={data.title}
                    year={data.year}
                    summary={data.summary}
                    medium_cover_image={data.medium_cover_image}
                  />
                );
              })}
            </div>
          )}
        </section>
      </body>
      //</Router>
    );
  }
}

export default App;
