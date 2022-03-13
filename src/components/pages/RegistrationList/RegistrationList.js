import { Link as RouterLink } from "react-router-dom";
// material components
import { Stack, Container, Typography, Grid,Autocomplete,TextField } from "@mui/material";

// page wrapper for dynamic meta tags
import Page from "../../utils/Page";
import DataTable from "../../utils/DataTable";
import SelectInput from "../../utils/Inputs/SelectInput";

// table header cell config
const TABLE_HEAD = [
  {
    id: "name",
    label: "Participant Name",
    alignRight: false,
    type: "stack",
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

const top100Films = [
  { label: "The Shawshank Redemption", year: 1994 },
  { label: "The Godfather", year: 1972 },
  { label: "The Godfather: Part II", year: 1974 },
  { label: "The Dark Knight", year: 2008 },
  { label: "12 Angry Men", year: 1957 },
  { label: "Schindler's List", year: 1993 },
  { label: "Pulp Fiction", year: 1994 },
];

export default function RegistrationList() {
  return (
    <Page title="Participants Data">
      <Container>
        <Stack
          direction="row"
          alignItems="center"
          justifyContent="space-between"
          mb={5}
        >
          <Typography variant="h4" gutterBottom>
          Participants Data
          </Typography>
          <Autocomplete
                disablePortal
                options={top100Films}
                sx={{ width: 300 }}
                name="event"
                onChange={(event, value) => console.log(value)}
                style={{overflow:"overflow"}}
                // value={event}
                // error={errorMsg}
                renderInput={(params) => <TextField {...params} label="Select Event" />}
              />
        </Stack>
        <DataTable TABLE_DATA={TABLE_DATA} TABLE_HEAD={TABLE_HEAD} />
      </Container>
    </Page>
  );
}
