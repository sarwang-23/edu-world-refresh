import { createFileRoute, redirect } from '@tanstack/react-router'

export const Route = createFileRoute('/gsp')({
  beforeLoad: () => {
    throw redirect({
      to: '/programmes/graduate',
    })
  },
})
