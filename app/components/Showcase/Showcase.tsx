import { Box, Image, rem, Text, Title } from "@mantine/core";
import classes from "./Showcase.module.css";
const data = [
  {
    img: "/assets/showcase/heart.png",
    value: 5000,
    name: "Successful Surgeries",
  },
  {
    img: "/assets/showcase/families.png",
    value: 10000,
    name: "Families Healed",
  },
  {
    img: "/assets/showcase/experts.png",
    value: 200,
    name: "Medical Experts",
  },
  {
    img: "/assets/showcase/awards.png",
    value: 10,
    name: "Awards & Accreditations",
  },
];
const Showcase = () => {
  return (
    <Box my={80} className={classes.main}>
      <Title className={classes.heading} data-aos="zoom-in-up">
        Numbers that showcase our success
      </Title>
      <Box className={classes.mainBox}>
        {data.map((el, index: number) => (
          <Box className={classes.box} key={index}>
            <Image
              mx="auto"
              fit="contain"
              src={el.img}
              w="77px"
              h="77px"
              alt="image"
              data-aos="zoom-out"
            />
            <Text c="#1D3557" fz={32} fw={600} my={10}>
              {el.value} +
            </Text>
            <Text c="#1D3557" fw={600}>
              {el.name}
            </Text>
          </Box>
        ))}
      </Box>
    </Box>
  );
};
export default Showcase;
