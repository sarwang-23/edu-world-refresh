import { createFileRoute, redirect } from '@tanstack/react-router'
import { buildMeta } from "@/lib/seo";

export const Route = createFileRoute('/america-forward')({
  head: () => buildMeta("/america-forward"),
  beforeLoad: () => {
    throw redirect({
      to: '/programmes/america-forward',
    })
  },
})
