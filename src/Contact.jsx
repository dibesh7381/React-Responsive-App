import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';

const Contact = () => {
  return (
     <>
        <Navbar/>

           <div className="w-full flex justify-center items-center px-4 py-20 bg-gradient-to-br mt-16 from-blue-100 to-purple-200 min-h-screen">
      <div className="w-full max-w-3xl bg-white shadow-2xl rounded-2xl p-10 transition-all duration-500 hover:shadow-xl">
        
        {/* Heading */}
        <h2 className="text-4xl font-extrabold text-center text-gray-800 mb-10">
          Get in Touch
        </h2>

        {/* Form */}
        <form className="space-y-8">
          {/* Name + Email Row */}
          <div className="flex flex-col md:flex-row gap-6">
            {/* Name */}
            <div className="w-full">
              <label className="block text-gray-700 mb-1">Name</label>
              <input
                type="text"
                placeholder="Your name"
                className="w-full bg-transparent border-b-2 border-gray-300 focus:border-blue-500 focus:outline-none py-2 placeholder-gray-500 transition-all duration-300"
              />
            </div>

            {/* Email */}
            <div className="w-full">
              <label className="block text-gray-700 mb-1">Email</label>
              <input
                type="email"
                placeholder="Your email"
                className="w-full bg-transparent border-b-2 border-gray-300 focus:border-blue-500 focus:outline-none py-2 placeholder-gray-500 transition-all duration-300"
              />
            </div>
          </div>

          {/* Message */}
          <div>
            <label className="block text-gray-700 mb-1">Message</label>
            <textarea
              rows="4"
              placeholder="Your message"
              className="w-full bg-transparent border-b-2 border-gray-300 focus:border-blue-500 focus:outline-none py-2 placeholder-gray-500 transition-all duration-300 resize-none"
            ></textarea>
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 rounded-full font-semibold shadow-md hover:shadow-lg hover:scale-105 active:scale-95 transition-all duration-300"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>

        <Footer/>
     </>
  );
};

export default Contact;


