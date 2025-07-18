import { createFileRoute } from '@tanstack/react-router'
import React, { useEffect, useState } from 'react'
import '../styles/main.css'

export const Route = createFileRoute('/')({
  component: App,
})

function App() {

 
    const texts = [
      <h2><span className="span1">Website Developer</span></h2>,
      <h2><span className="span1">Website Designer</span></h2>, 
      <h2><span className="span1">JavaScript Developer</span></h2>, 
      <h2><span className="span1">React Developer</span></h2>, 
      <h2><span className="span1">Father</span></h2>
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
        }, 4000); // Change text every 4 seconds
        return () => clearInterval(intervalId);
      }, []);
      return currentText;
    }

  return (
    <main>
      <div className="hero">      
        <h1>HI, I'M CHRIS</h1>
        {textSwapper()}
      </div>
    </main>
  )
}
