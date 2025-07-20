import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/projects/project1')({
  component: RouteComponent,
})

function RouteComponent() {
  return <p className="nav-link" >Tic Tac Toe</p>
}
