import React from 'react';

const Contact = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      {/* Main Heading */}
      <h1 className="text-4xl font-bold text-center mb-8 text-green-600">Contact Us</h1>

      {/* Introduction */}
      <p className="text-lg text-gray-700 leading-relaxed text-center mb-12">
        Have a question or need help? We’re here for you! Feel free to reach out via the form below or use the contact information provided. 
      </p>

      {/* Contact Form */}
      <div className="bg-white shadow-lg rounded-lg p-8 max-w-2xl mx-auto">
        <form>
          <div className="mb-6">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
              Name
            </label>
            <input
              id="name"
              type="text"
              placeholder="Your Name"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-600"
            />
          </div>

          <div className="mb-6">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
              Email
            </label>
            <input
              id="email"
              type="email"
              placeholder="Your Email"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-600"
            />
          </div>

          <div className="mb-6">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="message">
              Message
            </label>
            <textarea
              id="message"
              rows="5"
              placeholder="Your Message"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-600"
            ></textarea>
          </div>

          <div className="text-center">
            <button
              type="submit"
              className="bg-green-600 text-white py-2 px-6 rounded-md hover:bg-green-700 transition duration-300"
            >
              Send Message
            </button>
          </div>
        </form>
      </div>

      {/* Contact Information */}
      <div className="text-center mt-12">
        <h2 className="text-2xl font-semibold text-gray-900 mb-4">Or Reach Us Directly</h2>
        <p className="text-lg text-gray-700">
          <span className="font-bold">Email:</span> goodfoodco@gmail.com
        </p>
        <p className="text-lg text-gray-700">
          <span className="font-bold">Phone:</span> 123- 456-7890
        </p>
        <p className="text-lg text-gray-700">
          <span className="font-bold">Address:</span> ROOM NO 009C
        </p>
      </div>
    </div>
  );
};

export default Contact;
