import React, { useEffect } from "react";

// Effector
import { fetchUsersFx } from "../../models/users";

// Styles
import Styles from "./Main.module.css";

// Components
import { UserTable } from "../UserTable/UserTable";

export const Main: React.FC = () => {
  useEffect(() => {
    fetchUsersFx();
  }, []);

  return (
    <div className={Styles.wrapper}>
      <div>SearchBar</div>

      <UserTable />
    </div>
  );
};
