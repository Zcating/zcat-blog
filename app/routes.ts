import { type RouteConfig, index, route } from "@react-router/dev/routes";
export default [
  index("routes/home/home-page.tsx"),
  route("post-board", "routes/post-board/post-board-page.tsx"),
  route("post-board/:id", "routes/post-board/post-board-detail-page.tsx"),
  route("about", "routes/about/about-page.tsx"),
  route("gallery", "routes/gallery/gallery-list-page.tsx"),
  route("gallery/:id", "routes/gallery/gallery-detail-page.tsx"),
  route("moments", "routes/moments/moments-page.tsx"),
] satisfies RouteConfig;
