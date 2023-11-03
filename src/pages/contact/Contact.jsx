import "./contact.css";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const Contact = () => {
  const [name, setName] = useState("");
  const [subject, setSubject] = useState("");
  const [email, setEmail] = useState("");
  const [article, setArticle] = useState("");
  // Form Submit Handler
  const formSubmitHandler = (event) => {
    event.preventDefault();

    if (name.trim() === "") {
      return toast.error("Name is required");
    }

    if (subject.trim() === "") {
      return toast.error("Subject is required");
    }
    if (email.trim() === "") {
      return toast.error("Email is required");
    }
    if (article.trim() === "") {
      return toast.error("Article is required");
    }
    console.log({ name, subject,email,article });
    setName("");
    setSubject("");
    setEmail("")
    setArticle("")
  };
  return (
    <section className="contact">
    <ToastContainer  theme="dark"/>
      <div className="contact-wrapper">
        <div className="contact-item">
          <div className="contact-item-icon">
            <i className="bi bi-house-fill"></i>
            Address
          </div>
          <p className="contact-item-text">Egypt-Cairo</p>
        </div>
        <div className="contact-item">
          <div className="contact-item-icon">
            <i className="bi bi-telephone-fill"></i>
            Phone
          </div>
          <p className="contact-item-text">123-456-789</p>
        </div>
        <div className="contact-item">
          <div className="contact-item-icon">
            <i className="bi bi-envelope-fill"></i>
            Email
          </div>
          <p className="contact-item-text">info@fakeemail.com</p>
        </div>
      </div>
      <form onSubmit={formSubmitHandler} className="contact-form">
        <h2 className="contact-form-title">Contact Us Form</h2>
        <div className="contact-input-wrapper">
          <input value={name} onChange={(e) => setName(e.target.value)} type="text" placeholder="Name *" />
          <input value={subject} onChange={(e) => setSubject(e.target.value)} type="text" placeholder="Subject *" />
          <input value={email}  onChange={(e) => setEmail(e.target.value)} type="text" placeholder="Email *" />
        </div>
        <textarea 
          value={article} 
          onChange={(e) => setArticle(e.target.value)}
          placeholder="Your Message *"
          className="contact-textarea"
          rows="5"
        ></textarea>
        <button className="contact-btn">Send</button>
      </form>
    </section>
  );
};

export default Contact;
