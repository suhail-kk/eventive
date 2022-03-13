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
    id: "item",
    label: "Event",
    alignRight: false,
    type: "stack",
  },
  { id: "time", label: "Time", alignRight: false, type: "text" },
  { id: "gender", label: "Gender", alignRight: false, type: "text" },
  { id: "action", label: "Action", alignRight: false,type:"icon" },
];

const TABLE_DATA = [
  {
    id: "134",
    item: "mappilapatu",
    time: "45",
    gender: "Boys",
  },
  {
    id: "34",
    item: "story",
    time: "45",
    gender: "Girls",
  },
  {
    id: "343433ojnn",
    item: "story",
    time: "30",
    gender: "Girls",
  },
  {
    id: "eonkn2434",
    item: "poem making",
    time: "60",
    gender: "Boys",
  },
];

export default function SheduleList() {
  return (
    <Page title="EventsList">
      <Container>
        <Stack
          direction="row"
          alignItems="center"
          justifyContent="space-between"
          mb={5}
        >
          <Typography variant="h4" gutterBottom>
            Events List
          </Typography>
          <Button
            variant="contained"
            component={RouterLink}
            to="/app/events/add"
            startIcon={<AddIcon />}
          >
            Add Event
          </Button>
        </Stack>
        <DataTable TABLE_DATA={TABLE_DATA} TABLE_HEAD={TABLE_HEAD} />
      </Container>
    </Page>
  );
}
