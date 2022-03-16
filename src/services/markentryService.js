import BackendService from "./BackendService";

// get all results
const getAllResults = async () => {
  return BackendService.get(`markentry/`);
};

// mark entry
const createResult = async (data) => {
  return BackendService.post("markentry/", data);
};

// update mark
const updateResult = async (data) => {
    return BackendService.patch(`markentry/${id}`, data);
  };

  // delete entered mark
const deleteResult = async (data) => {
    return BackendService.destroy(`markentry/${id}`, data);
  };

//exporting the events service
const markentryService = {
    getAllResults,
    createResult,
    updateResult,
    deleteResult,
};
export default markentryService;