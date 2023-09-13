import React, { useCallback, useEffect, useState } from "react";
import { Pagination } from "semantic-ui-react";
import MovieList from "./MovieList";
import MovieListHeader from "./MovieListHeader";
import SearchBox from "./SearchBox";
import { searchMovies } from "../api/apiCall";
import { debounce } from "lodash";

const MainPage = () => {
  
  const [search, setSearch] = useState("pokemon");
  const [movies, setMovies] = useState([]);
  const [activePage, setActivePage] = useState(1);
  const [totalPage, setTotalPage] = useState(1);

  /*This function runs the API call that searches the database with the input value.*/
  const getInfo = () => {
    searchMovies(search, activePage)
      .then((res) => {
        if (res?.data?.Search) {
          setMovies(res?.data?.Search);
          setTotalPage(Math.ceil(res?.data?.totalResults / 10));
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handlePaginationChange = (e, { activePage }) =>
    setActivePage(activePage);

  const debounceSearch = useCallback(
    debounce(() => getInfo(search), 500),
    [search]
  );

  useEffect(() => {
    if (search !== "" && search.length > 0) debounceSearch();
    else setMovies([]);
    return debounceSearch.cancel;
  }, [search]);

  useEffect(() => {
    getInfo();
  }, [activePage]);

  return (
    <>
      <div className="flex h-screen flex-col overflow-hidden">
        <div className="flex justify-between p-5  bg-primary-800">
          <MovieListHeader header={"The Open Movie Database"} />
          <SearchBox
            setActivePage={setActivePage}
            search={search}
            setSearch={setSearch}
          ></SearchBox>
        </div>
        <MovieList movies={movies}></MovieList>
        <div className="flex justify-center p-3">
          <Pagination
            activePage={activePage}
            onPageChange={handlePaginationChange}
            totalPages={totalPage}
          />
        </div>
      </div>
    </>
  );
};
export default MainPage;
