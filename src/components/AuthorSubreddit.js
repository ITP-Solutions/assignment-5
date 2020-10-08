import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchPostsByAuthor } from "../api/RedditClient";
import Loader from "./Loader";
import PostCard from "./PostCard";

export default function AuthorSubreddit() {
  const [posts, setPosts] = useState([]);
  const { author } = useParams();

  useEffect(() => {
    fetchPostsByAuthor(author).then((postsByAuthor) => {
      const filteredPosts = postsByAuthor.filter((post) => {
        return post.thumbnail;
      });

      setPosts(filteredPosts);
    });
  }, [author]);

  return (
    <div>
      <h3>Posts by {author}</h3>
      {!posts.length && <Loader />}
      <div className="d-flex flex-wrap justify-content-between">
        {posts.map((post) => {
          return <PostCard key={post.id} post={post} hideLink={true} />;
        })}
      </div>
    </div>
  );
}
