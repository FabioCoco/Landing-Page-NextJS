"use client"
import {Container, Row, Col} from 'react-bootstrap';
import 'bootstrap-icons/font/bootstrap-icons.css';

export default function Footer() {
    return (
        <footer className="bg-dark text-white py-5">
            <Container>
                <Row>
                    <Col md={4} className="mb-4">
                        <h5 className="fw-bold mb-3">Company Name</h5>
                        <p className="text-muted">
                            Solusi pengembangan web profesional untuk mewujudkan ide digital Anda.
                        </p>
                        <div className="mt-3">
                            <a href="#" className="text-white me-3"><i className="bi bi-facebook fs-4"></i></a>
                            <a href="#" className="text-white me-3"><i className="bi bi-twitter fs-4"></i></a>
                            <a href="#" className="text-white me-3"><i className="bi bi-linkedin fs-4"></i></a>
                            <a href="#" className="text-white"><i className="bi bi-instagram fs-4"></i></a>
                        </div>
                    </Col>
                    <Col md={4} className="mb-4">
                        <h5 className="fw-bold mb-3">Quick Links</h5>
                        <ul className="list-unstyled">
                            <li><a href="#home" className="text-muted text-decoration-none">Home</a></li>
                            <li><a href="#about" className="text-muted text-decoration-none">About Us</a></li>
                            <li><a href="#work" className="text-muted text-decoration-none">Our Work</a></li>
                            <li><a href="#services" className="text-muted text-decoration-none">Services</a></li>
                            <li><a href="#contact" className="text-muted text-decoration-none">Contact</a></li>
                        </ul>
                    </Col>
                    <Col md={4} className="mb-4">
                        <h5 className="fw-bold mb-3">Contact Info</h5>
                        <p className="text-muted"><i className="bi bi-geo-alt-fill me-2"></i> 123 Main Street, Jakarta</p>
                        <p className="text-muted"><i className="bi bi-envelope-fill me-2"></i> info@company.com</p>
                        <p className="text-muted"><i className="bi bi-phone-fill me-2"></i> +62 812 3456 7890</p>
                    </Col>
                </Row>
                <Row className="mt-4 border-top border-secondary pt-3">
                    <Col className="text-center">
                        <p className="mb-0 text-muted">&copy; {new Date().getFullYear()} Company Name. All rights reserved.</p>
                    </Col>
                </Row>
            </Container>
        </footer>
    );
}