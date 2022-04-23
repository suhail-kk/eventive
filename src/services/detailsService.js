import BackendService from "./BackendService";

// get all users
const gettDetails = async () => {
  return BackendService.get(`details/`);
};


// set details
const createDetails = async (data) => {
  return BackendService.post("details/", data);
};

// get details by id
const getDetailsById = async (id) => {
  return BackendService.get(`details/${id}`);
};


// update details
const updateDetails = async (id,data) => {
    return BackendService.patch(`details/${id}`, data);
  };

    // delete details
const deleteDetails = async (id,data) => {
  return BackendService.destroy(`details/${id}`, data);
};

//exporting the details service
const detailsService = {
    gettDetails,
    getDetailsById,
    createDetails,
    updateDetails,
    deleteDetails,
};
export default detailsService;
