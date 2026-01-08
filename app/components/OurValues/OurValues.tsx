import {
  Box,
  Flex,
  Group,
  Image,
  Stack,
  Text,
  Title,
  Container,
  Card,
} from "@mantine/core";

const valuesData = [
  {
    title: "Innovation",
    info: "We leverage technology and forward-thinking solutions to transform the surgical experience for patients—making healthcare smarter, faster, and more accessible.",
    icon: "/assets/values/Brain.svg",
    emoji: "🔬",
  },
  {
    title: "Excellence",
    info: "We uphold the highest standards in everything we do, ensuring every patient receives exceptional care, trusted guidance, and optimal outcomes.",
    icon: "/assets/values/Sparkle.svg",
    emoji: "🏆",
  },
  {
    title: "Collaboration",
    info: "We partner with patients, surgeons, and hospitals to deliver personalized, end-to-end support—because better health is a shared journey.",
    icon: "/assets/values/UsersThree.svg",
    emoji: "🤝",
  },
];

const OurValues = () => {
  return (
    <Container size="xl" px="md">
      <Flex
        justify={{ base: "center", lg: "space-between" }}
        wrap="wrap"
        my={{ base: 60, md: 100 }}
        gap={40}
      >
        <Box maw={590} my={20}>
          <Title c="#2967B0" fz={{ base: 24, sm: 40 }} mb={20}>
            Our Vision
          </Title>
          <Text fw={300} c="#1C1B1A" fz={{ base: 16, sm: 20 }} lh={1.6}>
            To become India&apos;s most trusted digital platform for surgical care—empowering patients with informed choices, seamless access to expert surgeons, and compassionate support every step of the way.
          </Text>
        </Box>
       
        <Box maw={590} my={20}>
          <Title c="#2967B0" fz={{ base: 24, sm: 40 }} mb={20}>
            Our Mission
          </Title>
          <Text fw={300} c="#1C1B1A" fz={{ base: 16, sm: 20 }} lh={1.6}>
            To simplify surgical care through transparent, tech-enabled solutions—connecting patients with trusted surgeons, verified hospitals, and compassionate support every step of the way.
          </Text>
        </Box>
      </Flex>
     
      <Title my={80} c="#2967B0" ta="center" fz={{ base: 24, sm: 40 }}>
        Our Values
      </Title>
     
      <Flex
        wrap="wrap"
        justify="center"
        align="stretch"
        gap={30}
      >
        {valuesData.map((el, index) => (
          <Card
            key={index}
            padding="xl"
            radius="md"
            withBorder
            shadow="sm"
            style={{
              borderColor: 'rgba(41, 103, 176, 0.2)',
              flexGrow: 1,
              width: 'calc(33.333% - 20px)',
              maxWidth: 'calc(33.333% - 20px)',
              display: 'flex',
              flexDirection: 'column',
            }}
            
          >
            <Stack gap="md" style={{ height: '100%' }}>
              <Group justify="apart" align="center" wrap="nowrap">
                <Group gap="md">
                  <Image
                    alt={el.title}
                    src={el.icon}
                    width={30}
                    height={30}
                  />
                  <Title fz={{ base: 24, sm: 28 }} c="#2967B0" fw={500}>
                    {el.title}
                  </Title>
                </Group>
                <Text fz={24}>{el.emoji}</Text>
              </Group>
             
              <Text
                lh={1.6}
                c="#1C1B1A"
                fw={300}
                fz={{ base: 16, sm: 18 }}
              >
                {el.info}
              </Text>
            </Stack>
          </Card>
        ))}
      </Flex>
    </Container>
  );
};

export default OurValues;