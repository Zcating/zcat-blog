import { useParams } from "react-router";

export function meta() {
  return [{ title: "文章" }, { name: "description", content: "个人技术博客" }];
}

export default function PostIdPage() {
  const { id } = useParams();
  // const [open, setOpen] = React.useState(false);
  return (
    <div>
      <h1>文章 {id}</h1>
      <p>这里是文章{id}的内容...</p>
      <a href="/posts">返回列表</a>
    </div>
  );
}
