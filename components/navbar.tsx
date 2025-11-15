'use client'
import { useState, useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function NavbarComponent() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 50;
      setScrolled(isScrolled);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <Navbar 
      expand="lg" 
      className={`${scrolled ? 'bg-dark shadow' : 'bg-transparent'} transition-all`}
      variant="dark" 
      fixed="top"
      style={{ 
        transition: 'all 0.3s ease',
        background: scrolled ? 'rgba(10, 10, 10, 0.95)' : 'transparent',
        backdropFilter: scrolled ? 'blur(10px)' : 'none'
      }}
    >
      <Container>
        <Navbar.Brand href="#" className="fw-bold fs-3">
          <span className="gradient-text">Shadow</span>Studio
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav className="ms-auto">
            <Nav.Link href="#home" className="fw-semibold mx-2 text-white">Beranda</Nav.Link>
            <Nav.Link href="#about" className="fw-semibold mx-2 text-white">Tentang Kami</Nav.Link>
            <Nav.Link href="#work" className="fw-semibold mx-2 text-white">Portfolio</Nav.Link>
            <Nav.Link href="#services" className="fw-semibold mx-2 text-white">Layanan</Nav.Link>
            <Nav.Link href="#contact" className="fw-semibold mx-2 text-white">Kontak</Nav.Link>
          </Nav>    
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarComponent;