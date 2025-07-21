import { createFileRoute, Link, Outlet, useRouterState } from '@tanstack/react-router'
import '../../styles/projects.css'

export const Route = createFileRoute('/projects')({
  component: ProjectsComponent,
})

function ProjectsComponent() {
  const location = useRouterState({ select: (s) => s.location.pathname })
  
  return (
    <>
      {location === '/projects' ?  
        <div className="projects">
          <Link className="projects-link" to="/projects/tictactoe">Tic Tac Toe</Link>
          <Link className="projects-link" to="/projects/hangman">Hangman</Link>
          <Link className="projects-link" to="/projects/html">HTML</Link>
          <Link className="projects-link" to="/projects/css">CSS</Link>    
        </div> :
        <Outlet />
      }
    </>
    
)}
