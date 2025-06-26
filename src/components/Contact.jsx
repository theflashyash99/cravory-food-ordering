// ContactUs.jsx
import React, { useState } from "react";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = e => {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async e => {
    e.preventDefault();
    // TODO: integrate with backend or service like EmailJS/Web3Forms
    console.log("Send:", form);
    setSubmitted(true);
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-6 lg:px-20 mt-24">
      <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden lg:flex mt-36">
        {/* Sidebar */}
        <div className="lg:w-1/2 bg-indigo-600 text-white p-8">
          <h2 className="text-3xl font-bold mb-4">Get in Touch</h2>
          <p className="mb-6">We’d love to hear from you. Reach out and we’ll get back to you shortly.</p>
          <p><strong>Email:</strong> theflashyash99.com</p>
          <p><strong>Phone:</strong> 123456789</p>
          <div className="mt-8">
            <h3 className="font-semibold mb-2">Follow us</h3>
            <div className="space-x-4">
              <a
                href="https://www.linkedin.com/in/yash-jaiswal-664588231"
                target="blank"

              >
                💼
              </a>
            </div>
          </div>
         <div>
          
         </div>
        </div>

        {/* Form */}
        <form
          onSubmit={handleSubmit}
          className="lg:w-1/2 p-8 space-y-4"
        >
          {submitted && (
            <div className="bg-green-100 text-green-800 p-3 rounded">
              Thank you for contacting us!
            </div>
          )}
          <div>
            <label htmlFor="name" className="block text-gray-700">Name</label>
            <input
              id="name" name="name" required
              value={form.name}
              onChange={handleChange}
              className="mt-1 block w-full border-gray-300 rounded p-2"
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-gray-700">Email</label>
            <input
              id="email" name="email" type="email" required
              value={form.email}
              onChange={handleChange}
              className="mt-1 block w-full border-gray-300 rounded p-2"
            />
          </div>

          <div>
            <label htmlFor="message" className="block text-gray-700">Message</label>
            <textarea
              id="message" name="message" rows="4" required
              value={form.message}
              onChange={handleChange}
              className="mt-1 block w-full border-gray-300 rounded p-2"
            />
          </div>

          <button
            type="submit"
            className="w-full py-2 px-4 bg-indigo-600 text-white rounded hover:bg-indigo-700"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
}

