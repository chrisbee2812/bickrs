import { createFileRoute } from '@tanstack/react-router'
import '../styles/projects.css'

export const Route = createFileRoute('/projects')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div className="projects"><h4>COMING SOON!</h4></div>
}
