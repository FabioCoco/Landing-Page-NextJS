"use client"
import { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Button from 'react-bootstrap/Button';

interface Slide {
  title: string;
  subtitle: string;
  imageUrl: string;
  ctaText?: string;
}

const HeroSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const slides: Slide[] = [
    {
      title: "Bangun Kerajaan Digital Anda",
      subtitle: "Seperti Shadow Army yang tak terbendung, kami menciptakan solusi digital yang powerful dan dominan untuk bisnis Anda.",
      imageUrl: "/images/banner_01.JPG",
      ctaText: "Mulai Proyek"
    },
    {
      title: "Kekuatan Teknologi Masa Depan",
      subtitle: "Dengan kekuatan sistem hunter level S, kami membangun website yang cepat, aman, dan tak tertandingi.",
      imageUrl: "/images/banner_02.JPG",
      ctaText: "Lihat Karya Kami"
    },
    {
      title: "Evolusi Digital Tanpa Batas",
      subtitle: "Dari E-rank hingga National Level, kami dampingi transformasi digital bisnis Anda ke level tertinggi.",
      imageUrl: "/images/banner_03.jpg",
      ctaText: "Jelajahi Layanan"
    },
  ]

  return (
    <section id="home" className="position-relative">
      <Carousel 
        fade 
        interval={5000} 
        onSelect={(index) => setActiveIndex(index)}
        indicators={true}
        controls={true}
        className="solo-leveling-carousel"
      >
        {slides.map((slide, index) => (
          <Carousel.Item key={index}>
            <div 
              className="hero-slide"
              style={{
                backgroundImage: `url(${slide.imageUrl})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                height: "100vh",
                minHeight: "700px"
              }}
            >
              <div className="solo-overlay"></div>
            </div>
            
            <Carousel.Caption className="d-flex flex-column justify-content-center align-items-start h-100">
              <div className="hero-content text-start animate-fade-in">
                <h1 className="display-4 fw-bold mb-4 text-white">
                  {slide.title}
                </h1>
                <p className="lead mb-4 text-white fs-5 w-75">
                  {slide.subtitle}
                </p>
                <Button 
                  variant="gradient" 
                  size="lg" 
                  className="px-5 py-3 fw-semibold btn-gradient"
                >
                  {slide.ctaText}
                </Button>
              </div>
            </Carousel.Caption>
          </Carousel.Item>
        ))}
      </Carousel>
      
      <div className="scroll-indicator position-absolute bottom-0 start-50 translate-middle-x mb-4">
        <div className="d-flex flex-column align-items-center text-white">
          <span className="mb-2 small">Scroll Untuk Menjelajahi</span>
          <div className="scroll-arrow animate-float"></div>
        </div>
      </div>

      <style jsx>{`
        .solo-overlay {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: linear-gradient(
            135deg,
            rgba(10, 10, 10, 0.8) 0%,
            rgba(139, 92, 246, 0.2) 50%,
            rgba(10, 10, 10, 0.8) 100%
          );
        }
        
        .hero-content {
          max-width: 600px;
        }
        
        .scroll-arrow {
          width: 20px;
          height: 20px;
          border-right: 2px solid #8b5cf6;
          border-bottom: 2px solid #8b5cf6;
          transform: rotate(45deg);
        }
        
        .solo-leveling-carousel .carousel-indicators button {
          width: 12px !important;
          height: 12px !important;
          border-radius: 50% !important;
          margin: 0 8px !important;
          background-color: #8b5cf6 !important;
        }
        
        .solo-leveling-carousel .carousel-control-prev-icon,
        .solo-leveling-carousel .carousel-control-next-icon {
          background-color: #8b5cf6;
          border-radius: 50%;
          padding: 15px;
        }
      `}</style>
    </section>
  );
}

export default HeroSection;