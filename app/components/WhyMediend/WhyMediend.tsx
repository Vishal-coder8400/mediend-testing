import { Box, Flex, Image, SimpleGrid, Text, Title } from "@mantine/core";

const data = [
  {
    image: "/assets/why/employee-friendly-policy.webp",
    title: "Employee-Friendly Policies",
    info: "HexaHealth offers flexible schedules, comprehensive benefits, and a supportive work environment for employee well-being.",
  },
  {
    image: "/assets/why/collaborative-culture.webp",
    title: "Collaborative Culture",
    info: "We foster teamwork, open communication, and a supportive environment, encouraging innovation and shared success.",
  },
  {
    image: "/assets/why/rewards-recognitions.webp",
    title: "Rewards and Recognition",
    info: "We prioritise recognition, celebrating achievements with meaningful rewards to develop a culture of appreciation and growth.",
  },
  {
    image: "/assets/why/health-insurance-cover.webp",
    title: "Health Insurance Cover",
    info: "Comprehensive health insurance coverage ensures your well-being and peace of mind.",
  },
];

const WhyMediend = () => {
  return (
    <Box my={80}>
      <Title my={30} ta="center">
        Why Join Mediend?
      </Title>
      <Text ta="center" mb={50}>
        Join Mediend to be part of a leading college search platform focused on
        finding colleges. Work with top professionals, utilise advanced
        technology, and make a significant impact on education outcomes in
        India.
      </Text>
      <SimpleGrid cols={{ base: 1, lg: 2 }}>
        {data.map((el, index) => (
          <Flex
            key={index}
            style={{
              boxShadow: "0px 4px 24px 0px hsla(212,9%,59%,.2)",
              borderRadius: 20,
            }}
            p={10}
          >
            <Image alt="image" src={el.image} h={80} />
            <Box m={5}>
              <Text fw={600}>{el.title}</Text>
              <Text c="dimmed" fz={14}>
                {el.info}
              </Text>
            </Box>
          </Flex>
        ))}
      </SimpleGrid>
    </Box>
  );
};

export default WhyMediend;
