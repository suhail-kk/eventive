import BackendService from "./BackendService";

// get all shedules
const getAllShedules = async () => {
  return BackendService.get(`shedules/`);
};

// get all events
const getSheduleById = async (id) => {
  return BackendService.get(`shedules/${id}`);
};

// shedule an event
const createShedule= async (data) => {
  return BackendService.post("shedules/", data);
};

// update shedule
const updateShedule = async (id,data) => {
    return BackendService.patch(`shedules/${id}`, data);
  };

  // delete shedule
const deleteShedule = async (id,data) => {
    return BackendService.destroy(`shedules/${id}`, data);
  };

//exporting the events service
const sheduleService = {
    getAllShedules,
    createShedule,
    updateShedule,
    deleteShedule,
    getSheduleById
};
export default sheduleService;