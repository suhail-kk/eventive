import { Link as RouterLink } from "react-router-dom";
// material components
import { Stack, Button, Container, Typography, Grid } from "@mui/material";


// page wrapper for dynamic meta tags
import DataTable from "../../utils/DataTable";

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
    id: "134doojon",
    dptname: "Bs cs",
    point: "123",
  },
  {
    id: "ounr34343",
    dptname: "Ba english",
    point: "424",
  },
  {
    id: "343433ojnn",
    dptname: "Bcom cop",
    point: "412",
  },
  {
    id: "eonkn2434",
    dptname: "Bsc microbiology",
    point: "523",
  },
];

export default function DptPointTable() {
  return (
      <Container>
      <Grid>
        <DataTable TABLE_DATA={TABLE_DATA} TABLE_HEAD={TABLE_HEAD} />
        </Grid>
      </Container>
  );
}
