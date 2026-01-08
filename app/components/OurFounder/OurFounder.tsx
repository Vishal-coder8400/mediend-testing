import { Badge, Box, Flex, Image, Text, Title } from "@mantine/core";

const OurFounder = () => {
  return (
    <Flex
      justify={{ base: "center", lg: "space-between" }}
      wrap="wrap"
      my={40}
      mx={10}
    >
      <Box maw={545} my={20}>
        <Badge size="xl" color="rgba(26, 91, 238, 0.1)" c="#2967B0">
          Our Founder
        </Badge>
        <Title fz={{ base: 24, sm: 48 }} my={20} c="#2967B0">
          Dr. Amit Prakash Jain
        </Title>
        <Text fw={300} c="#1C1B1A" fz={{ base: 16, sm: 20 }}>
        Dr. Amit Prakash Jain, founder of MediEND, envisions a future where every patient can access trusted, transparent, and personalized surgical care with ease. With a PhD in Integrative Multi-Pathy Management, along with a background in Engineering and an MBA in International Business, he brings a unique cross-disciplinary approach to healthcare innovation. Backed by over 15 years of leadership in multinational corporations, Dr. Amit is on a mission to simplify the surgery journey through technology, expert guidance, and end-to-end patient support. At MediEND, his vision is to empower patients with informed choices, connect them to the right surgeons and hospitals, and bridge the gaps in India&apos;s healthcare system with compassion and clarity.
        </Text>
      </Box>
      <Box>
        <Box
          w={{ base: "90vw", sm: 530 }}
          h={{ base: 350, sm: 530 }}
          style={{
            position: "relative",
            borderRadius: 25,
            overflow: "hidden",
          }}
        >
          <Image
            src="/assets/team/1.png"
            alt="Dr. Amit Jain"
            width="100%"
            height="100%"
            radius={10}
            fit="cover"
          />

        </Box>
      </Box>
    </Flex>
  );
};

export default OurFounder;