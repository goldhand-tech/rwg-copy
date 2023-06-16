import axios, { AxiosRequestConfig } from "axios";
import { Game } from "../Hooks/useGames";

const axiosInstance = axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "270406b2b6b04126b449d89dea890279",
  },
});

export interface FetchResponse<T> {
  count: number;
  next: string | null;
  results: T[];
}

class ApiClient<T> {
  endPoint: string;

  constructor(endPoint: string) {
    this.endPoint = endPoint;
  }

  getAll = (config: AxiosRequestConfig) => {
    return axiosInstance
      .get<FetchResponse<T>>(this.endPoint, config)
      .then((res) => res.data);
  };

  get = (id: string | number) => {
    return axiosInstance
      .get<T>(this.endPoint + "/" + id)
      .then((res) => res.data);
  };
}

export default ApiClient;
