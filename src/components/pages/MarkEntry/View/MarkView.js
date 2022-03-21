import { Link as RouterLink } from "react-router-dom";
// material components
import { Stack, Button, Container, Typography, Grid } from "@mui/material";

// material icons
import AddIcon from "@mui/icons-material/Add";
// page wrapper for dynamic meta tags
import Page from "../../../utils/Page";
import DataTable from "../../../utils/DataTable";
import markentryService from "../../../../services/markentryService"
import { useEffect, useState,useContext } from "react";

//context
import { loadingContext } from "../../../../context/loadingContext";

// table header cell config
const TABLE_HEAD = [
  {
    id: "eventName",
    label: "Item",
    alignRight: false,
    type: "stack",
  },
  { id: "first", label: "First", alignRight: false, type: "text" },
  { id: "second", label: "Second", alignRight: false, type: "text" },
  { id: "third", label: "Third", alignRight: false, type: "text" },
  { id: "edit", label: "Edit", alignRight: false,type:"edit" },
  { id: "delete", label: "Delete", alignRight: false,type:"delete" },
];


export default function MarkView() {
  const { loaderToggler } = useContext(loadingContext);
  const [results, setResult] = useState([]);
  useEffect(() => {
    const getAllResults = async () => {
      try {
        loaderToggler(true);
        //get result
        const result = await markentryService.getAllResults();
        setResult(result);  
        loaderToggler(false);
      } catch (err) {
        console.error(err?.response?.data?.message);
        loaderToggler(false);
      }
    };
    getAllResults();
  }, []);
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
           Results
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
                to="/app/markentry/add"
                startIcon={<AddIcon />}
              >
                Add Mark
              </Button>
            </Grid>
            
          </Grid>
        </Stack>
        {
          results.data && (
            <DataTable TABLE_DATA={results.data} TABLE_HEAD={TABLE_HEAD}/>
          )
        }
      </Container>
    </Page>
  );
}
