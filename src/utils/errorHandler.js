import { ServerCodes } from "../constants";

export const handleFetchError = async (res) => {
  if (
    res.status >= ServerCodes.BAD_REQUEST &&
    res.status < ServerCodes.CONNECTION_TIMED_OUT
  ) {
    const response = await res.clone().json();
    let errRes = {
      ...response,
      Message: response.Message,
      Status: res.status,
    };
    if (res.status === ServerCodes.UNAUTHORIZED) {
      localStorage.clear();
    }
    throw errRes;
  }
  return res.json();
};
