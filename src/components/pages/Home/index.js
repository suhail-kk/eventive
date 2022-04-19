import Page from "../../utils/Page";
import UsersCard from "./UsersCard";
import { Container, Box, Typography, Grid } from "@mui/material";
import UserTypeConfig from "./UserTypeConfig";
import Divider from "@mui/material/Divider";
import DptPointTable from "./DptPointTable";

const Home = () => {
  return (
    <Page title={"Home Page"}>
      <Container maxWidth="xl">
        <Box sx={{ pb: 5 }}>
          <Typography variant="h4">Dashboard</Typography>
        </Box>
        <Grid container spacing={3} rowSpacing={1} direction="row">
          {UserTypeConfig.map((type) => (
            <Grid item xs={12} sm={6} md={3}>
              <UsersCard type={type} />
            </Grid>
          ))}
        </Grid>
      </Container>
      <Grid mt={3}>
        <Divider variant="inset" />
      </Grid>
      <Grid mt={2}>
        <DptPointTable />
      </Grid>
    </Page>
  );
};
export default Home;
