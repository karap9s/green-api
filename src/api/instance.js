import axios from "axios";

const instance = axios.create({
  baseURL: `https://api.green-api.com/waInstance${localStorage.getItem("id")}/`,
});

export default instance;
