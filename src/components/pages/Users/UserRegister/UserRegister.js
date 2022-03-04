import { useState } from "react";
import { styled } from "@mui/material/styles";
import { Box, Container, Typography, Stack, Link, Card } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
// import PasswordField from "./utils/PasswordField";
import TextInput from "../utils/TextInput";
import SubmitButton from "../utils/SubmitButton";
import SelectInput from "../../../utils/Inputs/SelectInput";

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
  const [candidateName, setCandidateName] = useState();
  const [admnNumber, setAdmnNumber] = useState();
  const [gender, setGender] = useState(null);
  const [department, setDepartment] = useState(null);
  const [year, setYear] = useState(null);


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
            <TextInput
              label="Candidate name"
              type="text"
              value={candidateName}
              setValue={setCandidateName}
            />
            <SelectInput
              label="Year"
              type="number"
              menuItems={Year}
              dropdownValue={year}
              setDropdownValue={setYear}
            />
            <SelectInput
              label="Department"
              type="text"
              menuItems={Department}
              dropdownValue={department}
              setDropdownValue={setDepartment}
            />
            <TextInput
              label="Admission Number"
              type="text"
              value={admnNumber}
              setValue={setAdmnNumber}
            />
            <SelectInput
              label="Gender"
              name="gender"
              menuItems={Gender}
              dropdownValue={gender}
              setDropdownValue={setGender}
            />      
            <SubmitButton
              name="Register"
              disabled={
                !candidateName || !year || !department || !admnNumber || !gender
                  ? true
                  : false
              }
              //   onClick={handleClick}
            />
          </Stack>
        </Card>
      </ContentStyle>
    </RootStyle>
  );
}
