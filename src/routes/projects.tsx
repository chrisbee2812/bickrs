import { createFileRoute, Link } from '@tanstack/react-router'
import '../styles/projects.css'

export const Route = createFileRoute('/projects')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div className="projects">
      <Link to='/projects/tictactoe'>Tic Tac Toe</Link>
      <Link to='/projects/hangman'>Hangman</Link>    
    </div>
}
