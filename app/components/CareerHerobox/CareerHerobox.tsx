import Link from "next/link";
import {
  BackgroundImage,
  Box,
  Button,
  Container,
  Text,
  Title,
} from "@mantine/core";

const CareerHerobox = () => {
  return (
    <BackgroundImage
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
      pos="relative"
      src="/assets/career/main_team.jpg"
      mih={500}
    >
      <Box
        pos="absolute"
        top={0}
        left={0}
        bg="rgba(0, 0, 0, 0.7)"
        w="100%"
        h="100%"
      />
      <Container
        size="md"
        pos="relative"
        style={{ zIndex: 10 }}
        p={10}
        c="#fff"
        ta="center"
        my={120}
      >
        <Title>Join Our Team at mediEND</Title>
        <Text my={10}>
          We are seeking individuals who would be interested in joining us in
          the effort to build India&apos;s largest educational platform to help
          students get their dream college.
        </Text>
        <Button
          component={Link}
          href="/careers/#openings"
          mt={40}
          color="#128772"
          size="lg"
          radius="xl"
        >
          View all job openings
        </Button>
      </Container>
    </BackgroundImage>
  );
};

export default CareerHerobox;
