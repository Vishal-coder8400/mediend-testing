"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useSelector } from "react-redux";
import {
  Anchor,
  Box,
  Button,
  Divider,
  Flex,
  Image,
  ScrollArea,
  SegmentedControl,
  SimpleGrid,
  Text,
  Title,
} from "@mantine/core";
import classes from "./LatestNews.module.css";
import { Blog } from "../../../lib/utils/blogType";
import { RootState } from "../../../lib/store/store";
import { urlFor, urlForBlogs } from "../../../lib/sanity";
import { convertDate } from "../../../lib/utils/helper";
import { IconArrowNarrowRight } from "@tabler/icons-react";

const LatestNews = ({ blogtype }: { blogtype: string }) => {
  const [isMore, setIsMore] = useState<boolean>(false);
  const [blogList, setBlogList] = useState<Blog[]>([]);
  const { blogs } = useSelector((state: RootState) => state.blogs);
  const router = useRouter();

  useEffect(() => {
    const filteredList = blogs.filter(
      (el) => el?.mainContent?.blogtype === blogtype
    );
    setBlogList(filteredList);
    setIsMore(false);
  }, [blogs]);
  const isMoreThanThree = blogList.length > 3;

  return (
    <Box my={100}>
      <Flex
        align="center"
        wrap="wrap"
        direction={{ base: "column", lg: "row" }}
        justify={{ base: "center", lg: "space-between" }}
        my={50}
      >
        <Title c="#191919" fz={{ base: 24, sm: 40 }} my={5}>
          {blogtype === "news_media" ? "News/Media" : "Latest Articles"}
        </Title>
      </Flex>
      <Divider my="sm" />
      <SimpleGrid maw="fit-content" mx="auto" cols={{ base: 1, sm: 2, lg: 3 }}>
        {(isMore ? blogList : blogList.slice(0, 3)).map((el, index: number) => (
          <Flex
            key={index}
            maw={340}
            direction="column"
            className={classes.box}
            bd="1px solid #e1e4ed"
          >
            <Image
              src={
                el.mainContent?.coverImage
                  ? urlForBlogs(el.mainContent.coverImage)?.url()
                  : "/assets/blogs.png"
              }
              h="200px"
              fit="unset"
              alt={el?.mainContent?.title}
            />
            <Flex flex={1} p={20} justify="space-between" direction="column">
              <Box>
                <Text
                  fz={{ base: 16, sm: 20 }}
                  lh="22.4px"
                  c="#282828"
                  fw={500}
                  lineClamp={2}
                >
                  {el.mainContent?.title}
                </Text>
                <Text c="#6D758F" my={10}>
                  {el.mainContent.shortInfo}
                </Text>
              </Box>
              <Flex align="center" justify="space-between" mt={20} pt={10}>
                <Text c="#6D758F" fz={14} fw={400}>
                  {convertDate(el?.mainContent?.publishDate)}
                </Text>
                <Anchor
                  onClick={() =>
                    router.push(`/blogs/${el.mainContent.blogLink}`)
                  }
                  className={classes.btn}
                  p={8}
                >
                  <IconArrowNarrowRight color="#fff" />
                </Anchor>
              </Flex>{" "}
            </Flex>
          </Flex>
        ))}
      </SimpleGrid>
      <Button
        display={isMoreThanThree ? "block" : "none"}
        onClick={() => setIsMore(!isMore)}
        fw={500}
        variant="transparent"
        mx="auto"
        ta="center"
        c="#14967F"
        my={10}
        style={{ cursor: "pointer" }}
      >
        {!isMore ? "Show More" : "Show Less"}
      </Button>
    </Box>
  );
};

export default LatestNews;
