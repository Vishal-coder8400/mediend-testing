"use client";
import {
  Box,
  Image,
  rem,
  Text,
  Title
} from "@mantine/core";

import { useEffect, useState, memo } from "react";
import { Doctor } from "../../doctor/[doctorName]/page";

import Link from "next/link";
import Carousel from "react-multi-carousel";
import classes from "./OurDoctors.module.css";
import PlaceholderImage from "./default-placeholder-doctor-halflength-portrait-600nw-1058724875.webp"
import DoctorCard from "./DoctorCard"

const OurDoctors = () => {
  const [pageData, setPageData] = useState<Doctor[] | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    setIsLoading(true);
    fetch(
      "https://7rljkuk3.apicdn.sanity.io/v2022-03-07/data/query/production?query=*%5B_type+%3D%3D+%27doctor%27%5D+%7C+order%28_createdAt+desc%29%7B%0A++title%2C%0A++speciality%2C%0A++%22slug%22%3Aslug.current%2C%0A++degrees%2C%0A++%22imageUrl%22%3A+image.asset-%3Eurl%2C%0A++yearsOfExperience%2C%0A++aboutDoctor%2C%0A++treatments%2C%0A++%22reviews%22%3A+reviews%5B%5D%7B%0A++++name%2C%0A++++%22imageUrl%22%3A+image.asset-%3Eurl%2C%0A++++review%2C%0A++++highlight%0A++%7D%2C%0A++faqs%0A%7D",
      {
        method: "GET",
        headers: {
          "Content-type": "application/json",
        },
      }
    )
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        console.log(data.result)
        setPageData(data.result);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setError(error);
        setIsLoading(false);
      });
  }, []);

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error loading doctors: {error.message}</p>;
  if (!pageData || pageData.length === 0) return <p>No doctors found</p>;

  return (
    <Box my={50}>
      <Title ta="center" c="#1D3557" fz={rem(48)} data-aos="zoom-in-up">
        Meet Our Talented Doctors
      </Title>
      <Text ta="center" c="#6D758F" maw={400} m="20px auto">
        Meet our experienced doctors dedicated to providing exceptional care and
        innovative treatments.
      </Text>
      <Carousel
 infinite
 autoPlay
 autoPlaySpeed={5000}
 transitionDuration={500}
 centerMode={false}
 containerClass="container-with-dots"
 dotListClass=""
 draggable
 focusOnSelect={false}
 keyBoardControl
 minimumTouchDrag={80}
 pauseOnHover
 renderArrowsWhenDisabled={false}
 renderButtonGroupOutside={false}
 renderDotsOutside={false}
 responsive={{
   desktop: {
     breakpoint: { max: 3000, min: 1024 },
     items: 5,
     partialVisibilityGutter: 40,
   },
   mobile: {
     breakpoint: { max: 464, min: 0 },
     items: 1,
     partialVisibilityGutter: 0,
   },
   tablet: {
     breakpoint: { max: 1024, min: 464 },
     items: 1,
     partialVisibilityGutter: 0,
   },
 }}
 rewind={false}
 rewindWithAnimation={false}
 rtl={false}
 itemClass={classes.custom_carousel_item}
 showDots={false}
 sliderClass=""
 slidesToSlide={1}
 swipeable
 shouldResetAutoplay
>
{pageData.map((doctor, index) => (
  <DoctorCard doctor={doctor} index={index} key={doctor.slug || index} />
))}
</Carousel>
    </Box>
  );
};

export default OurDoctors;

