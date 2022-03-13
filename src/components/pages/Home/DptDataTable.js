import { useState } from "react";
// import { Link } from "react-router-dom";

// material UI components
import {
  Card,
  Chip,
  Table,
  Stack,
  Avatar,
  TableRow,
  TableBody,
  TableCell,
  Typography,
  TableContainer,
  TablePagination,
} from "@mui/material";

// props type library
import PropTypes from "prop-types";

// custom components
import DataTableHead from "../../utils/DataTable/DataTableHead";
import DataTableToolbar from "../../utils/DataTable/DataTableToolbar";


function descendingComparator(a, b, orderBy) {
  if (b[orderBy] < a[orderBy]) {
    return -1;
  }
  if (b[orderBy] > a[orderBy]) {
    return 1;
  }
  return 0;
}

function getComparator(order, orderBy) {
  return order === "desc"
    ? (a, b) => descendingComparator(a, b, orderBy)
    : (a, b) => -descendingComparator(a, b, orderBy);
}

function applySortFilter(array, cols, comparator, query) {
  const stabilizedThis = array.map((el, index) => [el, index]);
  stabilizedThis.sort((a, b) => {
    const order = comparator(a[0], b[0]);
    if (order !== 0) return order;
    return a[1] - b[1];
  });
  if (query) {
    return array.filter((row) =>
      cols.find(
        (col) => row[col.id].toLowerCase().indexOf(query.toLowerCase()) !== -1
      )
    );
  }
  return stabilizedThis.map((el) => el[0]);
}

DptDataTable.propTypes = {
  TABLE_HEAD: PropTypes.array,
  TABLE_DATA: PropTypes.array,
};
export default function DptDataTable({ TABLE_HEAD, TABLE_DATA, SEARCH_ID }) {
  const [order, setOrder] = useState("asc");
  const [orderBy, setOrderBy] = useState("name");
  const [filterName, setFilterName] = useState("");

  const handleRequestSort = (event, property) => {
    const isAsc = orderBy === property && order === "asc";
    setOrder(isAsc ? "desc" : "asc");
    setOrderBy(property);
  };


  const filteredUsers = applySortFilter(
    TABLE_DATA,
    TABLE_HEAD,
    getComparator(order, orderBy),
    filterName
  );

  const isUserNotFound = filteredUsers.length === 0;

  const getRowCell = (col, value) => {
    const type = col.type;
    switch (type) {
      case "text":
        return value[col.id];
      case "stack":
        return (
          <Stack
            direction="row"
            alignItems="center"
            sx={{textDecoration:"none",color:"black"}}
            spacing={2}
          >
            <Avatar alt={value[col.id]} src={"#"} />
            <Typography variant="subtitle2" noWrap>
              {value[col.id]}
            </Typography>
          </Stack>
        );
      default:
        return null;
    }
  };
  return (
    <Card>
      <DataTableToolbar
      />

        <TableContainer sx={{ minWidth: 800, padding: 2 }}>
          <Table>
            <DataTableHead
              order={order}
              orderBy={orderBy}
              headLabel={TABLE_HEAD}
              onRequestSort={handleRequestSort}
            />
            <TableBody>
              {filteredUsers
                .map((row) => (
                  <TableRow hover key={row.id} tabIndex={-1} role="checkbox">
                    {TABLE_HEAD.map((col) => (
                      <TableCell align={row.align ? row.align : "left"}>
                        {getRowCell(col, row)}
                      </TableCell>
                    ))}
                  </TableRow>
                ))}
            </TableBody>
            {isUserNotFound && (
              <TableBody>
                <TableRow>
                  <TableCell align="center" colSpan={6} sx={{ py: 3 }}>
                  </TableCell>
                </TableRow>
              </TableBody>
            )}
          </Table>
        </TableContainer>
    </Card>
  );
}
