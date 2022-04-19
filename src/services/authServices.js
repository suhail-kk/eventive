import BackendService from "./BackendService";

//loging a user
const loginUser = async (data) => {
  return BackendService.post("users/login", data);
};

//registering a user
const registerUser = async (data) => {
  return BackendService.post("users/register", data);
};



//forgot password
const forgotPassword = async (data) => {
  return BackendService.post("users/forgot", data);
};

//reset password
const resetPassword = async (data, userToken) => {
  console.log( { userToken })
  return BackendService.patch("users/reset/${userToken}", data, { userToken });
};

const authService = {
  loginUser,
  registerUser,
  forgotPassword,
  resetPassword,
};

export default authService;