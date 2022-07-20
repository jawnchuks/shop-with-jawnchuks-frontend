/* eslint-disable no-mixed-spaces-and-tabs */
import axios from "axios";
import { backendApiURL } from "@config/index";

const instanceSettings = {
  baseURL: backendApiURL,
  timeout: 300000,
};
let jwt = "ghvdnjklmvlkmdflkvmvkmd";

function formatResponseError({ response, ...rest }) {
  let formatedError = {
    message:
      response?.data?.message === "An internal server error occurred"
        ? "Something went wrong, try again"
        : response?.data?.message?.[0]?.messages?.[0]?.message ===
          "An internal server error occurred"
        ? "Something went wrong, try again"
        : response?.data?.message?.[0]?.messages?.[0]?.message ||
          response?.data?.message ||
          "Something went wrong, try again",
    ...rest,
  };
  return Promise.reject(formatedError);
}

let authInstanceAxios = axios.create({
  ...instanceSettings,
  headers: { Authorization: `Bearer ${jwt}` },
});
let publicInstanceAxios = axios.create(instanceSettings);

publicInstanceAxios.interceptors.response.use(null, formatResponseError);
authInstanceAxios.interceptors.response.use(null, formatResponseError);

export { publicInstanceAxios, authInstanceAxios };
