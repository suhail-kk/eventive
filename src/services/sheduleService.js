import BackendService from "./BackendService";

// get all shedules
const getAllShedules = async () => {
  return BackendService.get(`shedule/`);
};

// shedule an event
const createShedule= async (data) => {
  return BackendService.post("shedule/", data);
};

// update shedule
const updateShedule = async (data) => {
    return BackendService.patch(`shedule/${id}`, data);
  };

  // delete shedule
const deleteShedule = async (data) => {
    return BackendService.destroy(`shedule/${id}`, data);
  };

//exporting the events service
const sheduleService = {
    getAllShedules,
    createShedule,
    updateShedule,
    deleteShedule,
};
export default sheduleService;