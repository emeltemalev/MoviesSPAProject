import React, { useEffect, useState } from "react";
import { Button, Image, Modal } from "semantic-ui-react";
import { searchMovieDetail } from "../api/apiCall";
import { Header } from "./Header";

const MovieDetailModal = ({ modalVisibility, closeModal, selectedMovie }) => {
  const [movieData, setMovieData] = useState(null);

  /*This function runs the API call that includes movie details.*/
  const getDetails = () => {
    searchMovieDetail(selectedMovie)
      .then((res) => {
        if (res?.data) {
          setMovieData(res?.data);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getDetails();
  }, [selectedMovie]);

  return (
    <Modal open={modalVisibility} onClose={() => closeModal()} size="small">
      <Modal.Header>
        <Header
          text={selectedMovie}
          size="xlarge"
          bold
          color={"text-primary-800"}
        />
      </Modal.Header>
      <Modal.Content image>
        <Image src={movieData?.Poster} rounded bordered />
        <Modal.Description>
          <div className={"flex flex-row items-center"}>
            <Header
              text={"Year"}
              size="medium"
              bold
              color={"text-primary-900"}
              w="w-36"
            />
            <Header
              text={movieData?.Year}
              size="small"
              bold
              color={"text-gray-800"}
            />
          </div>
          <div className={"flex flex-row items-center"}>
            <Header
              text={"Director"}
              size="medium"
              bold
              color={"text-primary-900"}
              w="w-36"
            />
            <Header
              text={movieData?.Director}
              size="small"
              bold
              color={"text-gray-800"}
            />
          </div>
          <div className={"flex flex-row items-center"}>
            <Header
              text={"Time"}
              size="medium"
              bold
              color={"text-primary-900"}
              w="w-36"
            />
            <Header
              text={movieData?.Runtime}
              size="small"
              bold
              color={"text-gray-800"}
            />
          </div>
          <div className={"flex flex-row items-center"}>
            <Header
              text={"IMDB Rating"}
              size="medium"
              bold
              color={"text-primary-900"}
              w="w-36"
            />
            <Header
              text={movieData?.imdbRating}
              size="small"
              bold
              color={"text-gray-800"}
            />
          </div>
          <div className={"flex flex-row items-center"}>
            <Header
              text={"IMDB Votes"}
              size="medium"
              bold
              color={"text-primary-900"}
              w="w-36"
            />
            <Header
              text={movieData?.imdbVotes}
              size="small"
              bold
              color={"text-gray-800"}
            />
          </div>

          <div className={"flex flex-row items-center"}>
            <Header
              text={"Genre"}
              size="medium"
              bold
              color={"text-primary-900"}
              w="w-36"
            />
            <Header
              text={movieData?.Genre}
              size="small"
              bold
              color={"text-gray-800"}
            />
          </div>
          <div className={"flex flex-row items-center"}>
            <Header
              text={"Writer"}
              size="medium"
              bold
              color={"text-primary-900"}
              w="w-36"
            />
            <Header
              text={movieData?.Writer}
              size="small"
              bold
              color={"text-gray-800"}
            />
          </div>
          <div className={"flex flex-row items-center"}>
            <Header
              text={"Actors"}
              size="medium"
              bold
              color={"text-primary-900"}
              w="w-36"
            />
            <Header
              text={movieData?.Actors}
              size="small"
              bold
              color={"text-gray-800"}
            />
          </div>
        </Modal.Description>
      </Modal.Content>
      <Modal.Actions>
        <Button color="violet" onClick={() => closeModal()}>
          Close
        </Button>
      </Modal.Actions>
    </Modal>
  );
};

export default MovieDetailModal;
