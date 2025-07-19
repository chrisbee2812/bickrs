import { createFileRoute } from '@tanstack/react-router'
import { useEffect, useState } from 'react'
import '../styles/about.css'

export const Route = createFileRoute('/about')({
  component: RouteComponent,
})

function RouteComponent() {

const texts = [
    <><div className="abouth1"><h2>Skills:</h2></div><div className="abouth2 scroll-container"><div className="scroll-text" id="scrollText"></div><div className="text-block"><h3>HTML</h3></div></div><div className="abouth3"><p>the crux of a website</p></div></>,
    <><div className="abouth1"><h2>Skills:</h2></div><div className="abouth2 scroll-container"><div className="scroll-text" id="scrollText"></div><div className="text-block"><h3>CSS</h3></div></div><div className="abouth3"><p>the style of a website</p></div></>,
    <><div className="abouth1"><h2>Skills:</h2></div><div className="abouth2 scroll-container"><div className="scroll-text" id="scrollText"></div><div className="text-block"><h3>JavaScript</h3></div></div><div className="abouth3"><p>the effects of a website</p></div></>,
    <><div className="abouth1"><h2>Skills:</h2></div><div className="abouth2 scroll-container"><div className="scroll-text" id="scrollText"></div><div className="text-block"><h3>React</h3></div></div><div className="abouth3"><p>the interactivity of a website</p></div></>,
    <><div className="abouth1"><h2>What I Do:</h2></div><div className="abouth3"><p>Design and develop responsive websites that look great on all devices.</p></div></>,
    <><div className="abouth1"><h2>What I Do:</h2></div><div className="abouth3"><p>Write clean, semantic, and maintainable code using HTML5, CSS3, and JavaScript.</p></div></>,
    <><div className="abouth1"><h2>What I Do:</h2></div><div className="abouth3"><p>Build dynamic and interactive user interfaces with modern frameworks.</p></div></>,
    <><div className="abouth1"><h2>What I Do:</h2></div><div className="abouth3"><p>Stay up-to-date with the latest trends and technologies in software development.</p></div></>,
    <><div className="abouth1"><h2>What I Do:</h2></div><div className="abouth3"><p>Optimize websites for speed, performance, and SEO.</p></div></>,
    <><div className="abouth1"><h2>Why me?</h2></div><div className="abouth3"><p>I’m a problem solver who thrives on challenges and loves finding creative solutions.</p></div></>,
    <><div className="abouth1"><h2>Why me?</h2></div><div className="abouth3"><p>I’m passionate about creating seamless user experiences and paying attention to the smallest details.</p></div></>,
    <><div className="abouth1"><h2>Why me?</h2></div><div className="abouth3"><p>I’m a team player who communicates effectively and delivers projects on time.</p></div></>
]

function showNextText() {
    const [currentText, setCurrentText] = useState(texts[0]);
    useEffect(() => {
        const intervalId = setInterval(() => {
            setCurrentText(prevText => {
                const currentIndex = texts.indexOf(prevText);
                const nextIndex = (currentIndex + 1) % texts.length;
                return texts[nextIndex];
            });
        }, 2500); // Change text every 2 seconds
        return () => clearInterval(intervalId);
    }, []);
    return currentText;
}
    

  return (
    <main>
      <div className="about">
        {showNextText()}
      </div>
    </main>
)
}
