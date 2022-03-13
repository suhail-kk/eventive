import { Link as RouterLink } from 'react-router-dom';
// material components
import {
  Stack,
  Button,
  Container,
  Typography,
  Grid,
} from '@mui/material';
import Page from '../../../utils/Page';
import Dptcard from "../../../utils/Department/Dptcard";
import DptTypeConfig from "../../../utils/Department/DptTypeConfig";

const departmentData = {
  dptName:"Computer Science",
  hodName : "Riyadh",
  contact :"34554"
}

export default function DepartmentPoints() {

  return (
    <Page title="Departments">
      <Container>
        <Stack direction="row" alignItems="center" justifyContent="space-between" mb={5}>
          <Typography variant="h4" gutterBottom>
            Departments
          </Typography>
        </Stack>
        <Grid container spacing={3} rowSpacing={1} direction="row">
          {DptTypeConfig.map((type) => (
            <Grid item xs={12} sm={6} md={3}>
              <Dptcard
                data={departmentData}
                type={type}
              />
            </Grid>
          ))}
        </Grid>
      </Container>
    </Page>
  )
}