import React, { useState } from 'react';
import { GrLocation } from 'react-icons/gr';
import { MdAddIcCall } from 'react-icons/md';
import { LuMessageSquare } from 'react-icons/lu';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    message: ''
  });

  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.id]: e.target.value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Submitted:', formData);

    setSuccess(true);
    setFormData({ name: '', phone: '', email: '', message: '' });

    setTimeout(() => setSuccess(false), 5000);
  };

  return (
    <div className="text-white py-12 px-4 max-w-7xl mx-auto">
      <h1 className="text-4xl md:text-5xl font-extrabold text-center mb-14">Contact Us</h1>

      <div className="flex flex-col md:flex-row gap-12 justify-between">
        {/* Left - Contact Info */}
        <div className="md:w-1/2 space-y-10">
          <div>
            <h2 className="text-2xl md:text-4xl font-bold mb-4">Let's Discuss</h2>
            <p className="text-gray-300 text-base leading-relaxed font-medium">
              Road: where sustainable driving meets a brighter future! As your trusted electric vehicle supplier,
              we're here to revolutionize your journey towards eco-friendly transportation, leaving pollution behind
              and welcoming a cleaner, greener commute. Join the green movement now and improve the environment.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-gray-300 font-semibold text-sm">
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <GrLocation className="mt-1 text-green-500 text-2xl" />
                <div>
                  <p className="text-white font-bold mb-1">Our Location</p>
                  <p className="text-gray-300 font-medium">8642 Yule Street, Arvada CO 80007</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <MdAddIcCall className="mt-1 text-green-500 text-2xl" />
                <div>
                  <p className="text-white font-bold mb-1">Our Phone Number</p>
                  <p className="text-gray-300 font-medium">+(248) 762-0356</p>
                </div>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <LuMessageSquare className="mt-1 text-green-500 text-2xl" />
              <div>
                <p className="text-white font-bold mb-1">Our Email</p>
                <p className="text-gray-300 font-medium">support@road.com</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right - Form */}
        <form
          onSubmit={handleSubmit}
          className="md:w-1/2 space-y-6 w-full"
        >
          <div className="flex flex-col space-y-2">
            <label htmlFor="name" className="text-sm font-bold">Your Name</label>
            <input
              id="name"
              type="text"
              placeholder="Enter your name"
              value={formData.name}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-md bg-[#2b2b2b] text-white focus:outline-none focus:ring-2 focus:ring-green-500"
              required
            />
          </div>

          <div className="flex flex-col space-y-2">
            <label htmlFor="phone" className="text-sm font-bold">Your Phone Number</label>
            <input
              id="phone"
              type="tel"
              placeholder="Enter your phone number"
              value={formData.phone}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-md bg-[#2b2b2b] text-white focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>

          <div className="flex flex-col space-y-2">
            <label htmlFor="email" className="text-sm font-bold">Your Email *</label>
            <input
              id="email"
              type="email"
              placeholder="Enter your email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-md bg-[#2b2b2b] text-white focus:outline-none focus:ring-2 focus:ring-green-500"
              required
            />
          </div>

          <div className="flex flex-col space-y-2">
            <label htmlFor="message" className="text-sm font-bold">Your Message</label>
            <textarea
              id="message"
              rows="5"
              placeholder="Type your message here..."
              value={formData.message}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-md bg-[#2b2b2b] text-white resize-none focus:outline-none focus:ring-2 focus:ring-green-500"
              required
            ></textarea>
          </div>

          <button
            type="submit"
            className="bg-green-600 text-white px-5 sm:px-6 py-2.5 sm:py-3 rounded-md font-bold hover:bg-green-700 transition"
          >
            Send Message
          </button>

          {success && (
            <p className="text-green-400 text-sm font-semibold mt-2">
              ✅ Message sent successfully!
            </p>
          )}
        </form>
      </div>
    </div>
  );
};

export default Contact;
