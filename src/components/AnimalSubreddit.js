import React from 'react';
import { useParams, Link } from "react-router-dom";
import { fetchPosts } from '../api/RedditClient';
import Loader from './Loader';

/**
 * Displays subreddit's posts
 */
export default function AnimalSubreddit() {
  const [posts, setPosts] = React.useState([]);
  const { animal } = useParams();

  React.useEffect(() => {
    fetchPosts(animal)
      .then(res => {
        setPosts(res.filter(p => p.thumbnail || false));
      })
      .catch(err => {
        console.log(err);
      });
  }, [animal]);

  return <div>
    <h3>{animal}:</h3>
    { !posts.length && <Loader /> }
    { posts && posts.map(post => <>
      <div key={post.title}>
        <p>Title: {post.title}</p>
        <p>Author: <Link to={`/authors/${post.author}`}>{post.author}</Link></p>
        <img src={post.thumbnail} />
      </div>
    </>)}
  </div>
}