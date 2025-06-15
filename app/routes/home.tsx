import { Link } from "react-router";
import { Card } from "@blog/ui";

export function meta() {
  return [
    { title: "我的博客" },
    { name: "description", content: "个人技术博客" },
  ];
}

// 首页文章列表实现
export default function Home() {
  const posts = [
    { id: 1, title: '第一篇文章', excerpt: '这是第一篇文章的摘要...', date: '2023-10-01' },
    { id: 2, title: '第二篇文章', excerpt: '这是第二篇文章的摘要...', date: '2023-10-02' },
  ];
  return (
    <div className="max-w-4xl mx-auto">
      {posts.map(post => (
        <Card key={post.id}>
          <Link to={`/posts/${post.id}`}>
            <h2>{post.title}</h2>
          </Link>
        </Card>
      ))}
    </div>
  );
}