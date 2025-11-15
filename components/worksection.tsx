"use client";
import { Row, Col, Container, Button, Card } from "react-bootstrap";
import Image from "next/image";

function WorkSection() {
  return (
    <Container id="work" className="py-5 text-white">
      <Row className="mb-5">
        <Col md={12} className="text-center">
          <h2 className="display-5 fw-bold mb-3">Our Featured Work</h2>
          <p className="text-muted w-75 mx-auto">
            Kami bangga dengan proyek-proyek yang telah kami selesaikan. Setiap proyek adalah bukti komitmen kami terhadap kualitas dan inovasi.
          </p>
        </Col>
      </Row>
      <Row>
        <Col md={4} className="mb-4">
          <Card className="bg-secondary text-white shadow-lg border-0">
            <Card.Img variant="top" src="/images/emyu.jpg" style={{ height: '200px', objectFit: 'cover' }}></Card.Img>
            <Card.Body>
              <Card.Title>**King Emyu**</Card.Title>
              <Card.Text>Website komersial modern yang menampilkan produk unggulan dengan desain *mobile-first*.</Card.Text>
              <Button variant="info" className="mt-2">View Project</Button>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4} className="mb-4">
          <Card className="bg-secondary text-white shadow-lg border-0">
            <Card.Img variant="top" src="/images/kodelwyn.jpg" style={{ height: '200px', objectFit: 'cover' }}></Card.Img>
            <Card.Body>
              <Card.Title>**AE Juara Johor Cup**</Card.Title>
              <Card.Text>Aplikasi *dashboard* internal dengan integrasi data *real-time* untuk analisis performa.</Card.Text>
              <Button variant="info" className="mt-2">View Project</Button>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4} className="mb-4">
          <Card className="bg-secondary text-white shadow-lg border-0">
            <Card.Img variant="top" src="/images/kuch.jpg" style={{ height: '200px', objectFit: 'cover' }}></Card.Img>
            <Card.Body>
              <Card.Title>**GOAT**</Card.Title>
              <Card.Text>Sistem manajemen konten yang *powerful* dan mudah digunakan untuk penerbitan digital.</Card.Text>
              <Button variant="info" className="mt-2">View Project</Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default WorkSection;