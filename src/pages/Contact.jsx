import React, { useRef, useState } from "react";
import "./Contact.css";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const form = useRef();
  const [sent, setSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_k9vmj4e",       // Ton service ID EmailJS
        "template_6usi78s",      // Ton template ID
        form.current,
        "D9LDCQIfbZ6N5hcwx"        // Ta clé publique
      )
      .then(() => {
        setSent(true);
        form.current.reset();
      })
      .catch((err) => {
        console.error("EmailJS Error:", err);
      });
  };

  return (
    <section className="contact-container" id="contact">
      <h2>Contact</h2>
      <form ref={form} onSubmit={handleSubmit} className="contact-form">
        <input type="text" name="user_name" placeholder="Nom" required />
        <input type="email" name="user_email" placeholder="Email" required />
        <textarea name="message" placeholder="Message" required></textarea>
        <button type="submit">Envoyer</button>
        {sent && <p className="success-msg">✅ Message envoyé avec succès !</p>}
      </form>
    </section>
  );
};

export default Contact;
