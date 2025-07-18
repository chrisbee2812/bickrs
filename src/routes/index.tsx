import { createFileRoute } from '@tanstack/react-router'
import { useEffect, useState } from 'react'
import '../styles/main.css'

export const Route = createFileRoute('/')({
  component: App,
})

function App() {

 
    const texts = [
      <h2>Website <span className="span1">Developer</span></h2>,
      <h2>Website <span className="span1">Designer</span></h2>, 
      <h2>JavaScript <span className="span1">Developer</span></h2>, 
      <h2>React <span className="span1">Developer</span></h2>, 
      <h2><span className="span2">Father</span></h2>
    ]

    function textSwapper() {
      const [currentText, setCurrentText] = useState(texts[0]);
      useEffect(() => {
        const intervalId = setInterval(() => {
          setCurrentText(prevText => {
            const currentIndex = texts.indexOf(prevText);
            const nextIndex = (currentIndex + 1) % texts.length;
            return texts[nextIndex];
          });
        }, 3000); // Change text every 4 seconds
        return () => clearInterval(intervalId);
      }, []);
      return currentText;
    }

  return (
    <main>
      <div className="hero"> 
        <div className="heroh1">
          <h1>HI, I'M CHRIS</h1>
        </div>
        <div className="heroh2">
          {textSwapper()}
        </div>
      </div>
    </main>
  )
}
