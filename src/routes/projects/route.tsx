import { createFileRoute, Link, useRouterState } from '@tanstack/react-router'
import '../../styles/projects/projects.css'

export const Route = createFileRoute('/projects')({
  component: ProjectsComponent,
})

function ProjectsComponent() {
  const location = useRouterState({ select: (s) => s.location.pathname })
  console.log(location)
  
  return (
    <>
      
      <div className="projects"> 
        <div className="project-section">
          <h2>Games:</h2>
          <Link className="projects-link" to="/projects/tictactoe">Tic Tac Toe</Link>
          <Link className="projects-link" to="/projects/hangman">Hangman</Link>
        </div>
        <div className="project-section">
          <h2>Reference:</h2>
          <Link className="projects-link" to="/projects/html">HTML</Link>
          <Link className="projects-link" to="/projects/css">CSS</Link>    
        </div> 
        </div>
      
    </>
  )}



