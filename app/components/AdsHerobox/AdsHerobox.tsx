"use client";
import {
  BackgroundImage,
  Box,
  Button,
  Container,
  Flex,
  Image,
  List,
  Modal,
  Text,
  Title,
} from "@mantine/core";
import classes from "./AdsHerobox.module.css";
import { useDisclosure, useMediaQuery } from "@mantine/hooks";
import { Herobox } from "../../../lib/utils/adsDiseaseType";
import { AdsConsultForm } from "../AboutAds/AboutAds";
import { AdsForm } from "../AdsForm/AdsForm";
import { urlForAds } from "../../../lib/sanity";
export const AdsHerobox = ({ data, slug }: { data: Herobox; slug?: string }) => {
  const mobile = useMediaQuery(`(min-width: 600px)`);
  const [opened, { open, close }] = useDisclosure(false);

  return (
    <BackgroundImage
      pos="relative"
      src={
        mobile
          ? "/assets/adspage/ads_hero.png"
          : "/assets/adspage/ads_mobile.png"
      }
      style={{
        backgroundPosition: "center",
        backgroundSize: mobile ? "cover" : "contain",
        backgroundRepeat: "no-repeat",
      }}
      h={{ base: "auto", md: "80vh" }}
      mih={{ base: "auto", md: "80vh" }}
      pb={{ base: 24, md: 0 }}
      mb={{ base: 50, sm: 100, md: 150, lg: 200 }}
    >
      <Container pos="relative" size="xl" h={{ base: "auto", md: "inherit" }} py={{ base: 8, md: 0 }}>
        <Flex
          direction={{ base: "column", md: "row" }}
          justify={{ base: "flex-start", md: "space-between" }}
          align={{ base: "center", md: "center" }}
          h={{ base: "auto", md: "inherit" }}
          wrap="wrap"
          gap={{ base: 16, md: 0 }}
          pos="relative"
        >
          <Box w={{ base: "100%", md: "auto" }} maw={{ base: "100%", md: 500 }} px={{ base: 4, md: 0 }} style={{ alignSelf: "center" }}>
            <Title fz={{ base: 28, sm: 42 }} mb={{ base: 6, md: 0 }} ta={{ base: "left", md: "left" }}>
              {data?.title?.mainTitle}{" "}
              <Text span fz={{ base: 28, sm: 42 }} c="#2967B0" fw={600}>
                {data?.title?.cityName}
              </Text>
            </Title>
            <List
              fw={500}
              type="unordered"
              fz={16}
              listStyleType="disc"
              display={{ base: "block", md: "none" }}
              mb={{ base: 8, md: 0 }}
              pl={0}
              spacing={3}
            >
              {data?.list?.map((el: string, index) => (
                <List.Item key={index}>{el}</List.Item>
              ))}
            </List>
            <List
              withPadding
              fw={500}
              type="unordered"
              fz={{ base: 16, sm: 24, md: 29 }}
              listStyleType="disc"
              display={{ base: "none", md: "block" }}
              my={20}
            >
              {data?.list?.map((el: string, index) => (
                <List.Item key={index}>{el}</List.Item>
              ))}
            </List>
            <Button 
              size={mobile ? "lg" : "sm"} 
              onClick={open} 
              w={{ base: "100%", sm: 330 }} 
              {...(mobile ? {} : { h: 36 })}
              mt={{ base: 0, md: 0 }}
            >
              Get Cost Estimation
            </Button>
          </Box>
          {data?.image && (
            <Image
              display={{ base: "block", md: "none" }}
              src={
                data?.image
                  ? urlForAds(data.image)?.url()
                  : "/placeholder-image.png"
              }
              fit="contain"
              h={{ base: 400, sm: 450 }}
              w="auto"
              alt="disease"
              mx="auto"
            />
          )}
          {data?.image && (
            <Box
              display={{ base: "none", md: "flex" }}
              style={{ 
                flex: 1, 
                alignSelf: "center",
                alignItems: "center",
                justifyContent: "center"
              }}
            >
              <Image
                src={
                  data?.image
                    ? urlForAds(data.image)?.url()
                    : "/placeholder-image.png"
                }
                fit="contain"
                h={{ base: 400, md: 500, lg: 600 }}
                w="auto"
                alt="disease"
                style={{ maxWidth: "100%" }}
              />
            </Box>
          )}
          <Box 
            className={classes.form} 
            w={{ base: "100%", md: "auto" }}
            style={{ alignSelf: "center" }}
          >
            <AdsConsultForm slug={slug} />
          </Box>
        </Flex>
      </Container>
      <Modal opened={opened} onClose={close} title="Check Surgery Cost">
        <AdsForm />
      </Modal>
    </BackgroundImage>
  );
};
