import React, { useState } from 'react';
import { toast } from "react-toastify";

export default function ContactForm() {
  const [loading, setLoading] = useState(false);
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleInputChange = event => {
    const { name, value } = event.target;
    setFormState(prev => ({
      ...prev,
      [name]: value,
    }));
  };

const onSubmit = async (event) => {
  event.preventDefault();
  setLoading(true);

  try {
    const res = await fetch("https://formspree.io/f/mvzljlrl", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(formState),
    });

    const data = await res.json();

    if (res.ok) {
      setFormState({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
      toast.success("Message sent successfully!");
    } else {
      toast.error(data.error || "Something went wrong");
    }
  } catch (error) {
    toast.error("Failed to send message");
  } finally {
    setLoading(false);
  }
};

  return (
    <form id="contact-form" onSubmit={onSubmit}>
      <div className="grid grid-cols-1 gap-x-3 gap-y-6 md:grid-cols-2">
        <div>
          <div className="form-group">
            <label htmlFor="contact-name" className="form-label">
              Your Name
            </label>
            <input
              id="contact-name"
              name="name"
              autoComplete="name"
              placeholder="Your name *"
              className="form-control"
              type="text"
              value={formState.name}
              onChange={handleInputChange}
              required
            />
          </div>
        </div>
        <div>
          <div className="form-group">
            <label htmlFor="contact-email" className="form-label">
              Your Email
            </label>
            <input
              id="contact-email"
              name="email"
              autoComplete="email"
              placeholder="Your email *"
              className="form-control"
              type="email"
              value={formState.email}
              onChange={handleInputChange}
              required
            />
          </div>
        </div>
        <div className="md:col-span-2">
          <div className="form-group">
            <label htmlFor="contact-subject" className="form-label">
              Subject
            </label>
            <input
              id="contact-subject"
              name="subject"
              placeholder="Subject *"
              className="form-control"
              type="text"
              value={formState.subject}
              onChange={handleInputChange}
              required
            />
          </div>
        </div>
        <div className="md:col-span-2">
          <div className="form-group">
            <label htmlFor="contact-message" className="form-label">
              Your message
            </label>
            <textarea
              id="contact-message"
              name="message"
              placeholder="Your message *"
              rows={4}
              className="form-control"
              value={formState.message}
              onChange={handleInputChange}
              required
            />
          </div>
        </div>
        <div className="md:col-span-2">
          <div className="send">
            <button
              className="px-btn w-full"
              type="submit"
              disabled={loading}
            >
              {loading ? 'Sending...' : 'Send Message'}
            </button>
          </div>
        </div>
        
      </div>

    </form>
  );
}
