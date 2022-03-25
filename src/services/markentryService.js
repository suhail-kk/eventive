import BackendService from "./BackendService";

// get all results
const getAllResults = async () => {
  return BackendService.get(`results/`);
};

// get  result by id
const getResultById = async (id) => {
  return BackendService.get(`results/${id}`);
};

// mark entry
const createResult = async (data) => {
  return BackendService.post("results/", data);
};

// update mark
const updateResult = async (id,data) => {
    return BackendService.patch(`results/${id}`, data);
  };

  // delete entered mark
const deleteResult = async (id,data) => {
    return BackendService.destroy(`results/${id}`, data);
  };

//exporting the events service
const markentryService = {
    getAllResults,
    createResult,
    updateResult,
    deleteResult,
    getResultById
};
export default markentryService;