import React, { useState } from "react";
import Post from "./Post";
import classes from "./PostList.module.css";
import NewPost from "./NewPost";
import Modal from "./Modal";

const PostList = (props) => {
  const [enteredBody, setEnteredBody] = useState("");
  const [enteredAuther, setEnteredAuther] = useState("");
  return (
    <>
      {props.isPosting && (
        <Modal isOpen={props.isPosting} onClose={props.onStopPosting}>
          <NewPost
            setEnteredBody={setEnteredBody}
            setEnteredAuther={setEnteredAuther}
          />
        </Modal>
      )}
      <ul className={classes.posts}>
        <Post author="Shahiryar Arif" body="React.js is awesome!" />
        <Post author="Manuel" body="Checkout the full course!" />
      </ul>
    </>
  );
};

export default PostList;
