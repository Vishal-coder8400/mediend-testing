"use client"
import React from 'react';
import { Avatar, Box, rem, Text, Title, useMantineTheme } from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";
import { Carousel } from "@mantine/carousel";
import classes from "./Stories.module.css";

// Updated interface to match the Review type
export interface Review {
  name: string;
  imageUrl: string;
  review: string;
  highlight: string;
}

interface StoriesProps {
  reviews: Review[];
  title?: string;
  subtitle?: string;
  emptyStateMessage?: string;
}

const Stories: React.FC<StoriesProps> = ({ 
  reviews, 
  title = "Our Success Stories", 
  subtitle = "Discover inspiring stories of patients whose lives were transformed by our expert care.",
  emptyStateMessage = "No stories available at the moment."
}) => {
  const theme = useMantineTheme();
  const mobile = useMediaQuery(`(max-width: ${theme.breakpoints.sm})`);

  // Handle case when reviews array is empty
  if (!reviews || reviews.length === 0) {
    return (
      <Box className={classes.main} ta="center" py={60}>
        <Title className={classes.title} data-aos="zoom-in-up">
          {title}
        </Title>
        <Text maw={418} m="20px auto" c="#6D758F">
          {emptyStateMessage}
        </Text>
      </Box>
    );
  }

  return (
    <Box className={classes.main} ta="center" py={60} id='reviews'>
      <Title className={classes.title} data-aos="zoom-in-up">
        {title}
      </Title>
      <Text maw={418} m="20px auto" c="#6D758F">
        {subtitle}
      </Text>
      <Box className={classes.carousel_main}>
        <Carousel
          slideSize={{ base: "100%", sm: "fit-content" }}
          slideGap={{ base: rem(2), sm: "xl" }}
          align="start"
          controlsOffset="xs"
          classNames={{ root: classes.carousel__root }}
          slidesToScroll={1}
          loop={true}
        >
          {reviews.map((review, index) => (
            <Carousel.Slide key={index} className={classes.box}>
              <Avatar 
                size="lg" 
                src={review.imageUrl} 
                alt={`${review.name}'s profile`}
                bd="1px solid #B4B9C9" 
              />
              <Box>
                <Text c="#023E8A" fz={rem(18)}>
                  {review.highlight}
                </Text>
                <Text c="#6D758F">{review.review}</Text>
              </Box>
              <Text c="#6D758F" fw={600}>
                {review.name}
              </Text>
            </Carousel.Slide>
          ))}
        </Carousel>
      </Box>
    </Box>
  );
};

export default Stories;