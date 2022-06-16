import { Get, Put, Post, Delete, Patch } from "./api.helper";

export const getPosts = () => {
  return Get({ url: "/posts" });
};

export const createPost = (body) => {
  return Post({ url: "/posts", body });
};
