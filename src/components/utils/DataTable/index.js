import { useState } from "react";
import { Link } from "react-router-dom";

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

//mui Icons
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";

// props type library
import PropTypes from "prop-types";

// custom components
import DataTableHead from "./DataTableHead";
import DataTableToolbar from "./DataTableToolbar";
import Scrollbar from "../Scrollbar";
import SearchNotFound from "./SearchNotFound";

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

DataTable.propTypes = {
  TABLE_HEAD: PropTypes.array,
  TABLE_DATA: PropTypes.array,
};
export default function DataTable({ TABLE_HEAD, TABLE_DATA, SEARCH_ID }) {
  const [page, setPage] = useState(0);
  const [order, setOrder] = useState("asc");
  const [selected, setSelected] = useState([]);
  const [orderBy, setOrderBy] = useState("name");
  const [filterName, setFilterName] = useState("");
  const [rowsPerPage, setRowsPerPage] = useState(5);

  const handleRequestSort = (event, property) => {
    const isAsc = orderBy === property && order === "asc";
    setOrder(isAsc ? "desc" : "asc");
    setOrderBy(property);
  };

  const handleSelectAllClick = (event) => {
    if (event.target.checked) {
      const newSelecteds = TABLE_DATA.map((n) => n.name);
      setSelected(newSelecteds);
      return;
    }
    setSelected([]);
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const handleFilterByName = (event) => {
    setFilterName(event.target.value);
  };

  const emptyRows =
    page > 0 ? Math.max(0, (1 + page) * rowsPerPage - TABLE_DATA.length) : 0;

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
      case "edit":
        return (
          <Stack
            direction="row"
            alignItems="center"
            sx={{ textDecoration: "none", color: "black" }}
            spacing={2}
          >
            <EditIcon color="disabled" />
          </Stack>
        );
      case "delete":
        return (
          <Stack
            direction="row"
            alignItems="center"
            sx={{ textDecoration: "none", color: "black" }}
            spacing={2}
          >
            <DeleteIcon color="disabled" />
          </Stack>
        );
      case "stack":
        return (
          <Stack
            direction="row"
            alignItems="center"
            sx={{ textDecoration: "none", color: "black" }}
            spacing={2}
            // component={Link}
            // to={`${col.baseUrl}/${value._id}`}
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
        numSelected={selected.length}
        filterName={filterName}
        onFilterName={handleFilterByName}
      />

      <Scrollbar>
        <TableContainer sx={{ minWidth: 800, padding: 2 }}>
          <Table>
            <DataTableHead
              order={order}
              orderBy={orderBy}
              headLabel={TABLE_HEAD}
              rowCount={TABLE_DATA.length}
              numSelected={selected.length}
              onRequestSort={handleRequestSort}
              onSelectAllClick={handleSelectAllClick}
            />
            <TableBody>
              {filteredUsers
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((row) => (
                  <TableRow hover key={row.id} tabIndex={-1} role="checkbox">
                    {TABLE_HEAD.map((col) => (
                      <TableCell align={row.align ? row.align : "left"}>
                        {getRowCell(col, row)}
                      </TableCell>
                    ))}
                  </TableRow>
                ))}
              {emptyRows > 0 && (
                <TableRow style={{ height: 53 * emptyRows }}>
                  <TableCell colSpan={6} />
                </TableRow>
              )}
            </TableBody>
            {isUserNotFound && (
              <TableBody>
                <TableRow>
                  <TableCell align="center" colSpan={6} sx={{ py: 3 }}>
                    <SearchNotFound searchQuery={filterName} />
                  </TableCell>
                </TableRow>
              </TableBody>
            )}
          </Table>
        </TableContainer>
      </Scrollbar>

      <TablePagination
        rowsPerPageOptions={[5, 10, 25]}
        component="div"
        count={TABLE_DATA.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Card>
  );
}
