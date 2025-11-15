"use client";
import { Row, Col, Container, Card } from "react-bootstrap";

interface Service {
  title: string;
  description: string;
  icon: string;
  features: string[];
  level: string;
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
      level: "National Level"
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
      level: "S-Rank"
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
      level: "S-Rank"
    },
  ];

  return (
    <Container id="services" className="py-5">
      <Row className="mb-5">
        <Col md={12} className="text-center">
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
            <Card className="service-card h-100 border-0 bg-dark text-white border-purple">
              <Card.Body className="p-4 d-flex flex-column">
                <div className="service-header text-center mb-4">
                  <div className="level-badge mb-3 text-center">
                    <span className="badge bg-purple">
                      {service.level}
                    </span>
                  </div>
                  <div className="service-icon d-flex justify-content-center mb-3">
                    <div className="icon-container bg-secondary rounded-circle d-flex align-items-center justify-content-center border border-purple" style={{width: '80px', height: '80px'}}>
                      <i className={`bi ${service.icon} fs-2 text-purple`}></i>
                    </div>
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
                        <span className="text-purple me-2">✦</span>
                        <span className="text-light opacity-90 small">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="text-center mt-4">
                  <button className="btn btn-outline-light btn-sm">
                    Upgrade Sekarang
                  </button>
                </div>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>

      <style jsx>{`
        .service-card {
          transition: all 0.3s ease;
          background: #1a1a1a !important;
        }
        
        .service-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 10px 30px rgba(139, 92, 246, 0.3) !important;
        }
        
        .icon-container {
          transition: all 0.3s ease;
          background: #2d2d2d !important;
        }
        
        .service-card:hover .icon-container {
          transform: scale(1.1);
        }
        
        .border-purple {
          border: 1px solid #8b5cf6 !important;
        }
        
        .bg-purple {
          background: linear-gradient(135deg, #8b5cf6 0%, #ec4899 100%) !important;
        }
        
        .text-purple {
          color: #8b5cf6 !important;
        }
      `}</style>
    </Container>
  );
}

export default ServiceSection;