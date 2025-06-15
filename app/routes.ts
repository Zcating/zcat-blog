import { type RouteConfig, index, prefix, route } from "@react-router/dev/routes";
export default [
  index("routes/home.tsx"),
  route("posts", "routes/posts/index.tsx"),
  route("posts/:id", "routes/posts/post-id.tsx"),
] satisfies RouteConfig;
