/**
 * Given subreddit's name, issue api req and parse response with
 * `title`, `score`, `subredditSubscribers`, and `subredditId`
 * 
 * @param subredditName - input subreddit name ie `javascript`
 * @return promise response obj with above properties
 */
export function fetchPosts(subredditName) {
  return fetch(`https://www.reddit.com/r/${subredditName}.json`)
    .then(res => res.json())
    .then(body => parsePostResponse(body));
}

/**
 * Gets posts by author username
 * @param authorName - 
 * @return promise containing response obj with below props
 */
export function fetchPostsByAuthor(authorName) {
  return fetch(`https://www.reddit.com/user/${authorName}.json`)
    .then(res => res.json())
    .then(body => parsePostResponse(body));
}

/**
 * Given subreddit's id, issue api req and parse response with
 * `title`, `description`, `name` and `subscribers` properties
 * 
 * @param subredditId - the subreddit id
 * @return promise response obj with above properties
 */
export function fetchInfo(subredditId) {
  return fetch(`https://www.reddit.com/api/info.json?id=${subredditId}`)
    .then(res => res.json())
    .then(body => {
      const data = body.data.children[0].data;
      return {
        title: data.title,
        description: data.public_description,
        name: data.display_name_prefixed,
        subscribers: data.subscribers
      };
    });
}

/**
 * Given data object returned by `fetchPosts` above,
 * get the subreddit id wrapped in a promise
 * 
 * @param data returned by posts endpoint
 * @return promise containing subreddit id
 */
export function parseSubredditId(data) {
  return new Promise((resolve, reject) => {
    resolve(data[0].subredditId);
  });
}

/**
 * Parses response body containing posts
 * @param body - response body
 * @return posts with the below properties
 */
function parsePostResponse(body) {
  return body.data.children.map( ({ data }) => {
      return {
        title: data.title,
        score: data.score,
        subredditSubscribers: data.subreddit_subscribers,
        numComments: data.num_comments,
        subredditId: data.subreddit_id,
        thumbnail: (data.thumbnail && data.thumbnail.includes("http")) ?
          data.thumbnail : null,
        author: data.author
      };
  });
}
