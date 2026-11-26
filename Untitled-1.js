
import React from "react";
import { useNavigate } from "react-router-dom";


function Home() {
  const navigate = useNavigate();

  return (
    <div className="home-page">

      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-overlay">
          <div className="hero-content">

            <span className="hero-tag">
              WELCOME TO ELECTRO STORE
            </span>

            <h1>
              TAKE YOUR GADGETS
              <br />
              TO THE NEXT LEVEL!
            </h1>

            <p>
              Discover the latest in technology.
              Explore smartphones, laptops,
              headphones and smartwatches at
              amazing prices.
            </p>

            <button
              className="shop-btn"
              onClick={() => navigate("/products")}
            >
              Shop Now →
            </button>

          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="featured-section">

        <div className="featured-heading">
          <span>OUR COLLECTION</span>
          <h2>Featured Gadgets</h2>
          <p>
            Explore some of our popular electronics.
          </p>
        </div>

        <div className="featured-grid">

          {/* Headphones */}
          <div className="featured-card light-card">

            <div className="card-text">
              <span>BESTSELLER</span>
              <h3>Sound Pro</h3>
              <p>Wireless Headphones</p>
              <button onClick={() => navigate("/products")}>
                Explore →
              </button>
            </div>

            <img
              src="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=600"
              alt="Wireless headphones"
            />

          </div>

          {/* Laptop */}
          <div className="featured-card orange-card">

            <div className="card-text">
              <span>POPULAR</span>
              <h3>PowerBook</h3>
              <p>High Performance Laptop</p>
              <button onClick={() => navigate("/products")}>
                Explore →
              </button>
            </div>

            <img
              src="https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=600"
              alt="Laptop"
            />

          </div>

          {/* Smartwatch */}
          <div className="featured-card dark-card">

            <div className="card-text">
              <span>NEW ARRIVAL</span>
              <h3>Smart Time</h3>
              <p>Modern Smartwatch</p>
              <button onClick={() => navigate("/products")}>
                Explore →
              </button>
            </div>

            <img
              src="https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=600"
              alt="Smartwatch"
            />

          </div>

        </div>
      </section>

      {/* Bottom Banner */}
      <section className="home-bottom">
        <h2>Technology Made Simple</h2>
        <p>
          Find the right gadgets for your everyday life.
        </p>

        <button onClick={() => navigate("/products")}>
          View All Products
        </button>
      </section>

    </div>
  );
}

export default Home;
