import axios from "axios";

axios.defaults.baseURL = "https://drf-api-yc.herokuapp.com/";
axios.defaults.baseURL = "https://8000-yaricarelli-drfapi-rltrsnyberh.ws-eu73.gitpod.io/";
axios.defaults.headers.post["Content-Type"] = "multipart/form-data";
axios.defaults.withCredentials = true;

export const axiosReq = axios.create();
export const axiosRes = axios.create();