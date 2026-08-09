import { createFileRoute, redirect } from '@tanstack/react-router'

export const Route = createFileRoute('/programmes/gilp')({
  beforeLoad: () => {
    throw redirect({
      to: '/indialeadership',
    })
  },
})