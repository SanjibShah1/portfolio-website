import React, { useState } from 'react';
import emailjs from 'emailjs-com';

const ContactForm = () => {
  // State variables to hold form data
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [status, setStatus] = useState('');

  // Handle form data change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    const templateParams = {
      from_name: formData.name,
      from_email: formData.email,
      message: formData.message
    };

    // Email.js service sending
    emailjs
      .send(
        'service_mpeau16',        // Replace with your service ID
        'template_g33pphx',        // Replace with your template ID
        templateParams,
        'IZnv9ZStkrPrlpSVs'             // Replace with your user ID
      )
      .then(
        (response) => {
          console.log('Success:', response);
          setStatus('Message sent successfully!');
          setFormData({
            name: '',
            email: '',
            message: ''
          });
        },
        (error) => {
          console.log('Error:', error);
          setStatus('Failed to send message. Please try again later.');
        }
      );
  };

  return (
    <div className="contact-form">
      <h2 className="text-center text-3xl font-bold text-blue-500 mb-6">Contact Me</h2>
      <form onSubmit={handleSubmit} className="max-w-md mx-auto bg-white p-8 rounded-md shadow-lg">
        <div className="mb-4">
          <label htmlFor="name" className="block text-sm font-medium text-gray-700">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full p-3 border rounded-md"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="email" className="block text-sm font-medium text-gray-700">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full p-3 border rounded-md"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="message" className="block text-sm font-medium text-gray-700">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            className="w-full p-3 border rounded-md"
            rows="4"
          ></textarea>
        </div>

        <button
          type="submit"
          className="w-full bg-blue-500 text-white p-3 rounded-md hover:bg-blue-600 transition-all"
        >
          Send Message
        </button>

        {status && (
          <div className="mt-4 text-center">
            <p className="text-green-500">{status}</p>
          </div>
        )}
      </form>
    </div>
  );
};

export default ContactForm;