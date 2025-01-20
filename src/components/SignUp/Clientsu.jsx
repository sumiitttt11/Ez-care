import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import CreatableSelect from 'react-select/creatable';
import Lottie from 'lottie-react';
import { useSpring, animated } from 'react-spring';
import animationData from './welcome-animation.json';
import logo from './logo.png';

function Clientsu() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    country: { value: 'India', label: 'India' },
    emailUpdates: true,
    termsAccepted: false,
  });

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState('');
  const [modalTitle, setModalTitle] = useState('');

  const handleChange = (e) => {
    const { name, type, checked, value } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  const handleCountryChange = (selectedOption) => {
    setFormData({
      ...formData,
      country: selectedOption,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Freelancer Sign-Up Data:", formData);
  };

  const handleLinkClick = (type) => {
    let content = '';
    let title = '';
    if (type === 'terms') {
      title = 'Terms of Service';
      content = `Welcome to ExpertCare! By using our platform, you agree to the following terms and conditions. Our terms include guidelines on usage rights, content ownership, privacy protocols, and dispute resolution procedures. Please ensure that you fully understand and agree to these terms before continuing. These terms are subject to updates, and it is your responsibility to stay informed of any changes. If you have any questions or need further clarification, feel free to reach out to our support team.`;
    } else if (type === 'privacy') {
      title = 'Privacy Policy';
      content = `At ExpertCare, we take your privacy seriously. Our privacy policy outlines the ways in which we collect, use, and protect your personal information. We collect data to provide you with personalized experiences, and we ensure that your information is stored securely. We may also use your data for marketing purposes, but you have the option to opt out. Our policy includes detailed information on cookies, third-party data sharing, and user rights regarding data access, correction, and deletion. Please read through the full policy to understand how your data is handled.`;
    } else if (type === 'faq') {
      title = 'FAQ';
      content = `Frequently Asked Questions (FAQ) provide helpful insights into how ExpertCare works. From account creation, profile setup, and payment processing, we cover all the essential information. For example, you may wonder how to connect with potential clients or how to handle job leads. You can also learn about the safety measures in place to protect both freelancers and clients. Our FAQ section is updated regularly, so be sure to check it for the latest updates on our platform and services.`;
    }
    setModalTitle(title);
    setModalContent(content);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  useEffect(() => {
    document.body.style.backgroundColor = '#fff';
    return () => {
      document.body.style.backgroundColor = '';
    };
  }, []);

  const countryOptions = [
    { value: 'India', label: 'India' },
    { value: 'United States', label: 'United States' },
    { value: 'Canada', label: 'Canada' },
    { value: 'Australia', label: 'Australia' },
    { value: 'United Kingdom', label: 'United Kingdom' },
    { value: 'Germany', label: 'Germany' },
    { value: 'France', label: 'France' },
    { value: 'Japan', label: 'Japan' },
    { value: 'China', label: 'China' },
    { value: 'Brazil', label: 'Brazil' },
  ];

  const selectStyles = {
    control: (base) => ({
      ...base,
      padding: '5px',
      borderRadius: '5px',
      border: '1px solid #ddd',
      fontSize: '14px',
      marginBottom: '15px',
      transition: 'border-color 0.3s',
      '&:hover': {
        borderColor: '#007BFF',
      },
    }),
  };

  // Animation for the container
  const containerProps = useSpring({
    opacity: 1,
    from: { opacity: 0 },
    config: { duration: 500 },
  });

  // Animation for the button
  const buttonProps = useSpring({
    transform: 'translateY(0)',
    from: { transform: 'translateY(20px)' },
    config: { tension: 280, friction: 60 },
  });

  return (
    <animated.div style={{ ...styles.container, ...containerProps }}>
      <div style={styles.logoContainer}>
        <Link to="/" className="flex items-center">
          <img className="w-32" src={logo} alt="logo" style={styles.logo} />
        </Link>
      </div>

      <div style={{ width: '300px', marginBottom: '20px' }}>
        <Lottie animationData={animationData} loop={true} />
      </div>

      <div style={styles.formContainer}>
        <h2 style={styles.header}>Join us to connect with top talent!</h2>

        <form onSubmit={handleSubmit} style={styles.form}>
          <div style={styles.row}>
            <div style={styles.inputContainer}>
              <label style={styles.label}>First name</label>
              <animated.input
                type="text"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                style={{ ...styles.input }}
                required
              />
            </div>
            <div style={styles.inputContainer}>
              <label style={styles.label}>Last name</label>
              <animated.input
                type="text"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                style={{ ...styles.input }}
                required
              />
            </div>
          </div>

          <label style={styles.label}>Work email address</label>
          <animated.input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            style={{ ...styles.input }}
            required
          />

          <label style={styles.label}>Password</label>
          <animated.input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            style={{ ...styles.input }}
            placeholder="Password (8 or more characters)"
            required
          />

          <label style={styles.label}>Country</label>
          <CreatableSelect
            options={countryOptions}
            value={formData.country}
            onChange={handleCountryChange}
            styles={selectStyles}
            placeholder="Select or type your country"
            isClearable
            menuPlacement="top"
            formatCreateLabel={(inputValue) => `Add "${inputValue}"`}
          />

          <div style={styles.checkboxContainer}>
            <input
              type="checkbox"
              name="emailUpdates"
              checked={formData.emailUpdates}
              onChange={handleChange}
              style={styles.checkbox}
            />
            <label style={styles.checkboxLabel}>
              Send me helpful emails to find rewarding work and job leads.
            </label>
          </div>

          <div style={styles.checkboxContainer}>
            <input
              type="checkbox"
              name="termsAccepted"
              checked={formData.termsAccepted}
              onChange={handleChange}
              style={styles.checkbox}
              required
            />
            <label style={styles.checkboxLabel}>
              Yes, I understand and agree to the <span onClick={() => handleLinkClick('terms')} style={styles.link}>ExpertCare Terms of Service</span>, including the <span onClick={() => handleLinkClick('privacy')} style={styles.link}>Privacy Policy</span>.
            </label>
          </div>

          <animated.button style={{ ...styles.submitButton, ...buttonProps }} type="submit">
            Create my account
          </animated.button>
        </form>

        <p style={styles.loginText}>
          Already have an account? <a href="/login" style={styles.link}>Log In</a>
        </p>
      </div>

      {isModalOpen && (
        <div style={styles.modalBackdrop} onClick={closeModal}>
          <div style={styles.modal}>
            <h3>{modalTitle}</h3>
            <p>{modalContent}</p>
            <button onClick={closeModal} style={styles.closeButton}>Close</button>
          </div>
        </div>
      )}
    </animated.div>
  );
}

const styles = {
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    backgroundColor: '#fff',
    fontFamily: 'Arial, sans-serif',
    position: 'relative',
    padding: '30px',
  },
  logoContainer: {
    position: 'absolute',
    top: '20px',
    left: '20px',
  },
  logo: {
    animation: 'fadeInLeft 1.2s ease-out',
  },
  formContainer: {
    width: '100%',
    maxWidth: '600px',
    padding: '20px',
    backgroundColor: '#f9f9f9',
    borderRadius: '8px',
    boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)',
  },
  header: {
    fontSize: '20px',
    textAlign: 'center',
    marginBottom: '20px',
    fontWeight: '600',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
  },
  row: {
    display: 'flex',
    gap: '10px',
    flexWrap: 'wrap',
  },
  inputContainer: {
    flex: 1,
  },
  label: {
    fontSize: '14px',
    color: '#333',
    marginBottom: '5px',
    fontWeight: '500',
  },
  input: {
    padding: '10px',
    fontSize: '14px',
    borderRadius: '5px',
    border: '1px solid #ddd',
    marginBottom: '15px',
    width: '100%',
    transition: 'border-color 0.3s, box-shadow 0.3s, transform 0.3s',
  },
  checkboxContainer: {
    display: 'flex',
    alignItems: 'flex-start',
    gap: '10px',
    marginBottom: '15px',
  },
  checkbox: {
    marginTop: '5px',
  },
  checkboxLabel: {
    fontSize: '14px',
    color: '#333',
  },
  submitButton: {
    padding: '12px',
    fontSize: '16px',
    backgroundColor: '#28a745',
    color: '#fff',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    marginTop: '10px',
    width: '100%',
    transition: 'background-color 0.3s, transform 0.2s',
    '&:hover': {
      backgroundColor: '#218838',
      transform: 'scale(1.05)',
    },
  },
  loginText: {
    fontSize: '14px',
    textAlign: 'center',
    marginTop: '15px',
  },
  link: {
    color: '#007BFF',
    textDecoration: 'none',
    cursor: 'pointer',
  },
  modalBackdrop: {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modal: {
    backgroundColor: '#fff',
    padding: '20px',
    borderRadius: '8px',
    width: '80%',
    maxWidth: '600px',
    boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',
  },
  closeButton: {
    padding: '10px',
    backgroundColor: '#007BFF',
    color: '#fff',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    marginTop: '10px',
  },
};

export default Clientsu;
