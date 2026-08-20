import { createFileRoute, Outlet } from "@tanstack/react-router";
import { buildMeta } from "@/lib/seo";

export const Route = createFileRoute("/blog")({
  head: () => buildMeta("/blog"),
  component: BlogLayout,
});

function BlogLayout() {
  return <Outlet />;
}
