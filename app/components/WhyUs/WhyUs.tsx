"use client";
import { Box, rem, SimpleGrid, Text, Title } from "@mantine/core";
import classes from "./WhyUs.module.css";
import { useMediaQuery } from "@mantine/hooks";
const data = [
  {
    title: "USFDA-Approved",
    info: "All the treatment procedures offered at mediEND Healthcare are US-FDA approved.",
  },
  {
    title: "Pre and Post-Surgery Care",
    info: "To ensure a smooth recovery, we offer free follow-up consultation and counselling to patients",
  },
  {
    title: "Wallet-Friendly Cost",
    info: "We provide cost-effective treatment options without compromising on quality.",
  },
  {
    title: "24/7 Services",
    info: "Experience a smooth and efficient discharge process with support available round the clock.",
  },
];
const WhyUs = () => {
  const mobile = useMediaQuery(`(min-width:700px)`);

  return (
    <Box className={classes.main}>
      <Box className={classes.data__box} data-aos="fade-right">
        <Title c="#1D3557" fz={rem(48)} className={classes.main__title}>
          Why mediEND
        </Title>
        <Text>
          World-class surgeons, advanced technology, and personalized care. We
          ensure safe, precise surgeries with faster recovery—all at affordable
          costs. Your health is our priority, every step of the way.
        </Text>
      </Box>
      <SimpleGrid cols={mobile ? 2 : 1} spacing="xl">
        {data.map((el: { title: string; info: string }, index: number) => (
          <Box key={index} className={classes.info__box}>
            <Text className={classes.info__index} data-aos="zoom-in">
              {index + 1}
            </Text>
            <Text fz={rem(20)} c="#1D3557" fw={600} my={20}>
              {el.title}
            </Text>
            <Text c="#6D758F">{el.info}</Text>
          </Box>
        ))}
      </SimpleGrid>
    </Box>
  );
};
export default WhyUs;
