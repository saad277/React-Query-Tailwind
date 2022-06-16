import { Get, Put, Post, Delete, Patch } from "./api.helper";

const GetPosts = () => {
  return Get({ url: "/posts" });
};
