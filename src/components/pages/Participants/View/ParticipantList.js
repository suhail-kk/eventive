import { Link as RouterLink } from "react-router-dom";
// material components
import { Stack, Container, Typography, Grid } from "@mui/material";

// page wrapper for dynamic meta tags
import Page from "../../../utils/Page";
import DataTable from "../../../utils/DataTable";
import SelectInput from "../../../utils/Inputs/SelectInput";

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
    <Page title="ParticipantsList">
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
          <Grid
          item container direction="row"
          alignItems="right"
          justifyContent="flex-end"
          spacing={2}
          >
          <Grid item>
            <SelectInput label="Year" name="year" />
            </Grid>
            <Grid item>
            <SelectInput label="department" name="department" fullWidth />
            </Grid>
          </Grid>
        </Stack>
        <DataTable TABLE_DATA={TABLE_DATA} TABLE_HEAD={TABLE_HEAD} />
      </Container>
    </Page>
  );
}
