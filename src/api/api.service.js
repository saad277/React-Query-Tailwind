import { Get, Put, Post, Delete, Patch } from "./api.helper";

export const getPosts = () => {
  return Get({ url: "/posts" });
};
