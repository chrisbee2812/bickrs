import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/projects/css')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/projects/css"!</div>
}
