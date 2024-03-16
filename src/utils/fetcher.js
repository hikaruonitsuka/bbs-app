import axios from "axios";
import { BASE_API_URL } from "../config";

export const fetcher = (url) =>
  axios.get(`${BASE_API_URL}/${url}`).then((res) => res.data);
