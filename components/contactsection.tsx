"use client"
import {Container, Row, Col, Form, Button, Card} from 'react-bootstrap';

function ContactSection() {
    return (
        <Container id="contact" className="py-5">
            <Row className="justify-content-center">
                <Col md={8}>
                    <Card className="p-4 border-0 bg-dark text-white border-purple"> 
                        <div className="text-center">
                            <h2 className="display-5 fw-bold mb-3 gradient-text">Get In Touch</h2>
                            <p className="lead text-light opacity-75">Jangan ragu untuk menghubungi kami. Tim kami siap mendiskusikan proyek dan kebutuhan digital Anda.</p>
                        </div>
                        <Form className='mt-5 text-start'>
                            <Row>
                                <Col md={6}>
                                    <Form.Group className="mb-4" controlId="formName">
                                        <Form.Label className="fw-bold text-light">Nama</Form.Label>
                                        <Form.Control 
                                            size="lg" 
                                            type="text" 
                                            placeholder="Masukkan nama lengkap Anda" 
                                            required 
                                            className="bg-secondary border-purple text-light"
                                        />
                                    </Form.Group>
                                </Col>
                                <Col md={6}>
                                    <Form.Group className="mb-4" controlId="formEmail">
                                        <Form.Label className="fw-bold text-light">Alamat Email</Form.Label>
                                        <Form.Control 
                                            size="lg" 
                                            type="email" 
                                            placeholder="Masukkan email profesional Anda" 
                                            required 
                                            className="bg-secondary border-purple text-light"
                                        />
                                    </Form.Group>
                                </Col>
                            </Row>
                            <Form.Group className="mb-4" controlId="formSubject">
                                <Form.Label className="fw-bold text-light">Subjek</Form.Label>
                                <Form.Control 
                                    size="lg" 
                                    type="text" 
                                    placeholder="Subjek pesan Anda" 
                                    required 
                                    className="bg-secondary border-purple text-light"
                                />
                            </Form.Group>
                            <Form.Group className="mb-4" controlId="formMessage">
                                <Form.Label className="fw-bold text-light">Pesan</Form.Label>
                                <Form.Control 
                                    as="textarea" 
                                    rows={6} 
                                    placeholder="Masukkan pesan detail Anda" 
                                    className="bg-secondary border-purple text-light"
                                />
                            </Form.Group>
                            <Button variant="gradient" type="submit" size="lg" className="w-100 btn-gradient">
                                Kirim Pesan
                            </Button>
                        </Form>
                    </Card>
                </Col>
            </Row>
        </Container>        
    )
}

export default ContactSection;