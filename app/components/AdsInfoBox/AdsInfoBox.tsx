import { Box, Flex, Image, Text } from "@mantine/core";
import { ReactNode } from "react";
import { urlFor } from "../../../lib/sanity";

export const AdsInfoBox = ({
  title,
  info,
  button,
  img,
  bg,
  pt = 20,
  pb = 0,
  type,
}: {
  title: ReactNode;
  info: string;
  button?: ReactNode;
  img: string;
  bg: string;
  pt?: number;
  pb?: number;
  type?: string;
}) => {
  const isDisease = type === "disease";
  return (
    <Flex
      mih={{ base: "", sm: 300 }}
      pos="relative"
      my={20}
      bg={bg}
      maw={823}
      direction={{
        base: isDisease ? "column-reverse" : "row",
        sm: "row",
      }}
      justify="space-between"
      align="center"
      style={{
        borderRadius: 20,
      }}
      px={15}
      pt={pt}
      pb={pb}
    >
      <Box maw={383}>
        {title}
        <Text fz={{ base: 12, sm: 16 }} my={10}>
          {info}
        </Text>
        {button}
      </Box>
      {!isDisease && <Image alt={info} src={img} h={{ base: 100, sm: 274 }} />}
      {isDisease && img && (
        <Image
          alt="disease"
          src={img}
          pos={{ base: "relative", sm: "absolute" }}
          w="fit-content"
          h={{ base: 100, sm: 274 }}
          fit="contain"
          top={0}
          right="1%"
        />
      )}
    </Flex>
  );
};
