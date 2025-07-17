import { createFileRoute } from '@tanstack/react-router'
import '../styles/main.css'

export const Route = createFileRoute('/')({
  component: App,
})

function App() {
  return (
    <main>
      <section>
        <div>
          <h2>About Me</h2>
          <p>Hi, I’m Chris Bicknell, a passionate and creative <strong>Front-End Web Developer</strong> with a knack for turning ideas into visually stunning 
            and user-friendly websites. I specialize in crafting responsive, intuitive, and high-performance web experiences that leave a 
            lasting impression.</p>
        </div>
        <div>
          <h2>What I Do</h2>
          <ul>
            <li>Design and develop <strong>responsive websites</strong> that look great on all devices.</li>
            <li>Write clean, semantic, and maintainable code using <strong>HTML5, CSS3, and JavaScript</strong>.</li>
            <li>Build dynamic and interactive user interfaces with modern frameworks like <strong>React.js, Vue.js, or Angular</strong>.</li>
            <li>Optimize websites for speed, performance, and SEO.</li>
            <li>Stay up-to-date with the latest trends and technologies in software development.</li>
          </ul>
        </div>
        <div>
          <h2>Why Work With Me?</h2>
          <ul>
            <li>I’m a problem solver who thrives on challenges and loves finding creative solutions.</li>
            <li>I’m passionate about creating seamless user experiences and paying attention to the smallest details.</li>
            <li>I’m a team player who communicates effectively and delivers projects on time.</li>
          </ul>  
        </div>
      </section>

      <section>
        <div>
          <h2>Skills</h2>
          <ul>
            <li>HTML</li>
            <li>CSS</li>
            <li>JavaScript</li>
            <li>Node.js</li>
            <li>AWS</li>
            <li>React</li>
            <li>SQL</li>
            <li>PHP</li>
          </ul>
        </div>
      </section>

      <section>
        <div>
          <h2>Projects</h2>
          <div>
            <a href="#">
            <div>
              <h3>Discworld Random Sentence Generator</h3>
              <p>A Codecademy project to create a random sentence generator.</p>
              <p>This has been extended from the original requirements to include whether it occurs in the future, 
                present or past, and sometimes the action willl be performed with another character. Extended from 12.5k 
                possible sentences to over 2 million possible sentences. I have also now included gender specifics (his or her 
                instead of their, himself or herself instead of themself).</p>
            </div>
            </a>
            <a href="#">
            <div>
              <h3>Calculator</h3>
              <p>A simple calculator.</p>
              <p>This will progress to be a more scientific calculator with some fabulous extras!!!</p>
            </div>
            </a>
            <a href="#">
            <div>
              <h3>Vegetable Planting Guide for France</h3>
              <p>Spending half my time in France i decided to create a veg calendar for France.</p>
              <p>This will soon be more interactive, with more veg and personal calendars.</p>
            </div>
            </a>
          </div>
        </div>
      </section>
    </main>
  )
}
