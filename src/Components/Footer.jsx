import React from "react";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-blue-600 text-white py-6">
      <div className="container mx-auto text-center">
        <h2 className="text-2xl font-bold">Visa Navigator</h2>
        <p className="text-sm mt-1">
          Your trusted guide for hassle-free visa applications.
        </p>

        <div className="flex justify-center space-x-6 mt-3">
          <a
            href="https://www.facebook.com/hemalminhajul/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaFacebook className="text-xl hover:text-blue-500" />
          </a>
          <a
            href="https://x.com/home"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaTwitter className="text-xl hover:text-blue-400" />
          </a>
          <a
            href="https://www.instagram.com/minhajulabedinhemal/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram className="text-xl hover:text-pink-500" />
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin className="text-xl hover:text-blue-700" />
          </a>
        </div>

        <div className="mt-4">
          <p>📍 Address: 123 Visa Street, Global City, World</p>
          <p>📧 Email: support@visanavigator.com</p>
          <p>📞 Phone: +123-456-7890</p>
        </div>

        <div className="border-t border-gray-700 mt-4 pt-3 text-sm">
          <p>
            © {new Date().getFullYear()} Visa Navigator. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
