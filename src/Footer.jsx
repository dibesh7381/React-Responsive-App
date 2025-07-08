import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-10 mt-14">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Grid layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
          {/* Logo / Brand */}
          <div>
            <h2 className="text-2xl font-bold">MyBrand</h2>
            <p className="mt-2 text-gray-400">
              Building modern experiences with care and quality.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-xl font-semibold mb-3">Quick Links</h3>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-white transition">Home</a></li>
              <li><a href="#" className="hover:text-white transition">About</a></li>
              <li><a href="#" className="hover:text-white transition">Services</a></li>
              <li><a href="#" className="hover:text-white transition">Contact</a></li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="text-xl font-semibold mb-3">Follow Us</h3>
            <div className="flex justify-center md:justify-start gap-4">
              <a href="#" className="text-gray-400 hover:text-white text-xl"><FaFacebookF /></a>
              <a href="#" className="text-gray-400 hover:text-white text-xl"><FaTwitter /></a>
              <a href="#" className="text-gray-400 hover:text-white text-xl"><FaInstagram /></a>
              <a href="#" className="text-gray-400 hover:text-white text-xl"><FaLinkedinIn /></a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-700 mt-8 pt-6 text-center text-sm text-gray-500">
          &copy; {new Date().getFullYear()} MyBrand. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
