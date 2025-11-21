"use client";
import { useState } from "react";
import { Row, Col, Container, Card, Modal, Button, ListGroup, Badge } from "react-bootstrap";

interface Service {
  title: string;
  description: string;
  icon: string;
  features: string[];
  level: string;
  promise: string;
  deliverables: string[];
  timeframe: string;
}

function ServiceSection() {
  const services: Service[] = [
    {
      title: "Web Development",
      description: "Membangun benteng digital yang kokoh dengan teknologi modern. Setiap kode adalah prajurit yang siap berperang di medan digital.",
      icon: "bi-laptop",
      features: [
        "Desain Responsif Mobile-First",
        "Optimasi SEO Maximum Power", 
        "Performance Optimization",
        "Cross-browser Compatibility"
      ],
      level: "National Level",
      promise: "Website kelas enterprise dengan performa cepat, aman, dan scalable.",
      deliverables: ["UI High Fidelity", "Next.js SSR/ISR", "Monitoring & Alerting", "Deployment CI/CD"],
      timeframe: "4 - 8 minggu"
    },
    {
      title: "Mobile App Integration", 
      description: "Menyatukan kekuatan web dan mobile seperti hunter dalam guild. Sistem terintegrasi yang harmonis dan powerful.",
      icon: "bi-phone",
      features: [
        "RESTful API Development",
        "Native Mobile Applications",
        "Real-time Push Notifications", 
        "Seamless User Experience"
      ],
      level: "S-Rank",
      promise: "Ekosistem aplikasi yang sinkron dengan backend andal dan notifikasi real-time.",
      deliverables: ["API Gateway", "OAuth2 / JWT Auth", "Push Notification Setup", "App Store & Play Console Handoff"],
      timeframe: "6 - 10 minggu"
    },
    {
      title: "UI/UX Design",
      description: "Merancang interface yang intuitif seperti skill mastery. Setiap elemen dirancang untuk kemenangan user experience.",
      icon: "bi-palette",
      features: [
        "User Research & Analysis",
        "Wireframing & Prototyping",
        "Interactive Battle Design",
        "Usability Testing Ground"
      ],
      level: "S-Rank",
      promise: "Pengalaman pengguna premium dengan brand story yang konsisten.",
      deliverables: ["Design System Figma", "Interactive Prototype", "User Journey Map", "Hand-off Documentation"],
      timeframe: "3 - 6 minggu"
    },
  ];

  const [selectedService, setSelectedService] = useState<Service | null>(null);

  const handleOpenModal = (service: Service) => {
    setSelectedService(service);
  };

  const handleCloseModal = () => {
    setSelectedService(null);
  };

  return (
    <>
      <Container id="services" className="py-5">
        <Row className="mb-5">
          <Col md={12} className="text-center">
            <Badge bg="dark" text="light" className="px-3 py-2 border border-purple mb-3">
              layanan unggulan
            </Badge>
            <h2 className="display-4 fw-bold mb-3 gradient-text">Hunter Services</h2>
            <p className="lead text-light w-75 mx-auto opacity-75">
              Layanan pembangunan digital dengan kekuatan hunter level S. 
              Siap membawa bisnis Anda menuju puncak ranking digital.
            </p>
          </Col>
        </Row>
        <Row className="g-4">
          {services.map((service, index) => (
            <Col key={index} lg={4} md={6}>
              <Card className="service-card h-100 border-0 bg-dark text-white border-purple position-relative overflow-hidden">
                <span className="service-rank badge bg-purple position-absolute top-0 end-0 m-3">{service.level}</span>
                <Card.Body className="p-4 d-flex flex-column">
                  <div className="service-icon d-flex justify-content-center mb-4">
                    <div className="icon-container rounded-circle d-flex align-items-center justify-content-center border border-purple" style={{width: '90px', height: '90px'}}>
                      <i className={`bi ${service.icon} fs-1 text-purple`}></i>
                    </div>
                  </div>
                  
                  <Card.Title className="h4 fw-bold text-center mb-3 text-white">
                    {service.title}
                  </Card.Title>
                  
                  <Card.Text className="text-light opacity-75 text-center mb-4 flex-grow-1">
                    {service.description}
                  </Card.Text>
                  
                  <div className="service-features mt-auto">
                    <h6 className="fw-semibold mb-3 gradient-text text-center">Skill Set:</h6>
                    <ul className="list-unstyled">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="mb-2 d-flex align-items-center">
                          <span className="text-purple me-2">
                            <i className="bi bi-check2-circle"></i>
                          </span>
                          <span className="text-light opacity-90 small">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="text-center mt-4 d-flex flex-column gap-2">
                    <Button variant="gradient" size="sm" className="btn-gradient w-100" onClick={() => handleOpenModal(service)}>
                      Lihat Detail
                    </Button>
                    <Button variant="outline-light" size="sm" className="w-100 border-purple">
                      Booking Konsultasi
                    </Button>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>

      <Modal show={!!selectedService} onHide={handleCloseModal} centered size="lg" className="service-modal">
        {selectedService && (
          <>
            <Modal.Header closeButton className="bg-dark border-purple text-white">
              <Modal.Title className="fw-bold gradient-text">{selectedService.title}</Modal.Title>
            </Modal.Header>
            <Modal.Body className="bg-dark text-white">
              <Row className="g-4">
                <Col md={7}>
                  <h5 className="fw-semibold mb-3">Apa yang Anda dapatkan?</h5>
                  <p className="text-light opacity-85">{selectedService.promise}</p>
                  <div className="p-3 rounded border border-purple bg-secondary bg-opacity-25 mt-3">
                    <p className="mb-1 small text-uppercase text-purple fw-bold">Estimasi Timeline</p>
                    <p className="mb-0 text-light">{selectedService.timeframe}</p>
                  </div>
                </Col>
                <Col md={5}>
                  <h6 className="fw-semibold mb-3">Package Deliverables</h6>
                  <ListGroup variant="flush">
                    {selectedService.deliverables.map((item, idx) => (
                      <ListGroup.Item key={idx} className="bg-dark text-light border-secondary d-flex align-items-center">
                        <span className="text-purple me-2">
                          <i className="bi bi-shield-check"></i>
                        </span>
                        {item}
                      </ListGroup.Item>
                    ))}
                  </ListGroup>
                </Col>
              </Row>
            </Modal.Body>
            <Modal.Footer className="bg-dark border-purple">
              <Button variant="outline-light" onClick={handleCloseModal}>
                Tutup
              </Button>
              <Button variant="gradient" className="btn-gradient">
                Jadwalkan Kick-off
              </Button>
            </Modal.Footer>
          </>
        )}
      </Modal>

      <style jsx>{`
        .service-card {
          transition: all 0.3s ease;
          background: #1a1a1a !important;
        }
        
        .service-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 20px 40px rgba(139, 92, 246, 0.25) !important;
        }
        
        .icon-container {
          transition: all 0.3s ease;
          background: #2d2d2d !important;
        }
        
        .service-card:hover .icon-container {
          transform: scale(1.1);
          box-shadow: 0 0 20px rgba(139, 92, 246, 0.4);
        }
        
        .border-purple {
          border: 1px solid #8b5cf6 !important;
        }
        
        .bg-purple {
          background: linear-gradient(135deg, #8b5cf6 0%, #ec4899 100%) !important;
          color: white !important;
        }
        
        .text-purple {
          color: #8b5cf6 !important;
        }
      `}</style>
    </>
  );
}

export default ServiceSection;