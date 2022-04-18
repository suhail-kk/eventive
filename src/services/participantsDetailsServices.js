import BackendService from "./BackendService";

// get all participants details
const getAllParticipantDetails = async () => {
  return BackendService.get(`participantsdetails/`);
};

// get all individual details by id
const getDetailsById = async (id) => {
  return BackendService.get(`participantsdetails/${id}`);
};

// post participants details
const createParticipantDetails = async (data) => {
  return BackendService.post("participantsdetails/", data);
};

// update participants details
const updateParticipantsDetails = async (id,data) => {
    return BackendService.patch(`participantsdetails/${id}`, data);
  };

  // delete participants details
const deleteParticipantsDetails = async (id,data) => {
    return BackendService.destroy(`participantsdetails/${id}`, data);
  };

//exporting the events service
const participantsDetailsServices = {
    getAllParticipantDetails,
    getDetailsById,
    createParticipantDetails,
    updateParticipantsDetails,
    deleteParticipantsDetails
};
export default participantsDetailsServices;