import { createFileRoute, redirect } from '@tanstack/react-router'
import { buildMeta } from "@/lib/seo";

export const Route = createFileRoute('/gsp')({
  head: () => buildMeta("/gsp"),
  beforeLoad: () => {
    throw redirect({
      to: '/programmes/graduate',
    })
  },
})
