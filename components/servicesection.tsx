"use client";
import { Row, Col, Container, Button, Card } from "react-bootstrap";
import Image from "next/image";

function ServiceSection() {
  return (
    <Container id="services" className="py-5 text-white">
        <Row className="mb-5">
            <Col md={12} className="text-center">
                <h2 className="display-5 fw-bold mb-3">Our Core Services</h2>
                <p className="text-muted w-75 mx-auto">Kami menyediakan berbagai layanan pengembangan web yang profesional untuk membantu bisnis Anda berkembang.</p>
            </Col>
        </Row>
        <Row className="text-center">
            <Col md={4} className="mb-4">
            <Card className="p-4 h-100 shadow bg-secondary text-white border-0">
                <div className="mx-auto mb-3" style={{ width: '100px', height: '100px' }}>
                    <Image src="/images/24-7.png" alt="Service 1 Icon" width={100} height={100} className="img-fluid rounded-circle" style={{ objectFit: 'cover' }} />
                </div>
                <Card.Title className="h4 fw-bold">Service 1: Web Development</Card.Title>
                <Card.Text>Membangun situs web kustom menggunakan teknologi modern seperti React dan Next.js dengan fokus pada kecepatan dan SEO.</Card.Text>
            </Card>
            </Col>
            <Col md={4} className="mb-4">
            <Card className="p-4 h-100 shadow bg-secondary text-white border-0">
                <div className="mx-auto mb-3" style={{ width: '100px', height: '100px' }}>
                    <Image src="/images/huawei.png" alt="Service 2 Icon" width={100} height={100} className="img-fluid rounded-circle" style={{ objectFit: 'cover' }} />
                </div>
                <Card.Title className="h4 fw-bold">Service 2: Mobile App Integration</Card.Title>
                <Card.Text>Mengintegrasikan aplikasi web dengan aplikasi mobile yang sudah ada atau membangun API baru untuk layanan *cross-platform*.</Card.Text>
            </Card>
            </Col>
            <Col md={4} className="mb-4">
            <Card className="p-4 h-100 shadow bg-secondary text-white border-0">
                <div className="mx-auto mb-3" style={{ width: '100px', height: '100px' }}>
                    <Image src="/images/github.png" alt="Service 3 Icon" width={100} height={100} className="img-fluid rounded-circle" style={{ objectFit: 'cover' }} />
                </div>
                <Card.Title className="h4 fw-bold">Service 3: UI/UX Design</Card.Title>
                <Card.Text>Merancang antarmuka pengguna yang intuitif dan menarik, didukung oleh riset pengguna dan pengujian fungsionalitas.</Card.Text>
            </Card>
            </Col>
        </Row>
    </Container>
  );
}

export default ServiceSection;