import BackendService from "./BackendService";

// get all participants
const getAllParticipants = async () => {
  return BackendService.get(`registration/`);
};

// registration
const createParticipants = async (data) => {
  return BackendService.post("registration/", data);
};

//exporting the registration service
const registrationService = {
    getAllParticipants,
    createParticipants,
};
export default registrationService;