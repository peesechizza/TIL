import axios from "axios";

const instance = axios.create({
  baseURL: "https://api.themoviedb.org/3",
  params: {
    api_key: "b96c3092d214a4f2e054322908622fa3",
    language: "ko=KR",
  },
});

export default instance;
