import { useState } from "react";
import classes from "./NewPost.module.css";

function NewPost(props) {
    const [enteredBody, setEnteredBody] = useState("");
    const [enteredAuther, setEnteredAuther] = useState("");
    
    function submitHandler(event) {
        event.preventDefault();
        const post = {  body: enteredBody, author: enteredAuther };     
        props.onAddPost(post);
        setEnteredBody(""); 
        setEnteredAuther("");
        props.onCancel();
    }

  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <p>
        <label htmlFor="body">Text</label>
        <textarea
          id="body"
          required
          rows={3}
          onChange={(e) => setEnteredBody(e.target.value)}
        />
      </p>
      <p>
        <label htmlFor="name">Your name</label>
        <input
          type="text"
          id="name"
          required
          onChange={(e) => setEnteredAuther(e.target.value)}
        />
      </p>
      <p className={classes.actions}>
        <button type="button" onClick={props.onCancel}>Cancel</button>
        <button>Submit</button>
      </p>
    </form>
  );
}

export default NewPost;
