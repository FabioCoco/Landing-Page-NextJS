"use client";
import { Container, Row, Col, Card, Carousel, Image as RBImage } from "react-bootstrap";

const testimonials = [
  {
    name: "Naira Athalia",
    title: "Product Director, E-MYU",
    quote: "ShadowStudio mengganti chaos sprint kami menjadi orkestrasi yang disiplin. Demo perdana langsung bikin investor yakin.",
    avatar: "/images/emyu.jpg",
  },
  {
    name: "Kodel Wyn",
    title: "CEO, Champion AE",
    quote: "Toolkit observability dan playbook incident yang mereka siapkan membantu tim internal kami autonomus dalam 2 minggu.",
    avatar: "/images/kodelwyn.jpg",
  },
  {
    name: "Rayson Ling",
    title: "Head of Ops, GOAT Media",
    quote: "Kolaborasi remote tetap terasa dekat. Setiap keputusan didukung data nyata dari user testing dan eksperimen.",
    avatar: "/images/goat.jpg",
  },
];

const Testimonials = () => {
  return (
    <section className="py-5 bg-dark">
      <Container>
        <Row className="mb-4">
          <Col className="text-center">
            <p className="text-uppercase text-light opacity-60 small mb-1">Social Proof</p>
            <h2 className="display-5 gradient-text fw-bold">Client Stories</h2>
            <p className="text-light opacity-70 w-75 mx-auto">
              Testimoni langsung dari para pemimpin yang menggandeng kami untuk mengawal transformasi digital mereka.
            </p>
          </Col>
        </Row>
        <Row>
          <Col lg={{ span: 8, offset: 2 }}>
            <Carousel indicators={false} variant="dark" className="testimonial-carousel">
              {testimonials.map((testimonial, index) => (
                <Carousel.Item key={index}>
                  <Card className="bg-secondary bg-opacity-25 border-0 border-purple text-white p-4">
                    <Card.Body>
                      <div className="d-flex flex-column flex-md-row align-items-center gap-3">
                        <RBImage 
                          src={testimonial.avatar} 
                          roundedCircle 
                          width={90} 
                          height={90} 
                          className="border border-purple object-fit-cover" 
                        />
                        <div>
                          <p className="fs-5 fst-italic text-light opacity-90">“{testimonial.quote}”</p>
                          <h5 className="fw-bold text-white mb-0">{testimonial.name}</h5>
                          <small className="text-light opacity-70">{testimonial.title}</small>
                        </div>
                      </div>
                    </Card.Body>
                  </Card>
                </Carousel.Item>
              ))}
            </Carousel>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Testimonials;

