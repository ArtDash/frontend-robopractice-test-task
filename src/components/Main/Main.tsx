import React, { useEffect } from "react";

// Effector
import { fetchUsersFx } from "../../models/users";

// Styles
import Styles from "./Main.module.css";

// Components
import { UserTable } from "../UserTable/UserTable";
import { SearchBar } from "../SearchBar/SearchBar";

export const Main: React.FC = () => {
  useEffect(() => {
    fetchUsersFx();
  }, []);

  return (
    <div className={Styles.wrapper}>
      <SearchBar />
      <UserTable />
    </div>
  );
};
