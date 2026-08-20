import { createFileRoute, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/programmes/graduate")({
  beforeLoad: () => {
    throw redirect({
      to: "/gsp",
    });
  },
});
