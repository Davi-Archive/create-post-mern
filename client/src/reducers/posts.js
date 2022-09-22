export default function posts(posts = [], action) {
  switch (action.type) {
    case "UPDATE":
      return posts.map((post)=> post._id === action.payload._id? action.payload : post);
    case "FETCH_ALL":
      return posts;
    case "CREATE":
      return [...posts, action.payload];
    default:
      return posts;
  }
};
