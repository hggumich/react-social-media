import React from "react";

function CreatePost({ user, setPosts, posts }) {
  const [content, setContent] = React.useState("");
  const [image, setImage] = React.useState(null);

  function handleSubmit(event) {
    event.preventDefault();
    const post = { content, image, user };
    const newPosts = [post, ...posts];
    setPosts(newPosts);
    setContent("");
  }

  return (
    <div>
      <h1>Create New Post</h1>
      <form onSubmit={handleSubmit}>
        <input
          onChange={(event) => setContent(event.target.value)}
          type="text"
          placeholder="Add Post Content"
          value={content}
        />
        <input
          onChange={(event) => setImage(event.target.files[0])}
          type="file"
        />
        <button type="submit">Submit Post</button>
      </form>
    </div>
  );
}

export default CreatePost;
