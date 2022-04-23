import { useState ,useContext} from "react";
import { styled } from "@mui/material/styles";
import { Box, Container, Typography, Stack, TextField,MenuItem, Card } from "@mui/material";
import { useNavigate } from "react-router-dom";
// import PasswordField from "./utils/PasswordField";
import TextInput from "../utils/TextInput";
import SubmitButton from "../utils/SubmitButton";
import SelectInput from "../../../utils/Inputs/SelectInput";
import registrationService from "../../../../services/registrationService";

//context
import { loadingContext } from "../../../../context/loadingContext";


const ContentStyle = styled("div")(({ theme }) => ({
  maxWidth: 400,
  margin: "auto",
  display: "flex",
  height: "90vh",
  flexDirection: "column",
  justifyContent: "center",
  alignContent: "center",
}));

const RootStyle = styled("div")({
  background: "#A0C9C3",
});

const Gender = ["Male", "Female"];
const Year = ["First", "Second","Third"];
const Department = ["BSC","BA","BBA","BCOM","BVOC"]

export default function UserRegister() {
  const navigate = useNavigate();
  const { loaderToggler } = useContext(loadingContext);
  const [candidateName, setCandidateName] = useState();
  const [admnNumber, setAdmnNumber] = useState();
  const [gender, setGender] = useState();
  const [department, setDepartment] = useState();
  const [year, setYear] = useState();

  const handleNameChange = (event) => setCandidateName(event.target.value);
  const handleYearChange = (event) => setYear(event.target.value);
  const handleDepartmentChange = (event) => setDepartment(event.target.value);
  const handleGenderChange = (event) => setGender(event.target.value);
  const handleAdmissionNumberChange = (event) => setAdmnNumber(event.target.value);


    // clearing the form
    const clearEventCredentials = () => {
      setCandidateName("");
      setAdmnNumber("");
      setGender("");
      setDepartment("");
      setYear("");
    };

    const handleParticipantRegister = async () => {
      try {
        loaderToggler(true);
        const participantData = {
          candidateName,
          admnNumber,
          gender,
          department,
          year,
        };
        // adding result to db
        const res = await registrationService.createParticipants(participantData);
        localStorage.setItem("candidateName",candidateName);
        // clearing the form
         console.log(res.data._id);
        localStorage.setItem("registeredUser",res.data._id)
      // const iid= localStorage.getItem("registeredUser")
      // console.log(iid);
        clearEventCredentials();
        navigate('/user/assignevent')
        loaderToggler(false);
      } catch (err) {
        // setErrorMsg(err?.response?.data?.message);
        console.error(err?.response?.data?.message);
        loaderToggler(false);
      }
    };

  return (
    <RootStyle>
      <ContentStyle>
        <Card sx={{ p: 2 }}>
          <Box sx={{ mb: 2 }}>
            <Typography variant="h3" gutterBottom textAlign="center">
              Register
            </Typography>
          </Box>
          <Stack spacing={1}>
            <TextField
                varient="contained"
                name="candidateName"
                label="Candidate Name"
                color="info"
                fullWidth
                value={candidateName}
                onChange={handleNameChange}
              />
              <TextField
                select
                label="Year"
                onChange={handleYearChange}
                value={year}
                fullWidth
                name="eventName"
              >
                {Year && 
                  Year.map((year) => (
                    <MenuItem value={year}>{year}</MenuItem>
                  ))}
              </TextField>
              <TextField
                select
                label="Department"
                onChange={handleDepartmentChange}
                value={department}
                fullWidth
                name="department"
              >
                {Department && 
                  Department.map((department) => (
                    <MenuItem value={department}>{department}</MenuItem>
                  ))}
              </TextField>
              <TextField
                varient="contained"
                name="date"
                label="Admission Number"
                color="info"
                fullWidth
                value={admnNumber}
                onChange={handleAdmissionNumberChange}
                // error={errorMsg}
              />
              <TextField
                select
                label="Gender"
                onChange={handleGenderChange}
                value={gender}
                fullWidth
                name="gender"
              >
                {Gender && 
                  Gender.map((gender) => (
                    <MenuItem value={gender}>{gender}</MenuItem>
                  ))}
              </TextField> 
            <SubmitButton
              name="Register"
              disabled={
                !candidateName || !year || !department || !admnNumber || !gender
                  ? true
                  : false
              }
                onClick={handleParticipantRegister}
            />
          </Stack>
        </Card>
      </ContentStyle>
    </RootStyle>
  );
}
