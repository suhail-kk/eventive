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
    id: "event",
    label: "Event",
    alignRight: false,
    type: "stack",
    baseUrl: "/app/student/view",
  },
  { id: "date", label: "Date", alignRight: false, type: "text" },
  { id: "time", label: "Time", alignRight: false, type: "text" },
  { id: "place", label: "Place", alignRight: false, type: "text" },
  { id: "action", label: "Action", alignRight: false,type:"icon" },
];

const TABLE_DATA = [
  {
    id: "134doojon",
    event: "mappilapatu",
    date:"15-oct-2019",
    time: "12:00",
    place: "avt",
  },
  {
    id: "ounr34343",
    event: "Noof",
    date:"15-oct-2019",
    time: "12:00",
    place: "seminar hall",
  },
  {
    id: "343433ojnn",
    event: "story",
    date:"15-oct-2019",
    time: "2:00",
    place: "bsc ",
  },
  {
    id: "eonkn2434",
    event: "poem making",
    date:"15-oct-2019",
    time: "1:00",
    place: "bsc cs",
  },
];

export default function SheduleList() {
  return (
    <Page title="SheduleList">
      <Container>
        <Stack
          direction="row"
          alignevents="center"
          justifyContent="space-between"
          mb={5}
        >
          <Typography variant="h4" gutterBottom>
            Shedule List
          </Typography>
          <Button
            variant="contained"
            component={RouterLink}
            to="/app/shedule/add"
            startIcon={<AddIcon />}
          >
             Shedule
          </Button>
        </Stack>
        <DataTable TABLE_DATA={TABLE_DATA} TABLE_HEAD={TABLE_HEAD} />
      </Container>
    </Page>
  );
}
