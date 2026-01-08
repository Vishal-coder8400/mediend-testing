"use client";
import { useState, useEffect } from "react";
import { Card, Group, Stack, Title, Text, Button } from "@mantine/core";
import {
  IconChevronLeft,
  IconChevronRight,
  IconBriefcase,
  IconThumbUp,
} from "@tabler/icons-react";
import Link from "next/link";
import { Doctor } from "../../../doctor/[doctorName]/page";

import Carousel from "react-multi-carousel";

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

const DoctorCarousel = ({ data }: { data: Doctor[] }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const totalSlides = data.length;

  useEffect(() => {
    if (!isPlaying) return;

    const interval = setInterval(() => {
      handleNext();
    }, 3000);

    return () => clearInterval(interval);
  }, [isPlaying, currentSlide]);

  const handleTransitionEnd = () => {
    setIsTransitioning(false);

    // Handle wrap-around effect
    if (currentSlide === totalSlides) {
      setCurrentSlide(0);
    } else if (currentSlide === -1) {
      setCurrentSlide(totalSlides - 1);
    }
  };

  const handleNext = () => {
    if (isTransitioning) return;

    setIsTransitioning(true);
    setCurrentSlide((prev) => prev + 1);
    setIsPlaying(false);
  };

  const handlePrevious = () => {
    if (isTransitioning) return;

    setIsTransitioning(true);
    setCurrentSlide((prev) => prev - 1);
    setIsPlaying(false);
  };

  return (
    <Carousel
      additionalTransfrom={0}
      autoPlay
      autoPlaySpeed={3000}
      transitionDuration={1000}
      centerMode={false}
      className=""
      containerClass="container-with-dots"
      dotListClass=""
      draggable
      focusOnSelect={false}
      infinite
      itemClass="mx-2 h-full"
      keyBoardControl
      minimumTouchDrag={80}
      pauseOnHover
      renderArrowsWhenDisabled={false}
      renderButtonGroupOutside={false}
      renderDotsOutside={false}
      responsive={{
        desktop: {
          breakpoint: {
            max: 3000,
            min: 1024,
          },
          items: 2,
          partialVisibilityGutter: 40,
        },
        mobile: {
          breakpoint: {
            max: 464,
            min: 0,
          },
          items: 1,
          partialVisibilityGutter: 0,
        },
        tablet: {
          breakpoint: {
            max: 1024,
            min: 464,
          },
          items: 1,
          partialVisibilityGutter: 10,
        },
      }}
      rewind={false}
      rewindWithAnimation={false}
      rtl={false}
      shouldResetAutoplay
      showDots={false}
      sliderClass=""
      slidesToSlide={1}
      swipeable
    >
      {data.map((doctor, idx) => {
        return (
          <div key={idx} className="">
            <Link href={`/doctor/${doctor.slug}`} className="">
              <Card className="h-full border">
                <div className="gap-4 flex flex-wrap flex-col sm:flex-row">
                  <div className="h-32 w-32 relative overflow-hidden rounded-lg">
                    <img
                      src={doctor.imageUrl}
                      alt={doctor.title}
                      className="absolute inset-0 h-full w-full object-cover"
                    />
                  </div>
                  <Stack className="flex-1 gap-4">
                    <div>
                      <Title
                        order={3}
                        className="text-lg font-semibold text-blue-600"
                      >
                        {doctor.title}
                      </Title>
                      <Text
                        className="text-sm text-gray-500 line-clamp-1"
                        size="sm"
                        c={"gray.9"}
                      >
                        {doctor.degrees}
                      </Text>
                      <Text
                        className="text-sm text-gray-500 line-clamp-1 "
                        size="sm"
                        c={"gray.9"}
                      >
                        {doctor.speciality}
                      </Text>
                    </div>
                    <Group className="gap-6">
                      <div>
                        <Group className="gap-2">
                          <IconBriefcase className="h-5 w-5 text-blue-600" />
                          <span className="text-sm font-semibold text-blue-600">
                            {doctor.yearsOfExperience}
                          </span>
                        </Group>
                        <Text className="text-xs text-gray-500">
                          Experience
                        </Text>
                      </div>
                      <div className="h-8 w-px bg-gray-200" />
                      <div>
                        <Group className="gap-2">
                          <IconThumbUp className="h-5 w-5 text-blue-600" />
                          <span className="text-sm font-semibold text-blue-600">
                            99%
                          </span>
                        </Group>
                        <Text className="text-xs text-gray-500">
                          Recommended
                        </Text>
                      </div>
                    </Group>
                  </Stack>
                </div>
                <Button className="mt-4 w-full" variant="outline">
                  Book Appointment
                </Button>
              </Card>
            </Link>
          </div>
        );
      })}
    </Carousel>
  );
};

export default DoctorCarousel;
