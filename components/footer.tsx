"use client"
import {Container, Row, Col} from 'react-bootstrap';
import 'bootstrap-icons/font/bootstrap-icons.css';

export default function Footer() {
    return (
        <footer className="bg-dark text-white py-5 border-top border-purple">
            <Container>
                <Row>
                    <Col md={4} className="mb-4">
                        <h5 className="fw-bold mb-3 gradient-text">ShadowStudio</h5>
                        <p className="text-light opacity-75">
                            Solusi pengembangan web profesional untuk mewujudkan ide digital Anda dengan kekuatan shadow army.
                        </p>
                        <div className="mt-3">
                            <a href="#" className="text-light me-3"><i className="bi bi-facebook fs-4"></i></a>
                            <a href="#" className="text-light me-3"><i className="bi bi-twitter fs-4"></i></a>
                            <a href="#" className="text-light me-3"><i className="bi bi-linkedin fs-4"></i></a>
                            <a href="#" className="text-light"><i className="bi bi-instagram fs-4"></i></a>
                        </div>
                    </Col>
                    <Col md={4} className="mb-4">
                        <h5 className="fw-bold mb-3 text-light">Quick Links</h5>
                        <ul className="list-unstyled">
                            <li><a href="#home" className="text-light opacity-75 text-decoration-none">Beranda</a></li>
                            <li><a href="#about" className="text-light opacity-75 text-decoration-none">Tentang Kami</a></li>
                            <li><a href="#work" className="text-light opacity-75 text-decoration-none">Portfolio</a></li>
                            <li><a href="#services" className="text-light opacity-75 text-decoration-none">Layanan</a></li>
                            <li><a href="#contact" className="text-light opacity-75 text-decoration-none">Kontak</a></li>
                        </ul>
                    </Col>
                    <Col md={4} className="mb-4">
                        <h5 className="fw-bold mb-3 text-light">Contact Info</h5>
                        <p className="text-light opacity-75"><i className="bi bi-geo-alt-fill me-2"></i> 123 Main Street, Jakarta</p>
                        <p className="text-light opacity-75"><i className="bi bi-envelope-fill me-2"></i> info@shadowstudio.com</p>
                        <p className="text-light opacity-75"><i className="bi bi-phone-fill me-2"></i> +62 812 000 0000</p>
                    </Col>
                </Row>
                <Row className="mt-4 border-top border-secondary pt-3">
                    <Col className="text-center">
                        <p className="mb-0 text-light opacity-75">&copy; {new Date().getFullYear()} ShadowStudio. All rights reserved.</p>
                    </Col>
                </Row>
            </Container>
        </footer>
    );
}