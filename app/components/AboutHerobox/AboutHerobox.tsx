"use client";
import {
  BackgroundImage,
  Badge,
  Box,
  Container,
  Flex,
  Stack,
  Text,
  Title,
} from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";

const AboutHeroBox = () => {
  const mobile = useMediaQuery(`(min-width: 1000px)`);
  
  return (
    <BackgroundImage
      mb={50}
      mih={500}
      src={"/assets/about__hero.jpg"}
      style={{
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        position: "relative",
      }}
    >
      {/* Overlay layer for reducing image opacity */}
      <Box
        pos="absolute"
        top={0}
        left={0}
        bg="rgba(255, 255, 255, 0.5)"
        w="100%"
        h="100%"
      />
      
      <Container
        size="md"
        pos="relative"
        style={{ zIndex: 10 }}
        p={10}
        ta="center"
      >
        <Badge variant="filled" color="#2967B0" size="xl">
          About Us!
        </Badge>
        <Title my={30} fz={{ base: 30, sm: 64 }} c="#2967B0" fw={700}>
          Providing Quality Care
        </Title>
        <Text 
          maw={600} 
          mx="auto" 
          c="#2967B0" 
          fz={{ base: 16, sm: 18 }}
          fw={500}
        >
          Where we provide personalized and comprehensive healthcare services to
          help you live your best life
        </Text>
      </Container>
    </BackgroundImage>
  );
};

export default AboutHeroBox;