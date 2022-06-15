import { fetchUtil } from "../utils/fetchUtil";
import { appendQueryParams } from "../utils/urlUtils";

const Get = ({
  url = "",
  params = {},
  isAuthorized = true,
  abortSignal = null,
}) => {
  let token = null;
  if (isAuthorized) {
    // token = store.getState().userAuth.user.Token;
  }

  return fetchUtil({
    url: appendQueryParams(url, params),
    token,
    abortSignal,
  })
    .then((res) => {
      return Promise.resolve(res);
    })
    .catch((err) => {
      return Promise.reject(err);
    });
};

const Post = ({ url, body = {}, isAuthorized = true, abortSignal = null }) => {
  let token = null;
  if (isAuthorized) {
    // token = store.getState().userAuth.user.Token;
  }
  return fetchUtil({
    url,
    token,
    body: JSON.stringify(body),
    method: "POST",
    abortSignal,
  })
    .then((res) => {
      return Promise.resolve(res);
    })
    .catch((err) => {
      console.log("error", isAuthorized);
      return Promise.reject(err);
    });
};

const Put = ({
  url = "",
  body = {},
  isAuthorized = true,
  abortSignal = null,
}) => {
  let token = null;
  if (isAuthorized) {
    //token = store.getState().userAuth.user.Token;
  }
  return fetchUtil({
    url,
    token,
    body: JSON.stringify(body),
    method: "PUT",
    abortSignal,
  })
    .then((res) => {
      return Promise.resolve(res);
    })
    .catch((err) => {
      return Promise.reject(err);
    });
};

const Delete = ({ url = "", isAuthorized = true, abortSignal = null }) => {
  let token = null;
  if (isAuthorized) {
    // token = store.getState().userAuth.user.Token;
  }
  return fetchUtil({
    url,
    token,
    method: "DELETE",
    abortSignal,
  })
    .then((res) => {
      return Promise.resolve(res);
    })
    .catch((err) => {
      return Promise.reject(err);
    });
};

const Patch = ({
  url = "",
  body = {},
  isAuthorized = true,
  abortSignal = null,
}) => {
  let token = null;
  if (isAuthorized) {
    // token = store.getState().userAuth.user.Token;
  }
  return fetchUtil({
    url,
    token,
    body: JSON.stringify(body),
    method: "PATCH",
    abortSignal,
  })
    .then((res) => {
      return Promise.resolve(res);
    })
    .catch((err) => {
      return Promise.reject(err);
    });
};

export { Get, Post, Put, Delete, Patch };
