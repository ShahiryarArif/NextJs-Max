import React from "react";
import Post from "./Post";
import classes from "./PostList.module.css";

const PostList = () => {
  return (
    <ul className={classes.posts}>
      <Post author="Shahiryar Arif" body="React.js is awesome!" />
      <Post author="Manuel" body="Checkout the full course!" />
    </ul>
  );
};

export default PostList;
