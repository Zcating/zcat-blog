import type { ArticleApi } from "@blog/apis";
import { View } from "@blog/components";

export interface PostContentViewProps {
  value: ArticleApi.Article;
}
export function PostContentView(props: PostContentViewProps) {
  // TODO: Parse content which format is markdown
  return (
    <View className="container mx-auto">
      <h1 className="text-4xl font-bold">{props.value.title}</h1>
      <div className="mt-4">
        {/* <Markdown content={props.value.content} /> */}
      </div>
    </View>
  );
}
