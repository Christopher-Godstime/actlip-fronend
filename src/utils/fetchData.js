import axios from "axios";
const backend = "https://actlip.onrender.com";

export const getDataApi = async (url) => {
  const res = await axios.get(`${backend}/api/${url}`);
  return res;
};

export const getNewsApi = async (url) => {
  const res = await axios.get(`${backend}/api/${url}`);
  return res;
};

export const postDataApi = async (url, post, token) => {
  const res = await axios.post(`${backend}/api/${url}`, post, {
    headers: { Authorization: token },
  });
  return res;
};

export const putDataApi = async (url, post, token) => {
  const res = await axios.put(`${backend}/api/${url}`, post, {
    headers: { Authorization: token },
  });
  return res;
};

export const patchDataApi = async (url, post, token) => {
  const res = await axios.patch(`${backend}/api/${url}`, post, {
    headers: { Authorization: token },
  });
  return res;
};

export const deleteDataApi = async (url, token) => {
  const res = await axios.delete(`${backend}/api/${url}`, {
    headers: { Authorization: token },
  });
  return res;
};
