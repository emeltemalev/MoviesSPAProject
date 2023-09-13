import React from "react";
import { Input } from "semantic-ui-react";

const SearchBox = ({ setActivePage, setSearch, search }) => {
  return (
    <Input
      placeholder={"Search"}
      name={"search"}
      type={"text"}
      value={search}
      size={"small"}
      icon="search"
      onChange={(e, { value }) => {
        setSearch(value);
        setActivePage(1);
      }}
    />
  );
};

export default SearchBox;
