import Cookies from "universal-cookie";
import axios from "axios";
//import * as https from "https";
const cookies = new Cookies(null, { path: "/" });

const api = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL_API,
  headers: {
    "Content-Type": "multipart/form-data",
    scheme: "https",
  },
});

// "authorization":`Bearer ${cookies.get('token.auth')}`

api.interceptors.request.use(
  (config) => {
    const tokenAuth = cookies.get("postweb.token.auth");

    if (tokenAuth) {
      config.headers.authorization = `Bearer ${tokenAuth}`;
    }

    return config;
  },
  (error) => {
    return Promise.reject(error);
  },
);

export default api;
