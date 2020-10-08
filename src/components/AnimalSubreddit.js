import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchPosts } from "../api/RedditClient";
import Loader from "./Loader";
import PostCard from "./PostCard";

export default function AnimalSubreddit() {
  const [posts, setPosts] = useState([]);
  const { animal } = useParams();

  useEffect(() => {
    fetchPosts(animal).then((posts) => {
      const filteredPosts = posts.filter((post) => {
        return post.thumbnail;
      });

      setPosts(filteredPosts);
    });
  }, [animal]);

  return (
    <div>
      <h3>Subreddit: {animal}</h3>
      {!posts.length && <Loader />}
      <div className="d-flex flex-wrap justify-content-between">
        {posts.map((post) => {
          return <PostCard key={post.id} post={post} />;
        })}
      </div>
    </div>
  );
}
