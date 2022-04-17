import React, { Component } from "react";
import ProTypes from "prop-types";
import styles from "./Movie.css";

class Movie extends Component {
  render() {
    const { id, title, year, genres, summary, medium_cover_image } = this.props;

    return (
      <div className="movie">
        <img
          className="img"
          src={medium_cover_image}
          alt={title}
          title={title}
        />
        <div>
          <h3 className="movie__title">{title}</h3>
          <h5 className="movie__year">{year}</h5>
          <ul className="movie__genres">
            {genres && genres.map((data, index) => <li key={index}>{data}</li>)}
          </ul>
          <p>{summary.slice(0, 100)} ...</p>
        </div>
      </div>
    );
  }
}

export default Movie;

Movie.proTypes = {
  id: ProTypes.number.isRequired,
  title: ProTypes.string.isRequired,
  year: ProTypes.number.isRequired,
  genres: ProTypes.array.isRequired,
  summary: ProTypes.string.isRequired,
  medium_cover_image: ProTypes.string.isRequired,
};
