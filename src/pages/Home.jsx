import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import PackagesCarousel from "../components/PackagesCarousel";
import HotelSection from "../components/HotelSection"; 
import ActivitiesSection from "../components/Activities";
import DestinationsCarousel from "../components/DestinationsCarousel";
import AboutUs from "../components/AboutUs"; 
import img1 from "../assets/hero1.jpg";
import img2 from "../assets/hero2.jpg";
import img3 from "../assets/hero3.jpg";

export default function Home() {
  const packagesCount = 12;
  const heroImages = [img1, img2, img3];
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroImages.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [heroImages.length]);

  return (
    <>
      <div className="hero">
        {heroImages.map((img, index) => (
          <div
            key={index}
            className={`heroBg ${index === currentSlide ? "active" : ""}`}
            style={{ backgroundImage: `url(${img})` }}
          />
        ))}
        
        <div className="heroOverlay"></div>

        <div className="heroContent">
          <span className="welcomeBadge">🌲 Explore Northern Pakistan</span>
          
          <h1 className="heroTitle">
            Journey to the <br />
            <span>Mountains</span>
          </h1>
          
          <p className="heroSub">
            Discover the hidden gems of  Swat, Hunza, Skardu and Naran with our premium travel services.
          </p>
          
          <div className="buttonGroup">
             <Link to="/packages" className="btn btnPrimary">View Packages</Link>
           
          </div>

          <div className="sliderDots">
            {heroImages.map((_, index) => (
              <span 
                key={index} 
                className={`dot ${index === currentSlide ? "activeDot" : ""}`}
                onClick={() => setCurrentSlide(index)}
              ></span>
            ))}
          </div>
        </div>
      </div>
      <div className="section bg-light fix-bottom-gap">
        <div className="container">
          <div className="sectionHeader">
            <h2 className="sectionTitle">Why Choose Northern Tours?</h2>
            <p className="sectionSub">
              We focus on comfort, safety, and creating unforgettable memories for you.
            </p>
          </div>

          <div className="grid4">
            <div className="card featureCard">
              <div className="iconBox">📅</div>
              <h3>Smart Planning</h3>
              <p>We plan the perfect itinerary so you enjoy sightseeing without getting tired.</p>
            </div>

            <div className="card featureCard">
              <div className="iconBox">🏨</div>
              <h3>Luxury Stays</h3>
              <p>We partner with top-rated hotels to ensure a clean and comfortable sleep.</p>
            </div>

            <div className="card featureCard">
              <div className="iconBox">🛡️</div>
              <h3>Safe & Secure</h3>
              <p>Our drivers are experienced experts of Northern roads. Safety first.</p>
            </div>

            <div className="card featureCard">
              <div className="iconBox">📞</div>
              <h3>24/7 Support</h3>
              <p>Our team is available round the clock to assist you during your trip.</p>
            </div>
          </div>
        </div>
      </div>
      <div className="section fix-top-gap">
        <div className="container">
           <PackagesCarousel />
        </div>
      </div>
      <div className="section" style={{ paddingTop: '10px' }}>
        <div className="container">
          <HotelSection count={packagesCount} />
        </div>
      </div>
      <div className="section bg-light">
        <div className="container">
          <ActivitiesSection count={packagesCount} />
        </div>
      </div>
      <div className="section">
        <DestinationsCarousel count={packagesCount} />
      </div>
      <AboutUs />
      
    </>
  );
}