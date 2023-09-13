import React, { useState } from "react";
import { Grid, Image, ImageGroup } from "semantic-ui-react";
import { Header } from "./Header";
import MovieDetailModal from "./MovieDetailModal";

const MovieList = ({ movies }) => {
  const [modalVisibility, setModalVisibility] = useState(false);
  const [selectedMovie, setSelectedMovie] = useState(null);

  return (
    <>
      <div className="flex flex-grow overflow-y-auto overflow-x-hidden pt-5">
        <Grid columns={4}>
          {movies?.length > 0 &&
            movies.map((movie) => {
              return (
                <Grid.Column key={movie.imdbID}>
                  <div className="bg-gray-50">
                    <div
                      className="-pt-2"
                      onClick={() => {
                        setModalVisibility(true);
                        setSelectedMovie(movie.Title);
                      }}
                    >
                      <Header
                        text={movie.Title}
                        size="xlarge"
                        bold
                        color={"text-primary-800"}
                      />
                    </div>
                    <div className="flex justify-center pt-2">
                      <ImageGroup size="small">
                        <Image src={movie.Poster} rounded bordered />
                      </ImageGroup>
                    </div>
                    <div className="-pt-2">
                      <Header
                        text={`${movie.Year} - ${movie.imdbID}`}
                        size="medium"
                        bold
                        color={"text-primary-900"}
                      />
                    </div>
                  </div>
                </Grid.Column>
              );
            })}
        </Grid>
      </div>

      {modalVisibility && (
        <MovieDetailModal
          modalVisibility
          closeModal={() => setModalVisibility(false)}
          selectedMovie={selectedMovie}
        />
      )}
    </>
  );
};

export default MovieList;
