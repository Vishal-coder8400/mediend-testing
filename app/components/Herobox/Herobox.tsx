"use client";
import { Carousel } from "@mantine/carousel";
import { useDisclosure, useMediaQuery } from "@mantine/hooks";
import {
  Paper,
  Text,
  Title,
  Button,
  useMantineTheme,
  rem,
  Box,
  Image,
  Modal,
  Drawer,
} from "@mantine/core";
import classes from "./Herobox.module.css";
import { data } from "./data";
import { IconArrowRight } from "@tabler/icons-react";
import Appointment from "../Appointment/Appointment";

interface CardProps {
  image: string;
  title: string;
  category: string;
  info: string;
}

function Card({ image, title, category, info }: CardProps) {
  return (
    <Paper
      shadow="md"
      style={{ backgroundImage: `url(${image})` }}
      className={classes.card}
    >
      <Box className={classes.gradient}></Box>
      <Box className={classes.cardData} data-aos="fade-right">
        <Box className={classes.box__top}>
          <Image
            src="assets/hero_icon.png"
            height={44}
            width={42}
            fit="contain"
            alt="hero icon"
          />
          <Text className={classes.category}>{category}</Text>
        </Box>
        <Title
          order={3}
          fw={900}
          fz={{ base: 30, lg: 64 }}
          className={classes.title}
        >
          {title}
        </Title>
        <Text c="white" fz={16} className={classes.info}>
          {info}
        </Text>
      </Box>
    </Paper>
  );
}

const Herobox = () => {
  const [opened, { open, close }] = useDisclosure(false);
  const isMobile8 = useMediaQuery(`(min-width: 800px)`);

  const theme = useMantineTheme();
  const mobile = useMediaQuery(`(min-width: 700px)`);
  const slides = data.map((item) => (
    <Carousel.Slide key={item.title}>
      <Card {...item} />
    </Carousel.Slide>
  ));

  return (
    <Box className={classes.main}>
      <Carousel
        align="start"
        slidesToScroll={1}
        controlsOffset={mobile ? "xl" : "xs"}
        // controlSize={mobile ? 40 : 20}
        loop
        withControls
        classNames={{
          control: classes.carousel__control,
        }}
      >
        {slides}
      </Carousel>
      <Box className={classes.btn__book}>
        <Button
          variant="outline"
          radius="xl"
          size="xl"
          fz={14}
          rightSection={<IconArrowRight />}
          className={classes.btn}
          onClick={open}
        >
          Book Free Consultation
        </Button>
      </Box>
      <Drawer
        zIndex={2000}
        opened={opened}
        onClose={close}
        position="right"
        // fullScreen={isMobile8 ? false : true}
        radius={isMobile8 ? "lg" : 0}
        classNames={{
          content: classes.modal__content,
          header: classes.modal__header,
          title: classes.modal__title,
          close: classes.modal__close,
        }}
        title="Book Your FREE Consultation Now"
      >
        <Appointment />
      </Drawer>
    </Box>
  );
};

export default Herobox;
