import BackendService from "./BackendService";

// // get all users
// const getDetails = async () => {
//   return BackendService.get(`details/`);
// };

// To get teacher
const getDetails = (id) => {
  return BackendService.get(`details/${(id)}`);
};

// set details
const createDetails = async (data) => {
  return BackendService.post("details/", data);
};

// update details
const updateDetails = async (id, data) => {
  return BackendService.patch(`details/${id}`, data);
};

//exporting the details service
const detailsService = {
  getDetails,
  createDetails,
  updateDetails,
};
export default detailsService;
