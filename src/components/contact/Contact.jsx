import { useState } from "react";
import emailjs from "emailjs-com";

import "./contact.scss";

export default function Contact() {
  const [message, setMessage] = useState(false);

  function sendEmail(e) {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_ttaudwr",
        "template_52c09ff",
        e.target,
        "user_BhX207N6r6qiRvXJq4Sxq"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    setMessage(true);
    e.target.reset();
  }

  return (
    <div className="contact" id="contact">
      <div className="left">
        <img src="/PorfolioPage/assets/shake.svg" alt="handshake" />
      </div>
      <div className="right">
        <h2>Contact.</h2>
        <form onSubmit={sendEmail}>
          <input required type="email" placeholder="Email" name="from_name" />
          <textarea required name="message" placeholder="Message"></textarea>
          <button type="submit">Send</button>
          {message && <span>Thanks, I'll reply ASAP</span>}
        </form>
      </div>
    </div>
  );
}
