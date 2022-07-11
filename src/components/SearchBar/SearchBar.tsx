import React, { SyntheticEvent, useState } from "react";

// Components
import { TextField } from "@mui/material";
import { searchTerm } from "../../models/users";

export const SearchBar: React.FC = () => {
  const [search, setSearch] = useState("");

  const handleSearch = (event: any) => {
    setSearch(event.currentTarget.value);
    searchTerm(search);
  };

  return (
    <div>
      <TextField
        id="standard-basic"
        label="Поиск"
        variant="standard"
        onChange={handleSearch}
        value={search}
      />
    </div>
  );
};
