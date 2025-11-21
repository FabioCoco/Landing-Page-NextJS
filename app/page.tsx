"use client";
import React from "react";
import 'bootstrap-icons/font/bootstrap-icons.css';
import NavbarComponent from "../components/navbar";
import HeroSection from "../components/herosection";
import {Container} from "react-bootstrap";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "next/image";
import Button from "react-bootstrap/Button";
import WorkSection from "../components/worksection";
import ServiceSection from "../components/servicesection";
import ImpactSection from "../components/impactsection";
import Testimonials from "../components/testimonials";
import FaqSection from "../components/faqsection";
import ContactSection from "../components/contactsection";
import Footer from "../components/footer";
 

export default function Home() {
  return (
    <div className="bg-dark">
      <NavbarComponent />
      <main>
        <HeroSection />
        
        <Container id="about" className="py-5 bg-dark">
          <Row className="align-items-center my-5">
          <Col md={6} className="align-self-center mb-3 order-md-1">
            <h2 className="display-4 fw-bold mb-3 gradient-text">The Shadow Guild</h2>
            <p className="lead text-light opacity-75">Kami adalah guild developer elite yang berdedikasi menciptakan solusi digital level S. Seperti Sung Jin-Woo yang bangkit dari E-rank menjadi Shadow Monarch, kami transformasi ide biasa menjadi masterpiece digital yang luar biasa.</p>
            <p className="text-light opacity-90">Dengan kekuatan teknologi modern dan strategi development yang terencana, kami membangun sistem yang tidak hanya berfungsi, tetapi mendominasi. Setiap proyek adalah gateway menuju evolusi digital bisnis Anda.</p>
            <Button variant="gradient" size="lg" className="mt-3 btn-gradient">
              Join Our Guild
            </Button>
          </Col>
          <Col md={6} className="order-md-2 text-center">
            <Image 
              src="/images/ONIC.jpg" 
              alt="Shadow Guild" 
              width={500} 
              height={350} 
              className="img-fluid rounded border-purple"
              style={{ objectFit: 'cover' }}
            />
          </Col>
          </Row>
        </Container>
        
        <section className="bg-dark">
          <WorkSection />
        </section>
        
        <ImpactSection />

        <Testimonials />

        <section className="bg-dark">
          <ServiceSection />
        </section>
        
        <FaqSection />

        <section className="bg-dark">
          <ContactSection />
        </section>
      </main>
      
      <Footer />
      
      <style jsx global>{`
        :root {
          --primary-dark: #0a0a0a;
          --secondary-dark: #1a1a1a;
          --accent-purple: #8b5cf6;
          --accent-pink: #ec4899;
          --text-primary: #ffffff;
          --text-secondary: #d1d5db;
          --gradient-primary: linear-gradient(135deg, #8b5cf6 0%, #ec4899 100%);
        }

        body {
          background-color: var(--primary-dark) !important;
          color: var(--text-primary) !important;
        }

        .bg-dark {
          background-color: var(--primary-dark) !important;
        }

        .bg-secondary {
          background-color: #2d2d2d !important;
        }

        .gradient-text {
          background: var(--gradient-primary);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .btn-gradient {
          background: var(--gradient-primary);
          border: none;
          color: white;
          font-weight: 600;
        }

        .btn-gradient:hover {
          transform: translateY(-2px);
          box-shadow: 0 10px 25px rgba(139, 92, 246, 0.4);
          color: white;
        }

        .border-purple {
          border: 1px solid #8b5cf6 !important;
        }

        .bg-purple {
          background: linear-gradient(135deg, #8b5cf6 0%, #ec4899 100%) !important;
        }

        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-10px);
          }
        }

        .animate-fade-in {
          animation: fadeInUp 0.8s ease-out;
        }

        .animate-float {
          animation: float 3s ease-in-out infinite;
        }

        .text-light {
          color: #ffffff !important;
        }
      `}</style>
    </div>
  );
}