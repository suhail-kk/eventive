import Typography from "@mui/material/Typography";
import { styled } from "@mui/material/styles";

import Grid from "@mui/material/Grid";

const NUMBER = 1233;
const STRING = "Anything";

// root style for material container wrapper
const RootStyle = styled("div")({
    display: "flex",
    minHeight: "100%",
    overflow: "hidden",
    marginTop:"20dp",
    padding:"5dp",
  });
   


export default function UserHome() {
    
  return (
      <div className={RootStyle}>
      
    <Grid container spacing={1} coloumnSpacing={1}>
    <Grid item xs={6} sm={4} md={3}>
        <Typography variant="h5">{NUMBER}</Typography>
      </Grid>  
    <Grid item xs={6} sm={4} md={3}>
        <Typography>{STRING}</Typography>
      </Grid>
    </Grid>
    <Grid container spacing={1} coloumnSpacing={1}>
    <Grid item xs={6} sm={4} md={3}>
        <Typography variant="h5">{NUMBER}</Typography>
      </Grid>  
      <Grid item xs={6} sm={4} md={3}>
        <Typography>{STRING}</Typography>
      </Grid>
    </Grid>
    <Grid container spacing={1} coloumnSpacing={1}>
    <Grid item xs={6} sm={4} md={3}>
        <Typography variant="h5">{NUMBER}</Typography>
      </Grid>  
      <Grid item xs={6} sm={4} md={3}>
        <Typography>{STRING}</Typography>
      </Grid>
    </Grid>
    <Grid container spacing={1} coloumnSpacing={1}>
    <Grid item xs={6} sm={4} md={3}>
        <Typography variant="h5">{NUMBER}</Typography>
      </Grid>  
      <Grid item xs={6} sm={4} md={3}>
        <Typography>{STRING}</Typography>
      </Grid>
    </Grid>

    
    
    </div>
  );
}
