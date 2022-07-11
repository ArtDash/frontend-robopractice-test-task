import React from "react";

// Components
import { TableRow, TableCell } from "@mui/material";
import { daysHandler } from "../../utils/daysHandler";

type UserProps = {
  name: string;
  days: any;
};

export const UserRow: React.FC<UserProps> = ({ name, days }) => {
  const newDays = daysHandler(days);

  return (
    <TableRow>
      <TableCell>{name}</TableCell>

      {newDays.map((item) => {
        const hours = ~~(item.TimeSpent / 60);
        const minutes = item.TimeSpent % 60;

        return (
          <TableCell key={item.DayNumber}>
            {item.TimeSpent !== 0 ? `${hours}:${minutes}` : 0}
          </TableCell>
        );
      })}

      <TableCell>0</TableCell>
    </TableRow>
  );
};
