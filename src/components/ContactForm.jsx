// ContactForm.js
import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import '../styles/ContactForm.css';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Replace with your Email.js service ID, template ID, and user ID
    const serviceId = 'your_service_id';
    const templateId = 'your_template_id';
    const userId = 'your_user_id';

    emailjs.send(serviceId, templateId, formData, userId)
      .then((response) => {
        console.log('Email sent successfully:', response);
      })
      .catch((error) => {
        console.error('Error sending email:', error);
      });
  };

  return (
    <form className="rw-contact-form" onSubmit={handleSubmit}>
        <h1>Get In Touch</h1>
        <p>We'd love to hear from you</p>
      <div className="rw-form-group">
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          placeholder='Your name'
          onChange={handleChange}
          required
        />
      </div>
      <div className="rw-form-group">
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          placeholder='Your email address'
          onChange={handleChange}
          required
        />
      </div>
      <div className="rw-form-group">
        <textarea
          id="message"
          name="message"
          value={formData.message}
          placeholder='Write your message here...'
          onChange={handleChange}
          required
        />
      </div>
      <button type="submit">Send Message</button>
    </form>
  );
};

export default ContactForm;
