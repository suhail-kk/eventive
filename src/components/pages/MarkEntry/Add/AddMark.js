import { useEffect, useState } from "react";
// material components
import {
  Stack,
  Button,
  Container,
  Typography,
  Grid,
  Card,
  TextField,
  Tooltip,
  Autocomplete,
} from "@mui/material";

// material icons
import PublishIcon from "@mui/icons-material/Publish";

// page wrapper for dynamic meta tags
import Page from "../../../utils/Page";
import DataTable from "../../../utils/DataTable";

//importing the user service
import userService from "../../../../services/userService";

// table header cell config
const TABLE_HEAD = [
  { id: "item", label: "Name", type: "text" },
  { id: "first", label: "Company", type: "text" },
  { id: "status", label: "status", type: "userStatusChip" },
];

const TABLE_DATA = [
  {
    id: "134doojon",
    item: "Aseel",
    first: "aseelhacker@microsoft.com",
    status: "registered",
  },
  {
    id: "ounr34343",
    item: "Noof",
    first: "noof@google.com",
    status: "created",
  },
  {
    id: "343433ojnn",
    item: "Nahyan",
    first: "nahyan@facebook.com",
    status: "filled",
  },
  {
    id: "eonkn2434",
    item: "Dilshad",
    first: "dilshad@amazon.com",
    status: "created",
  },
];

const top100Films = [
  { label: "The Shawshank Redemption", year: 1994 },
  { label: "The Godfather", year: 1972 },
  { label: "The Godfather: Part II", year: 1974 },
  { label: "The Dark Knight", year: 2008 },
  { label: "12 Angry Men", year: 1957 },
  { label: "Schindler's List", year: 1993 },
  { label: "Pulp Fiction", year: 1994 },
];


const departmentList = [
  {label: "BSC",value:"bsc"},
  {label: "BA",value:"ba"},
  {label: "BBA",value:"bba"},
  {label: "BCOM",value:"bcom"},
  {label: "BVOC",value:"bvoc"}
]

export default function AddMark() {
  const [item, setItem] = useState();
  const [first, setFirst] = useState();
  const [second, setSecond] = useState();
  const [third, setThird] = useState();
  const [errorMsg, setErrorMsg] = useState("");
  const [users, setUsers] = useState();

  console.log(first);

  const handleItemChange = (event) => setItem(event.target.value);
  const handleFirstChange = (event) => setFirst(event.target.value);
  const handleSecondChange = (event) => setSecond(event.target.value);
  const handleThirdChange = (event) => setThird(event.target.value);
  const clearError = () => setErrorMsg("");
  useEffect(() => {
    const getUsers = async () => {
      try {
        const users = await userService.getUsers();
        console.log(users);
        setUsers(users);
      } catch (err) {
        console.error(err?.response?.data?.message);
      }
    };
    getUsers();
  }, []);

  const handleAddStudent = async () => {
    try {
      clearError();
      const userData = {
        item,
        first,
        second,
        third,
        userType: "student",
      };
      // adding user to db
      await userService.createUser(userData);
      // clearing the form
      clearUserCredentials();
    } catch (err) {
      setErrorMsg(err?.response?.data?.message);
    }
  };

  // clearing the form
  const clearUserCredentials = () => {
    setItem("");
    setFirst("");
  };
  return (
    <Page title="AddMark">
      <Container>
        <Stack
          direction="row"
          alignItems="center"
          justifyContent="space-between"
          mb={2}
        >
          <Typography variant="h5" gutterBottom>
            Add Mark
          </Typography>
        </Stack>
        <Card sx={{ padding: 3, marginBottom: 2 }}>
          <Grid container spacing={1} rowSpacing={1}>
            <Grid item xs={12} sm={12} md={12}>
              <Autocomplete
                disablePortal
                id="combo-box-demo"
                options={top100Films}
                sx={6}
                name="item"
                onChange={(event, value) => console.log(value)}
                // onChange={handleItemChange}
                style={{overflow:"overflow"}}
                error={errorMsg}
                renderInput={(params) => <TextField {...params} label="Item" />}
              />
              
            </Grid>
            <Grid item xs={4} sm={4} md={4}>
            <Autocomplete
                disablePortal
                options={top100Films}
                sx={6}
                name="first"
                onChange={(first, value) => console.log(value)}
                style={{overflow:"overflow"}}
                value={first}
                error={errorMsg}
                renderInput={(params) => <TextField {...params} label="First" />}
              />
            </Grid>
            <Grid item xs={4} sm={4} md={4}>
            <Autocomplete
                disablePortal
                options={top100Films}
                sx={6}
                name="second"
                onChange={(second, value) => console.log(value)}
                style={{overflow:"overflow"}}
                value={second}
                error={errorMsg}
                renderInput={(params) => <TextField {...params} label="Second" />}
              />
            </Grid>
            <Grid item xs={4} sm={4} md={4}>
            <Autocomplete
                disablePortal
                options={top100Films}
                sx={6}
                name="third"
                onChange={(third, value) => console.log(value)}
                style={{overflow:"overflow"}}
                value={third}
                error={errorMsg}
                renderInput={(params) => <TextField {...params} label="Third" />}
              />
            </Grid>
            <Grid item xs={4} sm={4} md={4}>
            <Autocomplete
                disablePortal
                options={departmentList}
                sx={6}
                name="firstDept"
                onChange={(first, value) => console.log(value)}
                style={{overflow:"overflow"}}
                value={first}
                error={errorMsg}
                renderInput={(params) => <TextField {...params} label="Department" />}
              />
            </Grid>
            <Grid item xs={4} sm={4} md={4}>
            <Autocomplete
                disablePortal
                options={departmentList}
                sx={6}
                name="secondDepartment"
                onChange={(second, value) => console.log(value)}
                style={{overflow:"overflow"}}
                value={second}
                error={errorMsg}
                renderInput={(params) => <TextField {...params} label="Department" />}
              />
            </Grid>
            <Grid item xs={4} sm={4} md={4}>
            <Autocomplete
                disablePortal
                options={departmentList}
                sx={6}
                name="thirdDepartment"
                onChange={(third, value) => console.log(value)}
                style={{overflow:"overflow"}}
                value={third}
                error={errorMsg}
                renderInput={(params) => <TextField {...params} label="Department" />}
              />
            </Grid>
            <Grid item xs={12} sm={12} md={12}>
              <Typography variant="body1" gutterBottom color="error">
                {errorMsg}
              </Typography>
            </Grid>
          </Grid>
          <Stack
            direction="row"
            alignItems="center"
            justifyContent="flex-end"
            mt={2}
          >
            <Tooltip
              title={
                !item || !first || !second || !third
                  ? "fill the fields"
                  : "sumbit fields"
              }
            >
              <span>
                <Button
                  variant="contained"
                  color="info"
                  //   component={RouterLink}
                  onClick={handleAddStudent}
                  // disabled={!item || !first || !second || !third}
                  //   to="#"
                  startIcon={<PublishIcon />}
                >
                  Add
                </Button>
              </span>
            </Tooltip>
          </Stack>
        </Card>
        {users && <DataTable TABLE_DATA={users} TABLE_HEAD={TABLE_HEAD} />}
      </Container>
    </Page>
  );
}
