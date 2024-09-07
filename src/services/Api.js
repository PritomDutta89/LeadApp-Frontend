import axios from "axios";
import { BASE_URL } from "./helper";

export const createPost = async (data) => {
  const res = await axios.post(`${BASE_URL}/api/posts`, data);
  return res.data;
};

export const getPost = async () => {
  const res = await axios.get(`${BASE_URL}/api/posts`);
  return res.data;
};

export const getPostWithID = async (id) => {
  const res = await axios.get(`${BASE_URL}/api/posts/${id}`);
  return res.data;
};

export const updatePost = async ({ id, data }) => {
  const res = await axios.put(`${BASE_URL}/api/posts/${id}`, data);
  return res.data;
};

export const deletePostData = async (id) => {
  const res = await axios.delete(`${BASE_URL}/api/posts/${id}`);
  return res.data;
};

export const loginApi = async (data) => {
  const res = await axios.post(`${BASE_URL}/api/user/login`, data);
  return res.data;
};

export const registerApi = async (data) => {
  const res = await axios.post(`${BASE_URL}/api/user/register`, data);
  return res.data;
};

export const resetPasswordApi = async (data) => {
  const res = await axios.put(`${BASE_URL}/api/user/reset`, data);
  return res.data;
};
