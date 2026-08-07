import { createFileRoute, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/post/$slug")({
  loader: ({ params }) => {
    throw redirect({
      to: "/blog/$slug",
      params: { slug: params.slug },
      replace: true,
    });
  },
  component: () => null,
});
