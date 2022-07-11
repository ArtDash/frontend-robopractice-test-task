import React from "react";

// Types
import { PreparedDays } from "../../types/users";

// Components
import { TableRow, TableCell } from "@mui/material";

type UserProps = {
  name: string;
  days: PreparedDays[];
  total: number;
};

export const UserRow: React.FC<UserProps> = ({ name, days, total }) => {
  const totalHours = ~~(total / 60);
  const totalMinutes = total % 60;

  return (
    <TableRow>
      <TableCell
        style={{
          position: "sticky",
          left: 0,
          background: "white",
          borderRight: "1px solid blue",
        }}
      >
        {name}
      </TableCell>

      {days.map((item) => {
        const hours = ~~(item.TimeSpent / 60);
        const minutes = item.TimeSpent % 60;

        return (
          <TableCell key={item.DayNumber}>
            {item.TimeSpent !== 0 ? `${hours}:${minutes}` : 0}
          </TableCell>
        );
      })}

      <TableCell
        style={{
          position: "sticky",
          right: 0,
          background: "white",
          borderLeft: "1px solid blue",
        }}
      >
        {totalHours}:{totalMinutes}
      </TableCell>
    </TableRow>
  );
};
