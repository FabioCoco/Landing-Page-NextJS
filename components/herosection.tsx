"use client"
import Carousel from 'react-bootstrap/Carousel';

interface Slide {
    title: string;
    subtitle: string;
    imageUrl: string;
}

const HeroSection = () => {
    const slides: Slide[] = [
        {
            title: "First slide label: Elegant Design",
            subtitle: "Kami merancang solusi digital yang berfokus pada pengalaman pengguna yang luar biasa.",
            imageUrl: "/images/banner_01.JPG",
        },
        {
            title: "Second slide label: Powerful Performance",
            subtitle: "Infrastruktur kuat untuk memastikan website Anda selalu cepat dan stabil.",
            imageUrl: "/images/banner_02.JPG",
        },
        {
            title: "Third slide label: Future-Proof Technology",
            subtitle: "Menggunakan teknologi terbaru untuk solusi yang berkelanjutan dan modern.",
            imageUrl: "/images/banner_03.jpg",
        },
    ]

    return (
        <Carousel fade interval={4000} data-bs-theme="dark">
            {slides.map((slide, index) => (
                <Carousel.Item key={index}>
                    <div 
                        style={{
                            backgroundImage:`url(${slide.imageUrl})`,
                            backgroundSize: "cover",
                            backgroundPosition: "center",
                            height: "80vh",
                        }}
                    >
                        <div style={{
                            position: 'absolute',
                            top: 0,
                            left: 0,
                            width: '100%',
                            height: '100%',
                            backgroundColor: 'rgba(0, 0, 0, 0.4)'
                        }}></div>
                    </div>
                    
                    <Carousel.Caption style={{ zIndex: 10 }}>
                        <h1 className="display-3 fw-bolder text-white">{slide.title}</h1>
                        <p className="lead text-white">{slide.subtitle}</p>
                    </Carousel.Caption>
                </Carousel.Item>
            )
            )}
        </Carousel>
    )
}

export default HeroSection;