import { createFileRoute, redirect } from "@tanstack/react-router";
import { buildMeta } from "@/lib/seo";

export const Route = createFileRoute("/indialeadership")({
  head: () => buildMeta("/indialeadership"),
  beforeLoad: () => {
    throw redirect({
      to: "/programmes/gilp",
    });
  },
});
