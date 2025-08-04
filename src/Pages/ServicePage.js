import React from "react";
import './ServicePage.css'

import NavBarHarsh from "../NavBarHarsh";
import Footer from "../Footer";


const ServicesSection = () => {
  const services = [
    { img: "https://thumbs.dreamstime.com/b/truck-industrial-container-cargo-logistic-import-export-yard-83971892.jpg", title: "", desc: "This image showcases a busy shipping yard during sunset, where a large forklift is actively loading a cargo container onto a truck. The vibrant sky enhances the industrial setting, emphasizing the importance of logistics in global trade. Stacked containers in the background highlight the scale of international shipping operations." },
    { img: "https://i.pinimg.com/736x/32/8f/33/328f33a8f2711d37bb1f4ff409c8fc8e.jpg", title: "", desc: "This image captures the dynamic world of global trade, featuring a massive cargo ship docked at a bustling port. Towering cranes load and unload colorful containers, symbolizing the seamless flow of goods across international markets. An airplane soaring above highlights the integration of sea and air transport, showcasing the efficiency of modern logistics.." },
    { img: "https://afm.net.in/wp-content/uploads/2021/10/Import-and-Export-Company-in-Delhi2-1024x682.jpg", title: "", desc: "This image beautifully showcases the interconnected world of logistics, where air, sea, and land transportation work together. A forklift moves cargo containers while towering cranes handle shipments at the dock. The airplane soaring above highlights the efficiency of global trade, ensuring goods reach their destinations swiftly." },
    { img: "https://5.imimg.com/data5/SELLER/Default/2021/11/GI/JL/MW/102788991/sea-imports-500x500.jpg", title: "", desc: "This image captures a massive cargo ship sailing through the open sea, loaded with colorful shipping containers. It highlights the crucial role of maritime transport in global trade, ensuring the smooth movement of goods across continents." },
    { img: "https://www.vinayakshippingagencies.in/images/60f90a114873e1626933777reefer-custom-clearing-service-500x500.jpg", title: "", desc: "This image showcases a busy logistics hub where trains, trucks, and airplanes work together to transport goods. Stacked shipping containers highlight the scale of global trade, ensuring seamless supply chain operations across different transportation modes." },
    { img: "https://www.a1worldwidelogistics.com/shipping-company/wp-content/uploads/2023/09/containership-and-aircarrier.jpg", title: "", desc: "This stunning image captures a bustling port where massive cranes load and unload colorful cargo containers onto a ship. An airplane soaring in the sky symbolizes the seamless integration of sea and air transport, essential for global trade and logistics." }
  ];
  return (
    <>
    <NavBarHarsh></NavBarHarsh>
    <section className="services-section">
      <div className="services-header">
        <h2 className="services-title">Our Services</h2>
        <p className="services-subtitle">Explore Our Wide Range of Services Designed for Your Business Growth..</p>
      </div>
      <div className="services-container">
        {services.map((service, index) => (
          <div key={index} className="service-card">
            <img src={service.img} alt={service.title} />
            <h3>{service.title}</h3>
            <p>{service.desc}</p>
          </div>
        ))}
      </div>
    
  
      <div className="video-section">
        <h2 className="video-title">Brand Page Video</h2>
        <iframe
          width="100%"
          height="400"
          src="https://www.youtube.com/embed/q5UWVgxt3gk"
          title="Brand Page Video"
          frameBorder="0"
          allowFullScreen
        ></iframe>
      </div>

    

      {/* Footer Section Below Video */}
{/* <footer className="footer-section">
  <div className="footer-container">
    <div className="footer-top">
      <div className="footer-logo">
        <h1>ZAEESH CORPORATION</h1>
        <p>We help you in creating an online presence for your business by providing you expertise services.</p>
      </div>
      <div className="footer-info">
        <h4>Company Headquarter</h4>
        <p>102, 16/1 MM Tower, Ushaganj, Chhawni, Indore, Madhya Pradesh, 452001</p>
        
        <h4>Ujjain Office Address</h4>
        <p>5/2, Anand Nagar, Near Taramandal, Ujjain, Madhya Pradesh, 456001</p>
      </div>
      <div className="footer-contact">
        <h4>Phone</h4>
        <p>+91-8962874720</p>
        
        <h4>Email</h4>
        <p>Info@rcosource.in</p>
        <p>MSF@rcosource.in</p>
      </div>
    </div>
    
    <hr />

    <div className="footer-bottom">
      <div className="footer-links">
        <h4>Quicklinks</h4>
        <ul>
          <li>About</li>
          <li>Blogs</li>
          <li>Career</li>
        </ul>
      </div>
      <div className="footer-links">
        <h4>Support</h4>
        <ul>
          <li>FAQs</li>
          <li>Contact</li>
        </ul>
      </div>
      <div className="footer-social">
  <h4 className="text-lg font-semibold mb-2">Follow Us</h4>
  <div className="social-icons flex gap-4">
    <img
      src="https://cdn-icons-png.flaticon.com/512/145/145802.png"
      alt="Facebook"
      className="w-6 h-6"
    />
    <img
      src="https://cdn-icons-png.flaticon.com/512/2111/2111463.png"
      alt="Instagram"
      className="w-6 h-6"
    />
    <img
      src="https://cdn-icons-png.flaticon.com/512/145/145807.png"
      alt="LinkedIn"
      className="w-6 h-6"
    />
    <img
      src="https://cdn-icons-png.flaticon.com/512/145/145812.png"
      alt="Twitter"
      className="w-6 h-6"
    />
  </div>
</div>
<div>
      </div>
    </div>
  </div>
</footer> */}

    </section>
      <Footer></Footer>
    </>
  );
};
export default ServicesSection;