import { createFileRoute, Link } from '@tanstack/react-router'
import '../styles/projects.css'

export const Route = createFileRoute('/projects')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <div className="projects">
      <Link className="projects-link" to='/projects/tictactoe'>Tic Tac Toe</Link>
      <Link className="projects-link" to='/projects/hangman'>Hangman</Link>    
    </div>
)}
