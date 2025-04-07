import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";

const ViewPost = () => {
  const { id } = useParams();
  const [post, setPost] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:5007/api/posts/${id}`)
      .then((res) => res.json())
      .then((data) => setPost(data))
      .catch((err) => console.error("Error loading post:", err));
  }, [id]);

  if (!post) return <p>Loading...</p>;

  return (
    <div className="view-post">
      <h2>{post.title}</h2>
      <p><strong>By:</strong> {post.author}</p>
      <p><strong>Date:</strong> {new Date(post.createdAt).toLocaleDateString()}</p>
      <p>{post.content}</p>
      <Link to={`/edit/${post._id}`}>Edit Post</Link>
    </div>
  );
};

export default ViewPost;
