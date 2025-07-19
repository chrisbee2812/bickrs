import '../styles/footer.css'
import envelope from '../images/envelope.svg'
import linkedin from '../images/linkedin.svg'
import github from '../images/github.svg'

export default function Footer() {
    return (
    <footer>
        <p>This web site is currently being developed, more to come soon!</p>        
        <div>
            <a href="mailto:chris@bickrs.com" id="email-link">
                <img className="icons" src={envelope} alt="Email Icon" />
            </a>
            <a href="https://www.linkedin.com/in/chris-bicknell-69a9a136/" target="_blank" id="linkedin-link">
                <img className="icons" src={linkedin} alt="LinkedIn Icon" />
            </a>
            <a href="https://github.com/chrisbee2812/" target="_blank" id="github-link">
                <img className="icons" src={github} alt="GitHub Icon" />
            </a>
        </div>
    </footer>
    )
}

