import React, { useState } from "react";
import "./contact.css";

function ContactSection() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const sendMessage = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await fetch(
        "https://land-backo.onrender.com/api/contact",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(form),
        }
      );

      const data = await res.json();

      if (data.success) {
        alert("Message sent successfully ✅");
        setForm({ name: "", email: "", message: "" });
      } else {
        alert(data.message || "Failed ❌");
      }
    } catch (err) {
      alert("Error sending message");
    }

    setLoading(false);
  };

  return (
   <section id="contact" className="contact">
      <div className="contact-container">
        {/* LEFT SIDE */}
        <div className="contact-info">
          <p className="section-label">GET IN TOUCH</p>

          <h2 className="gradient-title">
            Let’s Build <br /> Something Great.
          </h2>

          <p className="contact-desc">
            Got a project in mind? Tell us about it — we’ll get back asap.
          </p>

          <div className="info-item"> hibuzin@gmail.com</div>
          <div className="info-item"> Tamilnadu, India</div>
        </div>

        {/* RIGHT SIDE FORM */}
        <form className="contact-form" onSubmit={sendMessage}>
          <h3>ANY QUERIES</h3>

          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={form.name}
            onChange={handleChange}
            required
          />

          <input
            type="email"
            name="email"
            placeholder="Email Address"
            value={form.email}
            onChange={handleChange}
            required
          />

          <textarea
            name="message"
            placeholder="Tell us about your project..."
            rows="4"
            value={form.message}
            onChange={handleChange}
            required
          ></textarea>

          <button type="submit">
            {loading ? "Sending..." : "Send Message →"}
          </button>
        </form>
      </div>
    </section>
  );
}

export default ContactSection;