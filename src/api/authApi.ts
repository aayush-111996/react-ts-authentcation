import axios from "axios";

export const loginApi = (body: string) =>
  axios.post("https://dummyjson.com/auth/login", body, {
    headers: {
      "Content-Type": "application/json",
    },
  });
