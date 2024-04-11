import React from "react";
import Post from "./Post";
import classes from "./PostList.module.css";
import NewPost from "./NewPost";

const PostList = () => {
  const [enteredBody, setEnteredBody] = useState("");
  const [enteredAuther, setEnteredAuther] = useState("");
  return (
    <>
      <NewPost
        setEnteredBody={setEnteredBody}
        setEnteredAuther={setEnteredAuther}
      />
      <ul className={classes.posts}>
        <Post author="Shahiryar Arif" body="React.js is awesome!" />
        <Post author="Manuel" body="Checkout the full course!" />
      </ul>
    </>
  );
};

export default PostList;
