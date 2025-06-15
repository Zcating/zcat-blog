import { Link } from "react-router";


export default function Posts() {
  return (
    <div>
      <h1>博客文章</h1>
      <ul>
        <li><Link to="/posts/1">第一篇文章</Link></li>
        <li><Link to="/posts/2">第二篇文章</Link></li>
      </ul>
    </div>
  );
}