import React from 'react';
import { useInView } from 'react-intersection-observer';
import { Link } from 'react-router-dom';
import Lottie from 'react-lottie';
import heroAnimation from './heroAnimation.json'; // Lottie animation file
import './compcss/HeroSection.css';

function HeroSection() {
  const { ref, inView } = useInView({
    triggerOnce: false,
    threshold: 0.2,
  });

  // Lottie animation options
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: heroAnimation,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  };

  return (
    <div
      ref={ref}
      className={`flex flex-col md:flex-row items-center justify-center min-h-screen p-32 text-center md:text-left transition-colors duration-500
        ${inView ? 'bg-gradient-to-r from-blue-500 to-purple-600 dark:from-blue-700 dark:to-purple-800' : 'bg-gray-200 dark:bg-gray-800'}
        hero-container`}
    >
      {/* Lottie Animation */}
      <div
        className={`w-full md:w-1/2 flex justify-center items-center ${inView ? 'opacity-100 scale-100' : 'opacity-0 scale-75'} transition-all duration-700 ease-out`}
      >
        <Lottie options={defaultOptions} height={460} width={370} />
      </div>

      {/* Content Section */}
      <div
        className={`w-full md:w-1/2.4 flex flex-col items-center md:items-start space-y-4 mt-2 md:mt-0
          ${inView ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'} transition-all duration-700 ease-out`}
      >
        {/* Animated heading */}
        <h2
          className="text-3xl md:text-6xl font-bold text-white dark:text-blue-400"
          aria-label="Transform Your Career with EzSolvers"
        >
          Get Expert Service at your Doorstep with ExpertCare
        </h2>

        {/* Animated paragraph */}
        <p className="text-lg md:text-xl text-gray-100 dark:text-gray-300 mt-2">
          Connect with clients that need your expertise through AI-driven service matching.
        </p>

        {/* Buttons */}
        <div className="flex space-x-4 mt-6">
          <button
            className="px-6 py-3 bg-blue-600 text-white dark:bg-blue-500 dark:hover:bg-blue-400 rounded-lg hover:bg-blue-700 transform transition-transform duration-300 delay-500 shadow-lg hover:scale-105"
          >
            <Link to="/signup" className="hover:text-blue-300" aria-label="Sign up for EzSolvers">
              Get Started
            </Link>
          </button>

          <button
            className="px-6 py-3 bg-gray-200 text-gray-700 dark:bg-gray-700 dark:text-gray-200 rounded-lg hover:bg-gray-300 dark:hover:bg-gray-600 transform transition-transform duration-300 delay-500 shadow-lg hover:scale-105"
          >
            <Link
              to="https://sumitkumawat.vercel.app"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-300"
              aria-label="Learn more about EzSolvers"
            >
              Learn More
            </Link>
          </button>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
