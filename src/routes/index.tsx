import { createFileRoute } from '@tanstack/react-router'
import '../styles/main.css'

export const Route = createFileRoute('/')({
  component: App,
})

function App() {
  return (
    <main>
      <div className="hero">      
        <h1>HI, I'M CHRIS</h1>
        <h2>WebSite Developer</h2>
      </div>
    </main>
  )
}
