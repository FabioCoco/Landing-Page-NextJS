"use client";
import React from "react";
import NavbarComponent from "../components/navbar";
import HeroSection from "../components/herosection";
import {Container} from "react-bootstrap";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "next/image";
import Button from "react-bootstrap/Button";
import WorkSection from "../components/worksection";
import ServiceSection from "../components/servicesection";
import ContactSection from "../components/contactsection";
import Footer from "../components/footer";
 

export default function Home() {
  return (
    <div>
      <NavbarComponent />
      <main>
        <HeroSection />
        
        <Container id="about" className="py-5">
          <Row className="align-items-center my-5">
          <Col md={6} className="align-self-center mb-3 order-md-1">
            <h2 className="display-5 fw-bold mb-3">About Us: What We Do?</h2>
            <p className="lead text-muted">Kami adalah tim pengembang bersemangat yang fokus pada pembuatan solusi digital berkualitas tinggi, mulai dari desain yang menarik hingga fungsionalitas yang kuat.</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur modi repellat nostrum fuga nulla enim sunt exercitationem et illum reiciendis doloribus ex vero, est autem natus libero harum corrupti maxime.</p>
            <Button variant="dark" size="lg" className="mt-3">Learn More</Button>
          </Col>
          <Col md={6} className="order-md-2 text-center">
            <Image 
              src="/images/ONIC.jpg" 
              alt="About Us" 
              width={500} 
              height={350} 
              className="img-fluid rounded shadow-lg"
              style={{ objectFit: 'cover' }}
            />
          </Col>
          </Row>
        </Container>
        
        <section className="bg-dark">
          <WorkSection />
        </section>
        
        <section className="bg-secondary">
          <ServiceSection />
        </section>
        
        <section className="bg-light">
          <ContactSection />
        </section>
      </main>
      
      <Footer />
    </div>
  );
}