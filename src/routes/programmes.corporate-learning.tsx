import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/programmes/corporate-learning')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/programmes/corporate-learning"!</div>
}
