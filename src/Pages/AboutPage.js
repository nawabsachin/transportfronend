import React from 'react';
import { FaLightbulb, FaBullhorn, FaLaptop, FaTrophy, FaBullseye } from 'react-icons/fa';
import './AboutPage.css'
import NavBarHarsh from '../NavBarHarsh';
import Footer from '../Footer';
import MyImage from './ship.jpg';

const AboutUs = () => {
  return (
    <>
    <NavBarHarsh></NavBarHarsh>
    <div className="about-us">
      <div className="about-us-header">
        <div className="about-us-image">
        
          {/* <img 
            src="https://static.vecteezy.com/system/resources/previews/007/931/694/non_2x/about-us-button-about-us-text-template-for-website-about-us-icon-flat-style-vector.jpg" 
            alt="About Us"
          /> */}
          <h1>About Us</h1>
        </div>
        <div className="welcome-container">
          <div className="text-content">
            <h1 className="title">Welcome to ZAEEESH</h1>
            <p className="description">
              Established in the year 2018, ZAEEESH has emerged as a leading company 
              in the field of E-commerce Business Management. With a firm commitment to 
              providing specific solutions for every customer, we have become a 
              one-stop shop for all your online business requirements.
            </p>
            <h2 className="journey-title">Our Journey</h2>
            <p className="journey-description">
              Rcosource was founded with a clear vision - to support the evolution 
              of small businesses and maximize client revenue. Over the years, 
              we have maintained this guiding principle and have earned the trust 
              of more than 1000+ satisfied customers worldwide.
            </p>
          </div>
          <div className="image-content">
              <img className='logo-img111' src={MyImage} alt="Company Logo" />
          </div>
        </div>
      </div>

      <h2 className='title'>Comprehensive E-commerce Services</h2>
      <p className='pragrph'>
        At Rcosource, we offer comprehensive services to meet your diverse e-commerce needs. Whether you are looking to launch your Amazon or Flipkart accounts, need cataloging and account management assistance, require expert advertising creation and optimization, or seek brand protection, performance management, or seller reinstatement services in India, we have you covered.
        We offer a range of services, including accounting and tax assistance for Amazon, GST registration for Pan India, shipping and logistics support, multi-channel warehouse facility in Madhya Pradesh, A+ cataloging (EBC) and day-to-day operations management.
      </p>

      <h2 className='title'>Elevating Your Online Presence</h2>
      <p className='pragrph'>
        We are an Amazon SPN that focuses on creating a reliable and efficient web infrastructure to enhance the online presence of sellers in physical markets. Our team of skilled experts has the necessary knowledge, experience, and updates to optimize processes and promote best practices for business development.
      </p>

      <h2 className='title'>Customized Solutions for Your Success</h2>
      <p className='pragrph'>
        What sets us apart is our unwavering commitment to delivering results. Our approach goes beyond giving advice. We collaborate closely with our clients to create custom solutions that increase growth and profitability. Our client’s success is our success, and we are committed to supporting them in accomplishing their e-commerce objectives.
      </p>

      <div className="core-values-container">
        <h2 className="core-values-title">Our Core Values</h2>
        <div className="core-values">
          <div className="core-value">
            <FaLightbulb className="core-value-icon" />
            <h3>We make genuine promises and deliver on them.</h3>
          </div>
          <div className="core-value">
            <FaBullhorn className="core-value-icon" />
            <h3>We listen, learn, and continuously strive to improve ourselves.</h3>
          </div>
          <div className="core-value">
            <FaLaptop className="core-value-icon" />
            <h3>We always ensure an eco-friendly working model, promoting integrity and fairness in all our endeavors.</h3>
          </div>
          <div className="core-value">
            <FaTrophy className="core-value-icon" />
            <h3>Our win is in our client's win, and their success is our ultimate reward.</h3>
          </div>
        </div>
      </div>

      <div className="join">
        <h1>Join Our Diverse Customer Base</h1>
        <p>Our diverse customer base includes successful businesses in furniture, food, cosmetics, lifestyle, and various other niches. Our aim is to ensure that your business grows and flourishes through the harmonious coordination of your online and offline marketing strategies.</p>
      </div>

      <div className="vision-mission-container">
        <div className="vision-mission-card">
          <FaLightbulb className="icon" />
          <h2>Our Vision</h2>
          <p>
            Our Vision is to become the most trusted <strong>ecommerce ecosystem</strong>
            solution across the globe.
          </p>
        </div>
        <div className="vision-mission-card">
          <FaBullseye className="icon" />
          <h2>Our Mission</h2>
          <p>
            Our Mission is to develop software, tools, and provide business
            management expertise which gives functionality and ease of
            operations to our ecommerce seller base.
          </p>
        </div>
      </div>

      <div className="why-choose-us">
        <h2>Why Choose Us</h2>
        <div className="services">
          <div className="service">
            <i className="fa fa-balance-scale" aria-hidden="true"></i>
            <h3>Comprehensive Solutions</h3>
            <p>RcoSource offers comprehensive e-commerce solutions, including account management, advertising optimization, cataloging, logistics, and brand protection. Our integrated approach ensures maximum efficiency and growth for your online business.</p>
          </div>
          <div className="service">
            <i className="fa fa-chart-pie" aria-hidden="true"></i>
            <h3>Data-Driven Decision-Making</h3>
            <p>At RcoSource, we use advanced analytics tools to gather valuable insights about your e-commerce performance. Our data-driven approach helps us make informed decisions and optimize strategies for maximum results.</p>
          </div>
          <div className="service">
            <i className="fa fa-lightbulb" aria-hidden="true"></i>
            <h3>Customized Strategies</h3>
            <p>We understand every business is unique, so we take the time to understand your goals, challenges, and audience. Our experts personalize solutions that align with your needs and focus on your strengths and opportunities to achieve your goals.</p>
          </div>
          <div className="service">
            <i className="fa fa-trophy" aria-hidden="true"></i>
            <h3>Proven Track Record</h3>
            <p>With a strong track record of success, RcoSource has helped numerous clients achieve remarkable results in the e-commerce landscape.</p>
          </div>
        </div>
      </div>

      <div className="contact-container">
        <h2 className="contact-heading">Contact Us Today</h2>
        <p className="contact-text">
          Our source invites you to embark on a successful e-commerce journey with us. 
          Feel free to contact us and hire us as your e-commerce partners at our offices 
          in Jaipur and Bangalore. Our services extend across India, the United States (US), 
          Singapore, and Europe. If your country is not mentioned, please get in touch with us, 
          and we'll be delighted to explore opportunities together as we expand in the world of e-commerce.
        </p>
      </div>

     
    </div>
    <Footer></Footer>
    </>
  );
};

export default AboutUs;