import axios from "axios";

export const authenticatedAxios = () => {
  // const token = localStorage.getItem("token");
  return axios.create({
    headers: {
      //     Authorization: token,
      "Access-Control-Allow-Origin": "*"
    },
    // baseURL: "http://localhost:5678",
    baseURL: "https://nodemenu.herokuapp.com/"
  });
};
