const names = ["Shahiryar", "Manual"];

function Post({author, body}) {
  return (
    <div>
      <p>{author}</p>
      <p>{body}</p>
    </div>
  );
}

export default Post;
