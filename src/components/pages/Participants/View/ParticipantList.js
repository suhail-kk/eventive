import { Link as RouterLink } from "react-router-dom";
// material components
import { Stack, Button, Container, Typography } from "@mui/material";

// material icons
import AddIcon from "@mui/icons-material/Add";
// page wrapper for dynamic meta tags
import Page from "../../../utils/Page";
import DataTable from "../../../utils/DataTable";

// table header cell config
const TABLE_HEAD = [
  {
    id: "name",
    label: "Participant Name",
    alignRight: false,
    type: "stack",
    baseUrl: "/app/student/view",
  },
  { id: "department", label: "Department", alignRight: false, type: "text" },
  { id: "year", label: "Year", alignRight: false, type: "text" },
];

const TABLE_DATA = [
  {
    id: "134doojon",
    name: "suhail",
    department: "cs",
    year: "2021",
  },
  {
    id: "ounr34343",
    name: "minshad",
    department: "micro",
    year: "2019",
  },
  {
    id: "343433ojnn",
    name: "salman",
    department: "biotech",
    year: "2020",
  },
  {
    id: "eonkn2434",
    name: "nihal",
    department: "eng",
    year: "2021",
  },
];

export default function SheduleList() {
  return (
    <Page title="StudentsList">
      <Container>
        <Stack
          direction="row"
          alignItems="center"
          justifyContent="space-between"
          mb={5}
        >
          <Typography variant="h4" gutterBottom>
            Participant List
          </Typography>
        </Stack>
        <DataTable TABLE_DATA={TABLE_DATA} TABLE_HEAD={TABLE_HEAD} />
      </Container>
    </Page>
  );
}
