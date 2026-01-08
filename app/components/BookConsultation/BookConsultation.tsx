"use client";
import {
  Box,
  Image,
  rem,
  Text
} from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";
import { ConsultForm } from "../ConsultForm/ConsultForm";
import classes from "./BookConsultation.module.css";
const BookConsultation = () => {
  const mobile = useMediaQuery(`(min-width: 1100px)`);

  return (
    <Box id="bookfreeconsultation" className={classes.main}>
      <Box className={classes.bg}>
        <Image
          src="/assets/consult_bg.png"
          height={100}
          width={200}
          alt="consult bg"
          className="h-[350px]"
        />
      </Box>
      <Box className={classes.info}>
        <Text c="#1D3557" fz={rem(30)} fw={600}>
          Get in Touch
        </Text>
        <Text my={15}>
          Tell us about your problems and we&apos;ll figure out the best
          treatment option for you.
        </Text>
      </Box>
      <Box className={classes.form} data-aos="zoom-in">
        <ConsultForm />
      </Box>
    </Box>
  );
};
export default BookConsultation;
