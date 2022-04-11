import { useState,useContext } from "react";
import { styled } from "@mui/material/styles";
import { Box, Container, Typography, Stack, Card, Link } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import PasswordField from "./utils/PasswordField";
import TextInput from "./utils/TextInput";
import SubmitButton from "./utils/SubmitButton";
import userServices from "../../../services/userService";
import Loader from "../../utils/Loader"
import { loadingContext } from "../../../context/loadingContext";
 import LOCAL_KEYS from "../../../constants/LOCAL_KEY";

//importing the user service
import authService from "../../../services/authServices";

const ContentStyle = styled("div")(({ theme }) => ({
  maxWidth: 400,
  margin: "auto",
  display: "flex",
  minHeight: "80vh",
  flexDirection: "column",
  justifyContent: "center",
}));

export default function Login() {
  const { loaderToggler } = useContext(loadingContext);
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const navigate = useNavigate();
  const [authErrors, setAuthErrors] = useState();

  const clearError = () => setAuthErrors("");

  const redirectionHandler = (type) => {
    if (type === "admin") return navigate("/app/home");
    else {
      return navigate("/user/landing");
    }
  }
  const handleClick = async () => {
    try {
      clearError();
      loaderToggler(true);
      const loginCredentials = {
        email,
        password,
      };
      // logging in user
      const response = await authService.loginUser(loginCredentials);
      console.log(response.data.userType);
      //storing token in localStorage
      localStorage.setItem(LOCAL_KEYS.AUTH_TOKEN, response);
      redirectionHandler(response.data.type);
      loaderToggler(false);
    } catch (err) {
      setAuthErrors(err?.response?.data?.message);
      loaderToggler(false);
    }
  }

  return (
    <Container>
      <ContentStyle>
        <Card sx={{ p: 3 }}>
          <Box sx={{ mb: 3 }}>
            <Typography textAlign="center" variant="h3" gutterBottom>
              Login
            </Typography>
          </Box>
          <Stack spacing={2}>
            <TextInput
              label="Email"
              type="email"
              value={email}
              setValue={setEmail}
            />
            <PasswordField
              label="Password"
              value={password}
              setValue={setPassword}
            />

            <Stack
              direction="column"
              alignItems="flex-start"
              justifyContent="space-between"
              sx={{ my: 2 }}
            >
              <Link
                component={RouterLink}
                variant="subtitle2"
                to="/user/forgot"
              >
                Forgot password
              </Link>

              <Link
                component={RouterLink}
                variant="subtitle2"
                to="/signup"
              >
                Don’t have an account? Sign Up
              </Link>
            </Stack>
            <SubmitButton
              disabled={!email || !password ? true : false}
              name="Login"
              onClick={handleClick}
            />
          </Stack>
        </Card>
      </ContentStyle>
    </Container>
  );

}