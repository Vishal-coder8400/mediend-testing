import {
  Anchor,
  Box,
  Flex,
  Group,
  Text,
  Card,
  Image,
  Stack,
} from "@mantine/core";
import {
  IconBrandFacebookFilled,
  IconBrandGoogleFilled,
  IconBrandWhatsappFilled,
} from "@tabler/icons-react";

interface CardProp {
  image: string;
  name: string;
  title: string;
  social: {
    google: string;
    facebook: string;
    whatsapp: string;
  };
}

const TeamCard = ({ data }: { data: CardProp }) => {
  return (
    <Card
      padding={0}
      radius={20}
      m={12}
      w={{ base: 320, sm: 330, lg: 380 }}
      h={{ base: 400, sm: 420, lg: 460 }}
      pos="relative"
      c={"gray"}
      style={{ 
        overflow: "hidden",
        boxShadow: "0px 8px 20px rgba(41, 103, 176, 0.15)",
        transition: "transform 0.3s ease",
        "&:hover": {
          transform: "translateY(-5px)",
        }
      }}
    >
      <Box h="70%" style={{ position: "relative", overflow: "hidden" }}>
        <Image
          src={data.image}
          alt={data.name}
          h={{ base: 250, sm: 270, lg: 300 }}
          fit="cover"
          style={{ 
            objectPosition: "center 15%", 
            transition: "transform 0.5s ease",
            "&:hover": {
              transform: "scale(1.05)",
            }
          }}
        />
      </Box>
      
      <Box
        p="lg"
        h="30%"
        bg="white"
        display="flex"
        style={{
          flexDirection: "column",
          justifyContent: "space-between",
        }}
      >
        <Stack gap={5}>
          <Text c="#2967B0" fz={{ base: 20, sm: 24 }} fw={600} lh={1.2}>
            {data.name}
          </Text>
          <Text c="#666" fz={{ base: 14, sm: 16 }} fw={500}>
            {data.title}
          </Text>
        </Stack>
        
        <Group justify="right" gap={12} mt={10}>
          {data.social.google && (
            <Anchor href={data.social.google} target="_blank">
              <IconBrandGoogleFilled 
                color="#2967B0" 
                size={20} 
                style={{ 
                  transition: "transform 0.2s",
                }}
              />
            </Anchor>
          )}
          {data.social.facebook && (
            <Anchor href={data.social.facebook} target="_blank">
              <IconBrandFacebookFilled 
                color="#2967B0" 
                size={20}
                style={{ 
                  transition: "transform 0.2s", 
                }} 
              />
            </Anchor>
          )}
          {data.social.whatsapp && (
            <Anchor href={data.social.whatsapp} target="_blank">
              <IconBrandWhatsappFilled 
                color="#2967B0" 
                size={20}
                style={{ 
                  transition: "transform 0.2s", 
                }} 
              />
            </Anchor>
          )}
        </Group>
      </Box>
    </Card>
  );
};

export default TeamCard;