import React from "react";

// Effector
import { useStore } from "effector-react";
import { $search, searchTerm } from "../../models/users";

// Components
import { TextField } from "@mui/material";

export const SearchBar: React.FC = () => {
  const search = useStore($search);

  const handleSearch = (event: any) => {
    searchTerm(event.target.value);
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
