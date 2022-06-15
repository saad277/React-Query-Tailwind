import { handleFetchError } from "./errorHandler";
import Config from "../Config";

export const fetchUtil = (data) => {
  const {
    url,
    method = "GET",
    body = null,
    token = null,
    image = false,
    abortSignal = null,
    credentials = "same-origin",
  } = data;
  let headers = {};
  if (!image) {
    headers = { "Content-Type": "application/json" };
  }

  if (token) {
    headers = { ...headers, Authorization: token };
  }

  return fetch(`${Config.ENVIRONMENTS[Config.ENVIRONMENT].API_URL}${url}`, {
    method,
    headers,
    body,
    credentials,
    ...(abortSignal && { signal: abortSignal }),
  }).then(handleFetchError);
};
