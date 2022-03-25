import BackendService from "./BackendService";

// get all events
const getAllEvents = async () => {
  return BackendService.get(`eventslist/`);
};

// get all events
const getEventsById = async (id) => {
  return BackendService.get(`eventslist/${id}`);
};

// create an event
const createEvent= async (data) => {
  return BackendService.post("eventslist/", data);
};

// update event
const updateEvent = async (id,data) => {
    return BackendService.patch(`eventslist/${id}`, data);
  };

  // delete event
const deleteEvent = async (id,data) => {
    return BackendService.destroy(`eventslist/${id}`, data);
  };

//exporting the events service
const eventsService = {
    getAllEvents,
    createEvent,
    updateEvent,
    deleteEvent,
    getEventsById
};
export default eventsService;