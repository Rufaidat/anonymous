import axios from "axios";
const baseUrl = "/api/messages";

const getAll = async () => {
  const request = axios.get(baseUrl);
  return request.then((response) => response.data);
};

const create = async (newObject) => {
  const response = await axios.post(baseUrl, newObject, config);
  return response.data;
};

const blogService = { getAll, create };

export default blogService;
