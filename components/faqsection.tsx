"use client";
import { Container, Row, Col, Accordion, Badge } from "react-bootstrap";

const items = [
  {
    question: "Apakah ShadowStudio membantu post-launch?",
    answer: "Ya, kami menyiapkan sesi handover, dokumentasi lengkap, dan opsi maintenance retainer. SLA respons kritikal ≤ 2 jam.",
  },
  {
    question: "Stack teknologi apa yang digunakan?",
    answer: "Kami fleksibel, namun favorit saat ini: Next.js 15, React Server Components, NestJS, Laravel, dan pipeline Vercel atau AWS.",
  },
  {
    question: "Bagaimana cara kerja engagement?",
    answer: "Kami mulai dengan discovery, lalu milestone sprint 2 minggu. Setiap sprint ada demo, laporan risiko, dan rekomendasi berikutnya.",
  },
  {
    question: "Bisakah bantu redesign sebagian?",
    answer: "Bisa. Kami kerap masuk sebagai squad augmentasi untuk redesign modul tertentu tanpa mengganggu operasi harian.",
  },
];

const FaqSection = () => {
  return (
    <section className="py-5 bg-dark">
      <Container>
        <Row className="mb-4">
          <Col md={6}>
            <Badge bg="dark" text="light" className="px-3 py-2 border border-purple mb-3 text-uppercase">
              faq
            </Badge>
            <h2 className="display-5 fw-bold gradient-text">Pertanyaan Favorit</h2>
            <p className="text-light opacity-75">
              Jawaban singkat tentang cara kami bekerja. Bila masih ragu, tim kami siap melakukan discovery call tanpa biaya.
            </p>
          </Col>
        </Row>
        <Row>
          <Col md={10}>
            <Accordion defaultActiveKey="0" flush>
              {items.map((item, index) => (
                <Accordion.Item eventKey={index.toString()} key={item.question} className="bg-dark text-white border border-purple mb-3 rounded-3 overflow-hidden">
                  <Accordion.Header>{item.question}</Accordion.Header>
                  <Accordion.Body className="bg-secondary bg-opacity-25 text-light">
                    {item.answer}
                  </Accordion.Body>
                </Accordion.Item>
              ))}
            </Accordion>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default FaqSection;

