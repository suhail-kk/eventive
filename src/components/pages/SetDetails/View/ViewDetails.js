import { Link as RouterLink } from "react-router-dom";
// material components
import { Stack, Button, Container, Typography, Grid } from "@mui/material";

// material icons
import AddIcon from "@mui/icons-material/Add";
// page wrapper for dynamic meta tags
import Page from "../../../utils/Page";




export default function ViewDetails() {
  return (
    <Page title="Details">
      <Container>
        <Stack
          direction="row"
          alignItems="center"
          justifyContent="space-between"
          mb={5}
        >
          <Typography variant="h4" gutterBottom>
            Details
          </Typography>
              <Button
                variant="contained"
                component={RouterLink}
                to="/app/details/add"
                startIcon={<AddIcon />}
              >
                Set Details
              </Button>
        </Stack>
        

      </Container>
    </Page>
  );
}
