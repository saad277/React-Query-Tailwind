import { Get, Put, Post, Delete, Patch } from "./api.helper";
import Config from "../Config";

// **** AUTH APIS
const GetMe = () => {
  return Get({ url: "/user/me" });
};
