import axios from "axios";
export const fetchData = () => {
  return axios.get("/user"); // {name:"wu"}
};

export const sum = (a, b) => {
  return a + b;
};
