import axios from "axios";
const server = "https://actlip.onrender.com";

export const getDataApi = async (url, token) => {
  const res = await axios.get(`${server}/api/${url}`, {
    headers: { Authorization: token },
  });
  return res;
};

export const postDataApi = async (url, post, token) => {
  const res = await axios.post(`${server}/api/${url}`, post, {
    headers: { Authorization: token },
  });
  return res;
};

export const putDataApi = async (url, post, token) => {
  const res = await axios.put(`${server}/api/${url}`, post, {
    headers: { Authorization: token },
  });
  return res;
};

export const patchDataApi = async (url, post, token) => {
  const res = await axios.patch(`${server}/api/${url}`, post, {
    headers: { Authorization: token },
  });
  return res;
};

export const deleteDataApi = async (url, token) => {
  const res = await axios.delete(`${server}/api/${url}`, {
    headers: { Authorization: token },
  });
  return res;
};
