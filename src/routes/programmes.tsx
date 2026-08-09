import { createFileRoute, Outlet } from '@tanstack/react-router'
import { buildMeta } from "@/lib/seo";

export const Route = createFileRoute('/programmes')({
  head: () => buildMeta("/programmes"),
  component: ProgrammesLayout,
})

function ProgrammesLayout() {
  return <Outlet />
}
