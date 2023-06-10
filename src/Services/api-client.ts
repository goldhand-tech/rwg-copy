import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "270406b2b6b04126b449d89dea890279",
  },
});
