"use client";
import { Container, Row, Col, Card, ProgressBar, OverlayTrigger, Tooltip, Badge, ListGroup } from "react-bootstrap";

const stats = [
  {
    label: "Project Velocity",
    value: "92%",
    subtext: "deployment on schedule",
    variant: "success",
    progress: 92,
  },
  {
    label: "Client Retention",
    value: "87%",
    subtext: "renewal & expansion",
    variant: "purple",
    progress: 87,
  },
  {
    label: "Avg. NPS",
    value: "64",
    subtext: "world-class experience",
    variant: "info",
    progress: 64,
  },
];

const battlePlan = [
  { title: "Discovery Sprint", desc: "Deep-dive workshop, persona mapping, dan audit teknologi." },
  { title: "Design Duel", desc: "Rapid prototyping berorientasi data & usability test terarah." },
  { title: "Shadow Build", desc: "Stack modern, pipeline CI/CD, dan review keamanan berlapis." },
  { title: "Release Ceremony", desc: "Observability siap pakai, playbook incident, dan knowledge transfer." },
];

const partners = ["AWS", "Vercel", "Azure", "Shopify Plus"];

const ImpactSection = () => {
  return (
    <section className="py-5 bg-dark">
      <Container>
        <Row className="align-items-center mb-5">
          <Col md={7}>
            <Badge bg="dark" text="light" className="px-3 py-2 border border-purple mb-3 text-uppercase">
              results first
            </Badge>
            <h2 className="display-5 fw-bold gradient-text mb-3">Impact Metrics</h2>
            <p className="lead text-light opacity-75">
              Setiap engagement dimulai dengan target bisnis yang jelas, lalu diterjemahkan menjadi roadmap eksekusi yang terukur.
            </p>
          </Col>
          <Col md={5} className="text-md-end text-center">
            <div className="d-inline-flex flex-column align-items-center p-4 border border-purple rounded-4 bg-secondary bg-opacity-25">
              <span className="text-uppercase small text-light opacity-70 mb-2">Certified Partners</span>
              <div className="d-flex flex-wrap gap-2 justify-content-center">
                {partners.map((partner) => (
                  <Badge key={partner} bg="dark" className="px-3 py-2 border border-purple text-light">
                    {partner}
                  </Badge>
                ))}
              </div>
            </div>
          </Col>
        </Row>

        <Row className="g-4">
          {stats.map((stat) => (
            <Col md={4} key={stat.label}>
              <Card className="bg-secondary bg-opacity-25 border-0 h-100 shadow-sm border-purple">
                <Card.Body>
                  <p className="small text-uppercase text-light opacity-60">{stat.label}</p>
                  <div className="d-flex align-items-baseline justify-content-between mb-2">
                    <h3 className="display-6 fw-bold text-white">{stat.value}</h3>
                    <span className="text-light opacity-70">{stat.subtext}</span>
                  </div>
                  <ProgressBar 
                    now={stat.progress} 
                    variant={stat.variant === "purple" ? undefined : stat.variant} 
                    className="progress-bar-purple"
                  />
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>

        <Row className="mt-5 g-4">
          <Col lg={7}>
            <Card className="bg-secondary bg-opacity-25 border-0 border-purple h-100">
              <Card.Body>
                <div className="d-flex align-items-center justify-content-between mb-4">
                  <h5 className="fw-bold text-white mb-0">Battle Plan</h5>
                  <span className="badge bg-purple">Playbook Shadow Guild</span>
                </div>
                <ListGroup variant="flush">
                  {battlePlan.map((step, index) => (
                    <ListGroup.Item key={step.title} className="bg-dark text-white border-secondary">
                      <div className="d-flex">
                        <div className="me-3">
                          <span className="badge rounded-circle bg-purple">{index + 1}</span>
                        </div>
                        <div>
                          <h6 className="fw-semibold mb-1">{step.title}</h6>
                          <p className="mb-0 text-light opacity-75 small">{step.desc}</p>
                        </div>
                      </div>
                    </ListGroup.Item>
                  ))}
                </ListGroup>
              </Card.Body>
            </Card>
          </Col>
          <Col lg={5}>
            <Card className="bg-secondary bg-opacity-25 border-0 border-purple h-100">
              <Card.Body>
                <div className="d-flex align-items-center justify-content-between mb-3">
                  <h5 className="fw-bold text-white mb-0">Service Guarantees</h5>
                  <OverlayTrigger placement="left" overlay={<Tooltip id="slo-tooltip">SLA & SLO dirancang untuk menjaga performa aplikasi setelah go-live.</Tooltip>}>
                    <span className="text-purple small">Detail SLA</span>
                  </OverlayTrigger>
                </div>
                <ul className="list-unstyled text-light opacity-85 mb-4">
                  <li className="mb-2"><i className="bi bi-clock-history me-2 text-purple"></i>Support coverage 30 hari pasca rilis</li>
                  <li className="mb-2"><i className="bi bi-shield-lock me-2 text-purple"></i>Hardening keamanan OWASP & audit akses</li>
                  <li className="mb-2"><i className="bi bi-graph-up-arrow me-2 text-purple"></i>Monitoring real-time & weekly pulse report</li>
                </ul>
                <div className="p-4 rounded-4 bg-dark border border-purple">
                  <p className="small text-uppercase text-light opacity-60 mb-1">Shadow Hotline</p>
                  <h4 className="fw-bold text-white mb-2">+62 812 9898 1001</h4>
                  <p className="text-light opacity-75 small mb-0">Tim siap membantu dalam <span className="text-purple">≤ 30 menit</span>.</p>
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>

      <style jsx>{`
        .progress-bar-purple .progress-bar {
          background: linear-gradient(135deg, #8b5cf6 0%, #ec4899 100%);
        }
      `}</style>
    </section>
  );
};

export default ImpactSection;

