


import React from 'react';
import './Product.css'; 
import NavBarHarsh from '../NavBarHarsh';
import Footer from '../Footer';
import ProductPage1 from './ProductMain';


const ProductPage = () => {
  return (
    <>
    <NavBarHarsh></NavBarHarsh>
  
    <ProductPage1></ProductPage1>
      {/* Carousel Section */}
      <div id="carouselExample" className="carousel slide" data-ride="carousel">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <div className="d-flex justify-content-center align-items-center" style={{ height: '500px', backgroundColor: '#f5f5dc' }}>
              <div className="text-center">
                <h2>TEST OF NATURE</h2>
                <h3 className="font-weight-bold">Food Filled With The Essence of Nature</h3>
                <button className="btn btn-primary mt-3">SHOP NOW</button>
              </div>
              <div className="mx-5">
                <img
                  src="https://t4.ftcdn.net/jpg/03/72/69/67/360_F_372696723_vjPGOxjqPIktNxMPUL6RDQaPfbUfqXRc.jpg"
                  alt="Fresh Vegetables"
                  style={{ maxHeight: '100%', maxWidth: '100%' }}
                />
              </div>
            </div>
          </div>

          <div className="carousel-item">
            <div className="d-flex justify-content-center align-items-center" style={{ height: '500px', backgroundColor: '#f5f5dc' }}>
              <div className="mx-5">
                <img
                  src="https://media.gettyimages.com/id/504862904/photo/container-ship-in-the-harbor-in-asia.jpg"
                  alt="Fresh Produce"
                  style={{ maxHeight: '100%', maxWidth: '100%' }}
                />
              </div>
            </div>
          </div>
        </div>

        <a className="carousel-control-prev" href="#carouselExample" role="button" data-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="sr-only">Previous</span>
        </a>
        <a className="carousel-control-next" href="#carouselExample" role="button" data-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="sr-only">Next</span>
        </a>
      </div>

      {/* Promo Cards */}
      <div className="promo-container">
        <div className="promo-card">
          <div className="promo-content">
            <h2>BUY 1 GET 1 FREE</h2>
            <h3>Fruits and Veggies</h3>
            <button>SHOP NOW</button>
          </div>
        </div>
        <div className="promo-card">
          <div className="promo-content">
            <h2>FLAT 25% OFF</h2>
            <h3>It’s all Organics</h3>
            <button>SHOP NOW</button>
          </div>
        </div>
      </div>

      {/* Offer Section */}
      <div className="offer-container">
        <h2>SPECIAL OFFERS!</h2>
        <h1>Import Export Food Bring People Enjoy!</h1>
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry has been.</p>
        <button className="shop-now">SHOP NOW</button>
        <div className="image-container">
          <img src="" alt="Fresh Vegetables" />
        </div>
      </div>

      {/* Cards Section */}
      <div className="card-container">
        <div className="card">
          <div className="card-title">BUY 1 GET 1 FREE</div>
          <h2>Spice and Herbs</h2>
          <button>SHOP NOW</button>
        </div>
        <div className="card">
          <div className="card-title">GET UPTO 25% OFF</div>
          <h2>Fruits and Veggies</h2>
          <button>SHOP NOW</button>
        </div>
        <div className="card">
          <div className="card-title">FLAT 15% DISCOUNT</div>
          <h2>Organic Vegetables</h2>
          <button>SHOP NOW</button>
        </div>
      </div>

      {/* Features Section */}
      <div className="features-container">
        <div className="feature-box">
          <img src="https://opencart.webdigify.com/OPC04/OPC111_freshmart/image/catalog/demo/theme/service-4.svg" alt="Buyer Protection" className="feature-icon" />
          <h3>Buyer Protection</h3>
          <p>Consectetur adipiscing elit, sed do eiusmod tempo.</p>
        </div>
        <div className="feature-box">
          <img src="https://opencart.webdigify.com/OPC04/OPC111_freshmart/image/catalog/demo/theme/service-3.svg" alt="Best in Prices" className="feature-icon" />
          <h3>Best in Prices</h3>
          <p>Consectetur adipiscing elit, sed do eiusmod tempo.</p>
        </div>
        <div className="feature-box">
          <img src="https://opencart.webdigify.com/OPC04/OPC111_freshmart/image/catalog/demo/theme/service-2.svg" alt="100% Organics" className="feature-icon" />
          <h3>100% Organics</h3>
          <p>Consectetur adipiscing elit, sed do eiusmod tempo.</p>
        </div>
        <div className="feature-box">
          <img src="https://opencart.webdigify.com/OPC04/OPC111_freshmart/image/catalog/demo/theme/service-1.svg" alt="24/7 Live Support" className="feature-icon" />
          <h3>24/7 Live Support</h3>
          <p>Consectetur adipiscing elit, sed do eiusmod tempo.</p>
        </div>
      </div>

      {/* Testimonials */}
      <div className="testimonials">
        <h2>What Our Customers Say!</h2>
        <div className="testimonial-cards">
          <div className="cards">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQBDox39ubeWBKcvnjRzPyPY2-z9AUIlNv_w&s" alt="Jennifer Duo" className="testimonial-image" />
            <p>Lorem ipsum dolor sit amet, consectetur teders adipiscing elit. Cras lacinia magna sed lectic iaculis fringilla. In eu ligula efficit.</p>
            <h4>Jennifer Duo</h4>
            <p>Design</p>
          </div>

          <div className="cards">
            <img src="https://diviultimate.com/wp-content/uploads/2017/01/client-1.jpg" alt="Netin Joseph" className="testimonial-image" />
            <p>Lorem ipsum dolor sit amet, consectetur teders adipiscing elit. Cras lacinia magna sed lectic iaculis fringilla. In eu ligula efficit.</p>
            <h4>Netin Joseph</h4>
            <p>Developer</p>
          </div>

          <div className="cards">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKtMmz-LEzjJ5mqHJHeBpGVCJrv6_YCCr5NQ&s" alt="Tisha Manil" className="testimonial-image" />
            <p>Lorem ipsum dolor sit amet, consectetur teders adipiscing elit. Cras lacinia magna sed lectic iaculis fringilla. In eu ligula efficit.</p>
            <h4>Tisha Manil</h4>
            <p>CEO</p>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </>
  );
};

export default ProductPage;
