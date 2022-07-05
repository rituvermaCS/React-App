import request from "request";

const instance = request.create({
  baseURL: "https://jsonplaceholder.typicode.com/",
});
export default instance;
