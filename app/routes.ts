import { type RouteConfig, index, route } from "@react-router/dev/routes";
export default [
  index("routes/home/home-page.tsx"),
  route("posts", "routes/posts/posts-page.tsx"),
  route("posts/:id", "routes/posts/post-id-page.tsx"),
  route("about", "routes/about/about-page.tsx"),
  route("gallery", "routes/gallery/gallery-page.tsx"),
  route("moments", "routes/moments/moments-page.tsx"),
] satisfies RouteConfig;
