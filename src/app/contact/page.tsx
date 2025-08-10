'use client';

import { useState } from 'react';

export default function Contact() {
  const [form, setForm] = useState({
    firstName: '',
    lastName: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // This is a placeholder: use a real backend or mail service for production
    const mailtoLink = `mailto:falak_pabari@brown.edu?subject=${encodeURIComponent(
      form.subject || 'Contact from Website'
    )}&body=${encodeURIComponent(
      `From: ${form.firstName} ${form.lastName} (${form.email})\n\n${form.message}`
    )}`;

    window.location.href = mailtoLink;
  };

  return (
    <main className="min-h-screen flex items-center justify-center bg-white px-6 py-16">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-3xl space-y-6"
      >
        <div className="flex space-x-6">
          <div className="w-1/2">
          <label className="block font-bold mb-1 text-black">First Name *</label>
            <input
              name="firstName"
              required
              onChange={handleChange}
              className="w-full border-b border-black focus:outline-none py-1"
            />
          </div>
          <div className="w-1/2">
          <label className="block font-bold mb-1 text-black">Last Name *</label>
            <input
              name="lastName"
              required
              onChange={handleChange}
              className="w-full border-b border-black focus:outline-none py-1"
            />
          </div>
        </div>

        <div>
        <label className="block font-bold mb-1 text-black">Email *</label>
          <input
            type="email"
            name="email"
            required
            onChange={handleChange}
            className="w-full border-b border-black focus:outline-none py-1"
          />
        </div>

        <div>
        <label className="block font-bold mb-1 text-black">Subject</label>
          <input
            name="subject"
            onChange={handleChange}
            className="w-full border-b border-black focus:outline-none py-1"
          />
        </div>

        <div>
        <label className="block font-bold mb-1 text-black">Message</label>
          <textarea
            name="message"
            rows={4}
            onChange={handleChange}
            className="w-full border-b border-black focus:outline-none py-1"
          />
        </div>

        <button
          type="submit"
          className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-6 rounded-full"
        >
          Send
        </button>
      </form>
    </main>
  );
}
