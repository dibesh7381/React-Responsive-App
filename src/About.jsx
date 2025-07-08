import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';

const About = () => {
  return (
    <>
        <Navbar/>

         <div className="w-full min-h-screen bg-gray-50 px-4 py-10 mt-12">
      <div className="max-w-6xl mx-auto flex flex-col space-y-10">
        
        {/* Heading Section */}
        <div className="text-center">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-800 mb-4">
            About Us
          </h1>
          <p className="text-gray-600 text-base sm:text-lg max-w-2xl mx-auto">
            We’re passionate about building modern, intuitive, and high-performing web experiences for all.
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Section 1 */}
          <div className="bg-white p-6 rounded-xl shadow hover:shadow-md transition">
            <h2 className="text-2xl font-semibold text-blue-600 mb-2">Our Mission</h2>
            <p className="text-gray-700">
              To empower businesses and individuals by delivering exceptional digital solutions that blend innovation and functionality.
            </p>
          </div>

          {/* Section 2 */}
          <div className="bg-white p-6 rounded-xl shadow hover:shadow-md transition">
            <h2 className="text-2xl font-semibold text-blue-600 mb-2">Our Vision</h2>
            <p className="text-gray-700">
              To be a trusted leader in the digital space by constantly evolving and adapting to emerging technologies and trends.
            </p>
          </div>

          {/* Section 3 */}
          <div className="bg-white p-6 rounded-xl shadow hover:shadow-md transition">
            <h2 className="text-2xl font-semibold text-blue-600 mb-2">What We Do</h2>
            <p className="text-gray-700">
              From design to deployment, we craft full-stack web applications that are scalable, user-friendly, and business-ready.
            </p>
          </div>

          {/* Section 4 */}
          <div className="bg-white p-6 rounded-xl shadow hover:shadow-md transition">
            <h2 className="text-2xl font-semibold text-blue-600 mb-2">Why Choose Us?</h2>
            <p className="text-gray-700">
              Our team focuses on performance, aesthetics, and usability. We don’t just build websites — we build experiences.
            </p>
          </div>
        </div>
      </div>
    </div>

        <Footer/>
    </>
    
  );
};

export default About;


