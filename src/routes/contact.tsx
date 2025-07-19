import { createFileRoute } from '@tanstack/react-router'
import '../styles/contact.css'

export const Route = createFileRoute('/contact')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div className="contact-page">
    
    <p className="lead-para">If you have any questions, feel free to reach out!</p>
    <form className="contact-form" action="https://formspree.io/f/your-form-id" method="POST">
      <label htmlFor="name">Name:</label>
      <input type="text" id="name" name="name" required />
      
      <label htmlFor="email">Email:</label>
      <input type="email" id="email" name="email" required />
      
      <label htmlFor="message">Message:</label>
      <textarea id="message" name="message" required></textarea>
      
      <button type="submit">Send</button>
    </form>
    <p className="trail-para">Alternatively, you can reach me at <a className="mail-to" href="mailto:chris@bickers.com">chris@bickers.com</a>.</p>
  </div>
}
