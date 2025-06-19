import type dayjs from "dayjs";
import { HttpClient } from "../http-client";
import { articles } from "../mock-data/articles-mock";

export namespace ArticleApi {
  export interface Article {
    id: string;
    title: string;
    excerpt: string;
    createdAt: dayjs.Dayjs;
  }

  export interface ArticleDetail {
    id: string;
    title: string;
    excerpt: string;
    content: string;
    createdAt: dayjs.Dayjs;
  }

  export async function getArticleList() {
    // return HttpClient.get<Article[]>("/api/article/list");
    return articles;
  }

  export async function getArticleDetail(id: string) {
    // return HttpClient.get<ArticleDetail>(`/api/article/${id}`);
    return articles.find((article) => article.id === id);
  }
}
