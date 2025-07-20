import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/projects/html')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/projects/html"!</div>
}
