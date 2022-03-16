import BackendService from "./BackendService";

// get all events
const getAllEvents = async () => {
  return BackendService.get(`events/`);
};

// create an event
const createEvent= async (data) => {
  return BackendService.post("events/", data);
};

// update event
const updateEvent = async (data) => {
    return BackendService.patch(`events/${id}`, data);
  };

  // delete event
const deleteEvent = async (data) => {
    return BackendService.destroy(`events/${id}`, data);
  };

//exporting the events service
const eventsService = {
    getAllEvents,
    createEvent,
    updateEvent,
    deleteEvent,
};
export default eventsService;