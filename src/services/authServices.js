import BackendService from "./BackendService";

//loging a user
const loginUser = async (data) => {
  return BackendService.post("users/login", data);
};

//registering a user
const registerUser = async (data) => {
  return BackendService.post("users/register", data);
};



// //forgot password
// const forgotPassword = async (data) => {
//   return BackendService.post("user/forgot", data);
// };

// //reset password
// const resetPassword = async (data, token) => {
//   return BackendService.patch("user/reset", data, { token });
// };

const authService = {
  loginUser,
  registerUser,
};

export default authService;