import React from "react";
import { Link } from "react-router-dom";

export default function PostCard({ post, hideLink = false }) {
  return (
    <div className="card mb-3" style={{ width: "200px" }}>
      <img src={post.thumbnail} className="card-img-top" alt={post.title} />
      <div className="card-body">
        <h6 className="card-title">{post.title}</h6>
        {!hideLink && (
          <Link to={`/authors/${post.author}`} className="btn btn-primary">
            View posts by {post.author}
          </Link>
        )}
      </div>
    </div>
  );
}
