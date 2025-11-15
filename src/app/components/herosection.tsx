"use client";
import { Carousel } from "react-bootstrap";

interface Slide {
  title: string;
  subtitle: string;
  imageUrl: string;
}

const HeroSection = () => {
  const slides: Slide[] = [
    {
      title: "THE ALIEN",
      subtitle: "",
      imageUrl: "/images/ae.jpg",
    },
    {
      title: "GOAT ANTHONY",
      subtitle:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem, dolores. Sunt dolorem ea quis, aliquid atque reprehenderit dolores soluta nesciunt minus animi repudiandae saepe ex quia laudantium adipisci corporis aliquam.",
      imageUrl: "/images/banner_01.jpg",
    },
    {
      title: "KING EMYU",
      subtitle:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem, dolores. Sunt dolorem ea quis, aliquid atque reprehenderit dolores soluta nesciunt minus animi repudiandae saepe ex quia laudantium adipisci corporis aliquam.",
      imageUrl: "/images/banner_02.jpeg",
    },
  ];

  return (
    <Carousel fade interval={4000} data-bs-theme="dark">
      {slides.map((slide, index) => (
        <Carousel.Item key={index}>
          <div
            style={{
              backgroundImage: `url(${slide.imageUrl})`, 
              backgroundSize: "cover",
              backgroundPosition: "center",
              height: "80vh",
            }}
          ></div>
          <Carousel.Caption>
            <h1 className="display-4 fw-bold">{slide.title}</h1>
            <p className="lead">{slide.subtitle}</p>
          </Carousel.Caption>
        </Carousel.Item>
      ))}
    </Carousel>
  );
};

export default HeroSection;