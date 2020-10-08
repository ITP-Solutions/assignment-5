/**
 * Given subreddit's name, issue api req and parse response with
 * `title`, `score`, `subredditSubscribers`, and `subredditId`
 *
 * @param subredditName - input subreddit name ie `javascript`
 * @return promise response obj with above properties
 */
export function fetchPosts(subredditName) {
  return fetch(`https://www.reddit.com/r/${subredditName}.json`)
    .then((res) => res.json())
    .then((body) => parsePostResponse(body));
}

/**
 * Gets posts by author username
 * @param authorName -
 * @return promise containing response obj with below props
 */
export function fetchPostsByAuthor(authorName) {
  return fetch(`https://www.reddit.com/user/${authorName}.json`)
    .then((res) => res.json())
    .then((body) => parsePostResponse(body));
}

/**
 * Parses response body containing posts
 * @param body - response body
 * @return posts with the below properties
 */
function parsePostResponse(body) {
  return body.data.children.map(({ data }) => {
    return {
      id: data.id,
      title: data.title,
      score: data.score,
      subredditSubscribers: data.subreddit_subscribers,
      numComments: data.num_comments,
      subredditId: data.subreddit_id,
      thumbnail:
        data.thumbnail && data.thumbnail.includes("http")
          ? data.thumbnail
          : null,
      author: data.author,
    };
  });
}
