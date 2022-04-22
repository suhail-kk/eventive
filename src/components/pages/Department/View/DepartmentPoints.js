import { useEffect, useState, useContext } from "react";

// material components
import { Stack, Container, Typography, Grid } from "@mui/material";
import Page from "../../../utils/Page";
import Dptcard from "../../../utils/Department/Dptcard";
import DptTypeConfig from "../../../utils/Department/DptTypeConfig";

//context
import { loadingContext } from "../../../../context/loadingContext";

//details service
import markentryService from "../../../../services/markentryService";

//loader
import Loader from "../../../utils/Loader";

export default function DepartmentPoints() {
  const { loaderToggler } = useContext(loadingContext);
  const [points,setPoints] = useState({});


  useEffect(() => {
    const getAllResults = async () => {
      try {
        loaderToggler(true);
        //get result
        const point = await markentryService.getPoints();
        setPoints(point.data);
        loaderToggler(false);
      } catch (err) {
        console.error(err?.response?.data?.message);
        loaderToggler(false);
      }
    };
    getAllResults();
  }, []);

  console.log()
  return (
    <Page title="Departments">
      <Container>
        <Loader />
        <Stack
          direction="row"
          alignItems="center"
          justifyContent="space-between"
          mb={5}
        >
          <Typography variant="h4" gutterBottom>
            Departments
          </Typography>
        </Stack>
        <Grid container spacing={3} rowSpacing={1} direction="row">
          {DptTypeConfig.map((type) => (
            <Grid item xs={12} sm={6} md={3}>
              <Dptcard data={DptTypeConfig} type={type} />
            </Grid>
          ))}
        </Grid>
      </Container>
    </Page>
  );
}
