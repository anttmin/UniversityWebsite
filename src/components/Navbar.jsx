import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <nav>
       <NavLink to={"/"}><h1>Blog.IO</h1></NavLink>
        <div>
          <NavLink to={"/"}  className="post">Posts</NavLink>
          <NavLink to={"/create-post"} className=" creates">CreatePosts</NavLink>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
