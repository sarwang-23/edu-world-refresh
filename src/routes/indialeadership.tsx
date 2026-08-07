import { createFileRoute, redirect } from '@tanstack/react-router'

export const Route = createFileRoute('/indialeadership')({
  beforeLoad: () => {
    throw redirect({
      to: '/programmes/gilp',
    })
  },
})
