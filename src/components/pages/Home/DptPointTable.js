import { Link as RouterLink } from "react-router-dom";
// material components
import { Stack, Button, Container, Typography, Grid } from "@mui/material";


// page wrapper for dynamic meta tags
import DptDataTable from "./DptDataTable";

// table header cell config
const TABLE_HEAD = [
  {
    id: "dptname",
    label: "Departments",
    alignRight: false,
    type: "stack",
  },
  { id: "point", label: "Point", alignRight: false, type: "text" },
];

const TABLE_DATA = [
  {
    id: "ba",
    dptname: "BA",
    point: "123",
  },
  {
    id: "bcom",
    dptname: "BCOM",
    point: "424",
  },
  {
    id: "bsc",
    dptname: "BSC",
    point: "412",
  },
  {
    id: "bba",
    dptname: "BBA",
    point: "523",
  },
  {
    id: "bvoc",
    dptname: "BVOC",
    point: "523",
  },
];

export default function DptPointTable() {
  return (
      <Container>
      <Grid>
        <DptDataTable TABLE_DATA={TABLE_DATA} TABLE_HEAD={TABLE_HEAD} />
        </Grid>
      </Container>
  );
}
