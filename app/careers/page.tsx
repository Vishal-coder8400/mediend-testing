"use client";

import { Carousel } from "@mantine/carousel";
import { BackgroundImage, Container } from "@mantine/core";
import CareerHerobox from "../components/CareerHerobox";
import CareerList from "../components/CareerList";
import WhyMediend from "../components/WhyMediend";

export default function HomePage() {
  const images = [
    "/assets/career/career_1.jpg",
    "/assets/career/career_2.jpg",
    "/assets/career/career_3.jpg",
    "/assets/career/career_4.jpg",
    "/assets/career/career_5.jpg",
  ];
  return (
    <>
      <CareerHerobox />
      <Container size="xl">
        <WhyMediend />
        <Carousel my={60} loop withIndicators slidesToScroll={1} height={600}>
          {images.map((url, index) => (
            <Carousel.Slide key={index}>
              <BackgroundImage src={url} w="100%" h="100%" />
            </Carousel.Slide>
          ))}
        </Carousel>
        <CareerList />
      </Container>
    </>
  );
}
