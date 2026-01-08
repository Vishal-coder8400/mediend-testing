"use client";
import { Box, Button, Image, SimpleGrid, Text, Title } from "@mantine/core";
import { IconArrowNarrowRight } from "@tabler/icons-react";
import classes from "./Specialities.module.css";
import { useMediaQuery } from "@mantine/hooks";
import Link from "next/link";

const Specialities = ({specialitiesData}: {specialitiesData: {title: string, description: string, iconUrl: string,url?:string}[]}) => {
  const mobile = useMediaQuery(`(min-width: 800px)`);

  return (
    <Box my={40} mx={10}>
      
      <SimpleGrid
        cols={{ base: 1, sm: 2, lg: 3 }}
        spacing={{ base: 10, sm: "xl" }}
        verticalSpacing={{ base: "md", sm: "xl" }}
               
      >
        {specialitiesData.map((el, index: number) => (
      <Link href={(typeof(el.url)!=="string")?" ":el.url} key={index} className="">
          <Box  className={classes.box}>
            <Image
              src={el.iconUrl}
              width={mobile ? 100 : 130}
              height={mobile ? 100 : 130}
              miw={100}
              mih={100}
              
             fit="contain"
              style={{ borderRadius: 8 }}
              alt={el.title}
              data-aos="flip-right"
            />
            <Box className={classes.textbox}>
              <Text fw={700} c="#6D758F">
                {el.title}
              </Text>
              <Text c="#6D758F" className={classes.box__info}>
                {el.description}
              </Text>
              <Box className={classes.btnBox}>
                <Button mt={5} p={0} w={40} bg="#062D4C">
                  <IconArrowNarrowRight />
                </Button>
              </Box>
            </Box>
          </Box>
          </Link>

        ))}
      </SimpleGrid>
    </Box>
  );
};
export default Specialities;