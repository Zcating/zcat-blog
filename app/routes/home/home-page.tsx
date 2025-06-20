import { View } from "@blog/components";
import { ArticleApi } from "@blog/apis";
import type { Route } from "./+types/home-page";
import { PostExcerptCard } from "@blog/modules";
import { Link } from "react-router";

export function meta() {
  return [
    { title: "我的博客" },
    { name: "description", content: "个人技术博客" },
  ];
}

export async function clientLoader() {
  return {
    articles: await ArticleApi.getArticleList(),
  };
}

// 首页文章列表实现
export default function HomePage(props: Route.ComponentProps) {
  const articles = props.loaderData.articles;
  return (
    <View className="max-w-4xl mx-auto space-y-4">
      {articles.map((article) => (
        <Link to={`/post-board/${article.id}`} className="block">
          <PostExcerptCard value={article} />
        </Link>
      ))}
    </View>
  );
}
