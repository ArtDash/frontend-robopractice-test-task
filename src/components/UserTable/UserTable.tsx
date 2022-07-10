import React from "react";

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

export const UserTable: React.FC = () => {
  const monthDays = Array.from({ length: 31 }, (_, i) => i + 1);

  return (
    <TableContainer component={Paper}>
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
        <TableBody>kek</TableBody>
      </Table>
    </TableContainer>
  );
};
