import BackendService from "./BackendService";

// get all users
const getUsers = async () => {
  return BackendService.get(`login/`);
};

// create a new user
const createUser = async (data) => {
  return BackendService.post("login/", data);
};


//exporting the user service
const UserService = {
  getUsers,
  createUser,
};
export default UserService;