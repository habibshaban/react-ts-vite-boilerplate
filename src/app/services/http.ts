import axios from "axios";

const http = axios.create({
  baseURL: `${import.meta.env.VITE_BASE_URL}`,
  timeout: 20000,
  headers: {
    "content-type": "application/json",
    Accept: "*/*",
  },
});

http.interceptors.response.use(
  (response) => {
    return response;
  },
  async (error) => {
    if (error?.response?.status === 401) {
      // do something
    }
    return Promise.reject(error);
  }
);

http.interceptors.request.use(
  (config) => {
    // add token
    return config;
  },
  (error) => {
    // Do something with request error
    return Promise.reject(error);
  }
);

export default http;
