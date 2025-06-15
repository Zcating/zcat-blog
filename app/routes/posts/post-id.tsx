import { useParams } from "react-router";


export default function PostId() {
  const { id } = useParams();
  
  return (
    <div>
      <h1>文章 {id}</h1>
      <p>这里是文章{id}的内容...</p>
      <a href="/posts">返回列表</a>
    </div>
  );
}