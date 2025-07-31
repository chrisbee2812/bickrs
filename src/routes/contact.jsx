import { createFileRoute } from '@tanstack/react-router'
import { useState } from "react";
import '../styles/contact.css'

export const Route = createFileRoute('/contact')({
  component: RouteComponent,
})

function RouteComponent() {
  const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    console.log(event)
    event.preventDefault();
    setResult("Sending....");

    const formData = new FormData(event.target);

    formData.append("access_key", "158dbce8-911f-44a4-a5a4-a3b839a32264");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
    <>
      <div className="contact-page">
        <p className="lead-para">If you have any questions, feel free to reach out!</p>
      <form className="contact-form" onSubmit={onSubmit}>
        <label htmlFor="name">Name</label>
        <input type="text" id="name" name="name" required />

        <label htmlFor="email">Email</label>
        <input type="email" id="email" name="email" required />

        <label htmlFor="messageText">Message</label>
        <textarea id="messageText" name="messageText" required></textarea>

        <button type="submit">Send</button>
      </form>
      <p className="trail-para">Alternatively, you can reach me at <a className="mail-to" href="mailto:chris@bickers.com">chris@bickers.com</a>.</p>
      <span className="result-para">{result}</span>
      </div>

      
    </>
  )
}
