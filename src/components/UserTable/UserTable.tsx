import React from "react";

// Effector
import { $preparedUsers } from "../../models/users";
import { useStore } from "effector-react";

// Components
import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TablePagination,
  TableRow,
} from "@mui/material";
import { UserRow } from "../UserRow/UserRow";

export const UserTable: React.FC = () => {
  const monthDays = Array.from({ length: 31 }, (_, i) => i + 1);
  const users = useStore($preparedUsers);
  const usersLength = users ? users.length : 0;

  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <Paper>
      <TableContainer sx={{ maxHeight: 500 }}>
        <Table stickyHeader>
          <TableHead>
            <TableRow>
              <TableCell>User</TableCell>
              {monthDays.map((day) => (
                <TableCell key={day}>{day}</TableCell>
              ))}
              <TableCell>Monthly Total</TableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            {users
              ?.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((user) => (
                <UserRow
                  key={user.id}
                  name={user.Fullname}
                  days={user.newDays}
                  total={user.totalTimeSpent}
                />
              ))}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        count={usersLength}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper>
  );
};
