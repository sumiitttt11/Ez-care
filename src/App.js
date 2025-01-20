import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import axios from 'axios';  // Import axios
import NavBar from './components/NavBar';
import HeroSection from './components/HeroSection';
import Services from './components/Services';
import Testimonials from './components/Testimonials';
import LoginPage from './components/LoginPage';
import SignUpPage from './components/SignUpPage';
import Clientsu from './components/SignUp/Clientsu';
import Freelancer from './components/SignUp/Freelancer';
import NotFound from './components/NotFound';
import HowItWorks from './components/HowItWorks';
import Footer from './components/Footer';
import PrivacyPolicy from './policies/PrivacyPolicy';
import ContactUs from './About/ContactUs';
import AboutUs from './About/AboutUs';
import FAQ from './policies/FAQ';
import TermsOfService from './policies/termsofservices';

// Create a custom component to handle conditional rendering of NavBar and Footer
const AppContent = () => {
  const location = useLocation();

  // Define routes where the NavBar and Footer should not appear
  const hideNavBarAndFooterRoutes = ['/signup', '/signup/clients', '/signup/freelancer', '/login'];

  const showNavBar = !hideNavBarAndFooterRoutes.includes(location.pathname);
  const showFooter = !hideNavBarAndFooterRoutes.includes(location.pathname);

  // Fetch data from the backend
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:5000');  // Your backend URL
        console.log(response.data);  // Log the response (Hello from the backend!)
      } catch (error) {
        console.error('Error fetching data:', error);  // Handle any errors
      }
    };

    fetchData();  // Call the fetchData function when the component mounts
  }, []);  // Empty dependency array to run this only once when the component mounts

  useEffect(() => {
    // Set document title based on the current route
    switch (location.pathname) {
      case '/':
        document.title = 'ExpertCare | Transform Your Career with Us!';
        break;
      case '/login':
        document.title = 'Login - ExpertCare';
        break;
      case '/signup':
        document.title = 'Sign Up - ExpertCare';
        break;
      case '/signup/clients':
        document.title = 'Client Sign Up - ExpertCare';
        break;
      case '/signup/freelancer':
        document.title = 'Freelancer Sign Up - ExpertCare';
        break;
      case '/privacy-policy':
        document.title = 'Privacy Policy - ExpertCare';
        break;
      case '/contact-us':
        document.title = 'Contact Us - ExpertCare';
        break;
      case '/about-us':
        document.title = 'About Us - ExpertCare';
        break;
      case '/frequently-asked-questions-(faqs)':
        document.title = 'Frequently Asked Questions - ExpertCare';
        break;
      case '/terms-of-service':
        document.title = 'Terms of Service - ExpertCare';
        break;
      default:
        document.title = '404 Not Found - ExpertCare';
    }
  }, [location.pathname]);

  return (
    <>
      {showNavBar && <NavBar />}
      <div className={`pt-${showNavBar ? '16' : '0'}`}>
        <Routes>
          {/* Main Routes */}
          <Route
            path="/"
            element={
              <>
                <HeroSection />
                <HowItWorks />
                <Services />
                <Testimonials />
              </>
            }
          />
          {/* Authentication Routes */}
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignUpPage />} />
          <Route path="/signup/clients" element={<Clientsu />} />
          <Route path="/signup/freelancer" element={<Freelancer />} />

          {/* Terms of Service Route */}
          <Route path="/terms-of-service" element={<TermsOfService />} />

          {/* FAQ Route */}
          <Route path="/frequently-asked-questions-(faqs)" element={<FAQ />} />

          {/* About Us Route */}
          <Route path="/about-us" element={<AboutUs />} />

          {/* Privacy Policy Route */}
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />

          {/* Contact Us Route */}
          <Route path="/contact-us" element={<ContactUs />} />

          {/* 404 Not Found Route */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
      {showFooter && <Footer />}
    </>
  );
};

function App() {
  return (
    <Router>
      <div className="font-sans antialiased bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-gray-100">
        <AppContent />
      </div>
    </Router>
  );
}

export default App;
