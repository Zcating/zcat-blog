import { HttpClient } from "../http-client";

export namespace ArticleApi {
  export interface Article {
    id: string;
    title: string;
    abstract: string;
  }

  export interface ArticleDetail {
    id: string;
    title: string;
    abstract: string;
    content: string;
  }

  export async function getArticles() {
    return HttpClient.get<Article[]>("/api/article/list");
  }

  export async function getArticleDetail(id: string) {
    return HttpClient.get<ArticleDetail>(`/api/article/${id}`);
  }
}
