"use client";
import { useState } from 'react';
import { Row, Col, Container, Button, Card, Modal } from 'react-bootstrap';
import Image from 'next/image';

interface Project {
  id: number;
  title: string;
  description: string;
  fullDescription: string;
  imageUrl: string;
  technologies: string[];
  category: string;
  liveUrl?: string;
}

function WorkSection() {
  const [showModal, setShowModal] = useState(false);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const projects: Project[] = [
    {
      id: 1,
      title: "E-MYU",
      description: "Website komersial modern dengan desain mobile-first yang mengutamakan pengalaman pengguna.",
      fullDescription: "Platform e-commerce premium dengan sistem pembayaran terintegrasi dan manajemen inventaris real-time. Dibangun dengan teknologi terbaru untuk performa optimal.",
      imageUrl: "/images/emyu.jpg",
      technologies: ["Next.js", "TypeScript", "Stripe", "MongoDB"],
      category: "E-Commerce",
      liveUrl: "#"
    },
    {
      id: 2,
      title: "Champion AE",
      description: "Dashboard analitik real-time untuk monitoring performa dan analisis data turnamen.",
      fullDescription: "Sistem dashboard canggih dengan visualisasi data real-time, predictive analytics, dan automated reporting untuk turnamen esports profesional.",
      imageUrl: "/images/kodelwyn.jpg",
      technologies: ["React", "Node.js", "WebSocket", "Chart.js"],
      category: "Dashboard",
      liveUrl: "#"
    },
    {
      id: 3,
      title: "GOAT Content Management",
      description: "Sistem manajemen konten enterprise dengan workflow management yang powerful.",
      fullDescription: "Platform CMS tingkat enterprise dengan multi-user support, workflow management, dan integrasi dengan berbagai platform publishing digital.",
      imageUrl: "/images/goat.jpg",
      technologies: ["Vue.js", "Laravel", "MySQL", "AWS"],
      category: "CMS",
      liveUrl: "#"
    },
  ];

  const handleProjectClick = (project: Project) => {
    setSelectedProject(project);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setSelectedProject(null);
  };

  return (
    <>
      <Container id="work" className="py-5">
        <Row className="mb-5">
          <Col md={12} className="text-center">
            <h2 className="display-4 fw-bold mb-3 gradient-text">Army of Creations</h2>
            <p className="lead text-light w-75 mx-auto opacity-75">
              Seperti Shadow Army yang setia, setiap proyek adalah prajurit yang siap 
              membawa kemenangan digital untuk kerajaan bisnis Anda.
            </p>
          </Col>
        </Row>
        <Row>
          {projects.map((project) => (
            <Col key={project.id} lg={4} md={6} className="mb-4">
              <Card className="project-card bg-dark text-white border-0 h-100 border-purple">
                <div className="project-image-container position-relative overflow-hidden">
                  <Card.Img 
                    variant="top" 
                    src={project.imageUrl} 
                    style={{ height: '250px', objectFit: 'cover' }}
                  />
                  <div className="project-overlay position-absolute top-0 start-0 w-100 h-100 d-flex align-items-center justify-content-center">
                    <Button 
                      variant="outline-light" 
                      size="sm"
                      onClick={() => handleProjectClick(project)}
                    >
                      Lihat Detail
                    </Button>
                  </div>
                </div>
                <Card.Body className="d-flex flex-column">
                  <div className="mb-2">
                    <span className="badge bg-purple">
                      {project.category}
                    </span>
                  </div>
                  <Card.Title className="h5 fw-bold mb-3 text-white">{project.title}</Card.Title>
                  <Card.Text className="text-light opacity-75 flex-grow-1">
                    {project.description}
                  </Card.Text>
                  <div className="mt-auto">
                    <div className="tech-stack mb-3">
                      {project.technologies.slice(0, 3).map((tech, index) => (
                        <span key={index} className="badge bg-dark me-1 mb-1 border border-purple text-light">
                          {tech}
                        </span>
                      ))}
                    </div>
                    <Button 
                      variant="outline-light" 
                      size="sm"
                      onClick={() => handleProjectClick(project)}
                      className="w-100"
                    >
                      Jelajahi Proyek
                    </Button>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>

      <Modal 
        show={showModal} 
        onHide={handleCloseModal} 
        size="lg" 
        centered
        className="project-modal"
      >
        {selectedProject && (
          <>
            <Modal.Header closeButton className="bg-dark text-white border-bottom border-purple">
              <Modal.Title className="fw-bold gradient-text">{selectedProject.title}</Modal.Title>
            </Modal.Header>
            <Modal.Body className="p-0 bg-dark">
              <Image 
                src={selectedProject.imageUrl} 
                alt={selectedProject.title}
                width={800}
                height={400}
                className="img-fluid w-100"
                style={{ objectFit: 'cover', maxHeight: '400px' }}
              />
              <div className="p-4 bg-dark text-white">
                <div className="mb-3">
                  <span className="badge bg-purple me-2">
                    {selectedProject.category}
                  </span>
                  {selectedProject.technologies.map((tech, index) => (
                    <span key={index} className="badge bg-secondary me-1 mb-1 border border-purple text-light">
                      {tech}
                    </span>
                  ))}
                </div>
                <p className="text-light opacity-90 mb-4">{selectedProject.fullDescription}</p>
                
                <div className="project-links d-flex gap-2">
                  {selectedProject.liveUrl && (
                    <Button variant="primary" size="sm" href={selectedProject.liveUrl} className="btn-gradient">
                      Lihat Demo
                    </Button>
                  )}
                </div>
              </div>
            </Modal.Body>
          </>
        )}
      </Modal>

      <style jsx>{`
        .project-card {
          transition: all 0.3s ease;
          background: #1a1a1a !important;
        }
        
        .project-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 10px 30px rgba(139, 92, 246, 0.3) !important;
        }
        
        .project-overlay {
          background: rgba(139, 92, 246, 0.9);
          opacity: 0;
          transition: all 0.3s ease;
        }
        
        .project-card:hover .project-overlay {
          opacity: 1;
        }
        
        .border-purple {
          border: 1px solid #8b5cf6 !important;
        }
        
        .bg-purple {
          background: linear-gradient(135deg, #8b5cf6 0%, #ec4899 100%) !important;
        }
      `}</style>
    </>
  );
}

export default WorkSection;