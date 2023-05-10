import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import { useState } from 'react';

interface Column {
  id: string;
  label: string;
  minWidth?: number;
  align?: 'right';
  format?: (value: number) => string;
}

const columns: readonly Column[] = [
  { id: 'userNumber', label: '회원 번호', minWidth: 170 },
  { id: 'userEmail', label: '회원 이메일', minWidth: 200 },
  { id: 'userNickname', label: '회원 닉네임', minWidth: 200 },
];

interface Data {
    userNumber: number;
    userEmail: string;
    userNickname: string;
}

const rows: Data[] = [
    {
		userNumber:1,
		userEmail: "userEmail@email.com",
		userNickname: "쏘오오유"
    },{
		userNumber:1,
		userEmail: "userEmail@email.com",
		userNickname: "쏘오오유"
    },{
		userNumber:1,
		userEmail: "userEmail@email.com",
		userNickname: "쏘오오유"
    },{
		userNumber:1,
		userEmail: "userEmail@email.com",
		userNickname: "쏘오오유"
    },{
		userNumber:1,
		userEmail: "userEmail@email.com",
		userNickname: "쏘오오유"
    },{
		userNumber:1,
		userEmail: "userEmail@email.com",
		userNickname: "쏘오오유"
    },{
		userNumber:1,
		userEmail: "userEmail@email.com",
		userNickname: "쏘오오유"
    },{
		userNumber:1,
		userEmail: "userEmail@email.com",
		userNickname: "쏘오오유"
    },{
		userNumber:1,
		userEmail: "userEmail@email.com",
		userNickname: "쏘오오유"
    },{
		userNumber:1,
		userEmail: "userEmail@email.com",
		userNickname: "쏘오오유"
    },{
		userNumber:1,
		userEmail: "userEmail@email.com",
		userNickname: "쏘오오유"
    },{
		userNumber:1,
		userEmail: "userEmail@email.com",
		userNickname: "쏘오오유"
    },{
		userNumber:1,
		userEmail: "userEmail@email.com",
		userNickname: "쏘오오유"
    },{
		userNumber:1,
		userEmail: "userEmail@email.com",
		userNickname: "쏘오오유"
    },{
		userNumber:1,
		userEmail: "userEmail@email.com",
		userNickname: "쏘오오유"
    },{
		userNumber:1,
		userEmail: "userEmail@email.com",
		userNickname: "쏘오오유"
    },
];

export default function AdminUserListView() {
  const [page, setPage] = useState<number>(0);
  const [rowsPerPage, setRowsPerPage] = useState<number>(10);

  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <Paper sx={{ width: '100%', flex: 1 }}>
      <TableContainer>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  align={column.align}
                  style={{ minWidth: column.minWidth }}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row) => {
                return (
                  <TableRow hover role="checkbox" tabIndex={-1} key={row.userNumber}>
                    <TableCell key='userNumber'>{row.userNumber}</TableCell>
                    <TableCell key='userEmail'>{row.userEmail}</TableCell>
                    <TableCell key='userNickname'>{row.userNickname}</TableCell>
                  </TableRow>
                );
              })}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[10]}
        component="div"
        count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper>
  )
}
