import React from "react";

// Effector
import { $users } from "../../models/users";
import { useStore } from "effector-react";

// Components
import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import { UserRow } from "../UserRow/UserRow";

export const UserTable: React.FC = () => {
  const monthDays = Array.from({ length: 31 }, (_, i) => i + 1);
  const users = useStore($users);

  return (
    <TableContainer component={Paper} sx={{ maxHeight: 500 }}>
      <Table stickyHeader>
        <TableHead>
          <TableRow>
            <TableCell>User</TableCell>
            {monthDays.map((day) => (
              <TableCell key={day}>{day}</TableCell>
            ))}
            <TableCell>Monthly</TableCell>
          </TableRow>
        </TableHead>

        <TableBody>
          {users?.map((user) => (
            <UserRow key={user.id} name={user.Fullname} days={user.Days} />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};
