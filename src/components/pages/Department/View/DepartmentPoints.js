import { Link as RouterLink } from 'react-router-dom';
import markentryService from "../../../../services/markentryService"
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

//loader
import Loader from "../../../utils/Loader";

let Department = {
  "BSC":0,
  "BBA":0,
  "BCOM":0,
  "BVOC":0,
  "BBA":0,
}

export default function DepartmentPoints() {
  const { loaderToggler } = useContext(loadingContext);
  const [results, setResult] = useState([]);

  useEffect(() => {
    const getAllResults = async () => {
      try {
        loaderToggler(true);
        //get result
        const result = await markentryService.getAllResults();
        setResult(result.data);  
        loaderToggler(false);
      } catch (err) {
        console.error(err?.response?.data?.message);
        loaderToggler(false);
      }
    };
    getAllResults();
  }, []);

  console.log(results)

  for(let result of results){
    Object.keys(Department).forEach(key => {
      console.log(Department[key])
      if(result.firstDept==Department[key]){
        Department[key] += 5;
      }
      else if(result.secondDept==Department[key]){
        Department[key] += 3;
      }
      else if(result.thirdDept==Department[key]){
        Department[key] += 1; 
      }else{
        Department[key] += 0;
      }
    });
  }
  console.log(Department)

  return (
    <Page title="Departments">
      <Container>
        <Loader/>
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