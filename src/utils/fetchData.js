import axios from "axios";
const backend = process.env.REACT_APP_BACKEND_URL;

export const getDataApi = async (url) => {
  const res = await axios.get(`https://actlip.onrender.com/api/${url}`);
  return res;
};

export const getNewsApi = async (url) => {
  const res = await axios.get(`https://actlip.onrender.com/api/${url}`);
  return res;
};

export const postDataApi = async (url, post, token) => {
  const res = await axios.post(`https://actlip.onrender.com/api/${url}`, post, {
    headers: { Authorization: token },
  });
  return res;
};

export const putDataApi = async (url, post, token) => {
  const res = await axios.put(`https://actlip.onrender.com/api/${url}`, post, {
    headers: { Authorization: token },
  });
  return res;
};

export const patchDataApi = async (url, post, token) => {
  const res = await axios.patch(`/api/${url}`, post, {
    headers: { Authorization: token },
  });
  return res;
};

export const deleteDataApi = async (url, token) => {
  const res = await axios.delete(`/api/${url}`, {
    headers: { Authorization: token },
  });
  return res;
};
