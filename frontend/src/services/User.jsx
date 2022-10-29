import axios from "axios";
const baseUrl = "/api/users";
const getAll = async () => {
  const request = axios.get(baseUrl);
  return request.then((response) => response.data);
};

const create = async (newObject) => {
  const response = await axios.post(baseUrl, newObject);
  return response.data;
};

const update = async (id, newObject) => {
  const request = axios.patch(`${baseUrl}/${id}`, newObject);
  return request.then((response) => response.data);
};

const userService = { getAll, create, update };

export default userService;
