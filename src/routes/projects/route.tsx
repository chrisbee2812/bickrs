import { createFileRoute, Link } from '@tanstack/react-router'
import '../../styles/projects.css'

export const Route = createFileRoute('/projects')({
  component: ProjectsComponent,
})

function ProjectsComponent() {
  return (
    <div className="projects">
      <Link className="projects-link" to="/projects/tictactoe">Tic Tac Toe</Link>
      <Link className="projects-link" to="/projects/hangman">Hangman</Link>
      <Link className="projects-link" to="/projects/html">HTML</Link>
      <Link className="projects-link" to="/projects/css">CSS</Link>    
    </div>
)}
