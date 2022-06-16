import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";

import { Navbar } from "./components/NavBar";
import Posts from "./views/Posts/Posts";
import CreatePost from "./views/CreatePosts/CreatePost";

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path={"/"} element={<Posts />} />
        <Route path={"/create-post"} element={<CreatePost />} />
        <Route path="*" element={<Navigate replace to="/" />} />
      </Routes>
    </>
  );
};

export default App;
