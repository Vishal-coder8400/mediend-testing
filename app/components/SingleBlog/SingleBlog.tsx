"use client";

import Link from "next/link";
import { PortableText } from "@portabletext/react";
import { Anchor, Box, Breadcrumbs, Flex, Image } from "@mantine/core";
import RecentNews from "../RecentNews";
import { urlFor, urlForBlogs } from "../../../lib/sanity";

const items = [
  { title: "Home", href: "/" },
  { title: "Blogs", href: "/blogs" },
  { title: "You are here", href: "#" },
].map((item, index) => (
  <Anchor component={Link} href={item.href} key={index}>
    {item.title}
  </Anchor>
));

export const portableTextComponents: any = {
  types: {
    image: ({
      value,
    }: {
      value: { asset: any; alt?: string; caption?: string };
    }) => {
      const imageUrl = urlForBlogs(value?.asset)?.url();
      const altText = value?.alt || "Blog Image";

      return (
        <Box my={20}>
          <Image src={imageUrl} alt={altText} fit="contain" />
        </Box>
      );
    },
  },
  marks: {},
  block: ({ children }: any) => {
    if (children.length === 1 && children[0] === "") {
      return <br />;
    }
    return <p>{children}</p>;
  },
};

const SingleBlog = ({ data }: { data: any }) => {
  return (
    <>
      <Breadcrumbs my={40} separator=">" mt="xs">
        {items}
      </Breadcrumbs>
      <Flex
        wrap="wrap"
        justify="space-between"
        direction={{ base: "column", lg: "row" }}
      >
        <Box maw={742} flex={1}>
          <PortableText
            value={data?.content}
            components={portableTextComponents}
          />
        </Box>
        <Box
          w={{ base: "", lg: 400 }}
          h="fit-content"
          style={{
            position: "sticky",
            top: 20,
          }}
        >
          <RecentNews />
        </Box>
      </Flex>
    </>
  );
};

export default SingleBlog;
