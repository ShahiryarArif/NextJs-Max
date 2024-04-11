import { useState } from "react";
import MainHeader from "./components/MainHeader";
import Post from "./components/Post";
import PostList from "./components/PostList";

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <>
      <MainHeader onCreatePost={() => setIsModalOpen(true)} />
      <main>
        <PostList isPosting={isModalOpen} onStopPosting={() => setIsModalOpen(false)} />
      </main>
    </>
  );
}

export default App;
