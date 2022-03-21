import { Link as RouterLink } from 'react-router-dom';
import { useEffect, useState,useContext } from "react";
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

//context
import { loadingContext } from "../../../../context/loadingContext";


export default function DepartmentPoints() {
  const { loaderToggler } = useContext(loadingContext);
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
                data={DptTypeConfig}
                type={type}
              />
            </Grid>
          ))}
        </Grid>
      </Container>
    </Page>
  )
}