import axios from "axios";

import apiConfigs from "../configs/api";

const { baseURL, token } = apiConfigs;

const api = axios.create({
  baseURL,
  headers: {
    Authorization: `Bearer ${token}`,
  },
});

export default api;
