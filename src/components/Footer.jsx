import React from 'react';
import { FaFacebook, FaTwitter, FaLinkedin } from 'react-icons/fa';
import { Link } from 'react-router-dom';

function Footer() {
  const handleLinkClick = (path) => {
    // Navigate to the path and refresh the page
    window.location.href = path;
  };

  return (
    <footer className="footer bg-gray-900 dark:bg-gray-800 text-white dark:text-gray-300 py-12">
      <div className="container mx-auto px-6 md:px-12 lg:px-24">
        {/* Footer Content */}
        <div className="flex flex-col md:flex-row justify-between items-start">
          {/* Left: Brand Name */}
          <div className="text-center md:text-left mb-16  py-8 md:mb-4">
            <Link
              to="/"
              className="text-3xl font-bold hover:scale-1005 transition-transform duration-300"
              onClick={() => handleLinkClick('/')}
            >
              ExpertCare
            </Link>
            <p className="text-sm mt-2 italic">Connecting experts with clients seamlessly.</p>
          </div>

          {/* Right: Two Lists */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            {/* First List */}
            <div>
              <h3 className="text-lg font-semibold text-white mb-4">Policies</h3>
              <ul className="space-y-2">
                {[
                  'Privacy Policy',
                  'Terms of Service',
                  'Frequently Asked Questions (FAQs)',
                ].map((item, index) => (
                  <li key={index}>
                    <button
                      onClick={() =>
                        handleLinkClick(`/${item.toLowerCase().replace(/\s+/g, '-')}`)
                      }
                      className="hover:text-blue-300 transition-colors duration-300"
                    >
                      {item}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Second List */}
            <div>
              <h3 className="text-lg font-semibold text-white mb-4">Contact Us</h3>
              <ul className="space-y-2">
                {['About Us', 'Contact Us'].map((item, index) => (
                  <li key={index}>
                    <button
                      onClick={() =>
                        handleLinkClick(`/${item.toLowerCase().replace(/\s+/g, '-')}`)
                      }
                      className="hover:text-blue-300 transition-colors duration-300"
                    >
                      {item}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="flex flex-col md:flex-row justify-between items-center mt-8">
          {/* Social Icons */}
          <div className="flex space-x-8">
            {[
              { href: 'https://instagram.com/sumiiitt.af', label: 'Facebook', icon: <FaFacebook /> },
              { href: 'https://twitter.com/sumiitttt11', label: 'Twitter', icon: <FaTwitter /> },
              { href: 'https://linkedin.com/in/sumiitttt11', label: 'LinkedIn', icon: <FaLinkedin /> },
            ].map((social, index) => (
              <a
                key={index}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-300 transition-colors duration-300 text-2xl"
                aria-label={social.label}
              >
                {social.icon}
              </a>
            ))}
          </div>

          {/* Copyright */}
          <p className="text-xs mt-4 md:mt-0">
            &copy; {new Date().getFullYear()} ExpertCare. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
