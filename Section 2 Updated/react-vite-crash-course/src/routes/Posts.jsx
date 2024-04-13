import { useState } from "react";
import MainHeader from "../components/MainHeader";
import Post from "../components/Post";
import PostList from "../components/PostList";
import { Outlet } from "react-router-dom";

function Posts() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <>
      <Outlet />
      <PostList
        isPosting={isModalOpen}
        onStopPosting={() => setIsModalOpen(false)}
      />
    </>
  );
}

export default Posts;

export async function loader() {
  const response = await fetch("http://localhost:8080/posts");
  const data = await response.json();
  return data.posts;
}
