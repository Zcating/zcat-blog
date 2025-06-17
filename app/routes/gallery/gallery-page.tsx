export function meta() {
  return [{ title: "相册" }, { name: "description", content: "个人技术博客" }];
}

export default function GalleryPage() {
  return (
    <div>
      <h1>Gallery</h1>
      <p>这里是Gallery的内容...</p>
      <a href="/">返回首页</a>
    </div>
  );
}
