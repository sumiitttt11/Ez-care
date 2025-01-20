import React from 'react';

const AboutUs = () => {
  return (
    <div className="bg-gray-100 py-12 px-6 md:px-32 md:py-48 sm:px-12 lg:px-24">
      <div className="max-w-6xl mx-auto text-center">
        <h1 className="text-4xl font-bold text-gray-800 mb-6">About Expert Care</h1>
        <p className="text-lg text-gray-600 leading-relaxed mb-8">
          At Expert Care, we are dedicated to connecting you with reliable and professional services to simplify your everyday life. Our mission is to provide a platform where users can easily find and book top-quality services tailored to their needs.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white shadow-lg rounded-lg p-6">
            <h2 className="text-xl font-semibold text-gray-700 mb-4">Our Mission</h2>
            <p className="text-gray-600 leading-relaxed">
              To deliver seamless and trustworthy services that enhance convenience and satisfaction for our users. We strive to create a community where expertise meets trust.
            </p>
          </div>
          
          <div className="bg-white shadow-lg rounded-lg p-6">
            <h2 className="text-xl font-semibold text-gray-700 mb-4">Why Choose Us?</h2>
            <p className="text-gray-600 leading-relaxed">
              Our team ensures a curated selection of skilled professionals, transparency in pricing, and an easy-to-use platform. Your satisfaction is our priority.
            </p>
          </div>

          <div className="bg-white shadow-lg rounded-lg p-6">
            <h2 className="text-xl font-semibold text-gray-700 mb-4">Our Vision</h2>
            <p className="text-gray-600 leading-relaxed">
              To revolutionize the way people access services by fostering a culture of reliability, excellence, and innovation.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
