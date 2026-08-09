import { createFileRoute } from '@tanstack/react-router'
import { buildMeta } from "@/lib/seo";

export const Route = createFileRoute('/programmes/corporate-learning')({
  head: () => buildMeta("/programmes/corporate-learning"),
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/programmes/corporate-learning"!</div>
}
