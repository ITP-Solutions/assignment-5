import React from 'react';
import { useParams } from "react-router-dom";
import { fetchPostsByAuthor } from '../api/RedditClient';
import Loader from './Loader';

/**
 * Displays subreddit's posts
 */
export default function AuthorSubreddit() {
  const [posts, setPosts] = React.useState([]);
  const { author } = useParams();

  React.useEffect(() => {
    fetchPostsByAuthor(author)
      .then(res => {
        setPosts(res.filter(p => p.thumbnail || false));
      })
      .catch(err => {
        console.log(err);
      });
  }, [author]);

  return <div>
    <h3>{author}:</h3>
    { !posts.length && <Loader /> }
    { posts && posts.map(post => <>
      <div key={post.title}>
        <p>Title: {post.title}</p>
        <p>Author: {post.author}</p>
        <img src={post.thumbnail} />
      </div>
    </>)}
  </div>
}