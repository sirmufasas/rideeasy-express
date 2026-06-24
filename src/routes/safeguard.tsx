import { createFileRoute, redirect } from '@tanstack/react-router'

export const Route = createFileRoute('/safeguard')({
  beforeLoad: () => {
    throw redirect({ href: 'https://safeguardsecuritysolutions.netlify.app/' })
  },
})