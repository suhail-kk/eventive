import { Link as RouterLink } from "react-router-dom";
// material components
import { Stack, Button, Container, Typography, Grid } from "@mui/material";

// material icons
import AddIcon from "@mui/icons-material/Add";
// page wrapper for dynamic meta tags
import Page from "../../../utils/Page";
import DataTable from "../../../utils/DataTable";

// table header cell config
const TABLE_HEAD = [
  {
    id: "item",
    label: "Item",
    alignRight: false,
    type: "stack",
    baseUrl: "/app/student/view",
  },
  { id: "first", label: "First", alignRight: false, type: "text" },
  { id: "second", label: "Second", alignRight: false, type: "text" },
  { id: "third", label: "Third", alignRight: false, type: "text" },
];

const TABLE_DATA = [
  {
    id: "134doojon",
    item: "story",
    first: "123",
    second: "332",
    third: "313",
  },
  {
    id: "ounr34343",
    item: "poem making",
    first: "424",
    second: "524",
    third: "234",
  },
  {
    id: "343433ojnn",
    item: "essay",
    first: "412",
    second: "533",
    third: "244",
  },
  {
    id: "eonkn2434",
    item: "mappilapattu",
    first: "523",
    second: "423",
    third: "532",
  },
];

export default function MarkView() {
  return (
    <Page title="Marks">
      <Container>
        <Stack
          direction="row"
          alignItems="center"
          justifyContent="space-between"
          mb={5}
        >
          <Typography variant="h4" gutterBottom>
            Finalized Results
          </Typography>
          <Grid
           item container direction="row"
          alignItems="right"
          justifyContent="flex-end"
          spacing={2}
          >
         
            <Grid item>
              <Button
                variant="contained"
                component={RouterLink}
                to="/app/markentry/finalize"
              >
                Finalize
              </Button>
            </Grid>
            <Grid item>
              <Button
                variant="contained"
                component={RouterLink}
                to="/app/markentry/add"
                startIcon={<AddIcon />}
              >
                Add Mark
              </Button>
            </Grid>
            
          </Grid>
        </Stack>
        <DataTable TABLE_DATA={TABLE_DATA} TABLE_HEAD={TABLE_HEAD} />
      </Container>
    </Page>
  );
}
