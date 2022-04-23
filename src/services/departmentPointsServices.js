import BackendService from "./BackendService";

// get points
const getPoints = async () => {
  return BackendService.get(`results/points`);
};


//exporting the events service
const departmentPointsServices = {
    getPoints,
};
export default departmentPointsServices;