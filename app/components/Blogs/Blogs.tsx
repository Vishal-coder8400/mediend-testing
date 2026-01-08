"use client";
import {
  Anchor,
  Box,
  Button,
  Flex,
  Image,
  rem,
  SimpleGrid,
  Text,
  Title,
} from "@mantine/core";
import { IconArrowNarrowRight } from "@tabler/icons-react";
import classes from "./Blogs.module.css";
import { useEffect, useState } from "react";
import { Blog } from "../../../lib/utils/blogType";
import { useRouter } from "next/navigation";
import { urlForBlogs } from "../../../lib/sanity";
import { convertDate } from "../../../lib/utils/helper";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../../lib/store/store";
import { fetchBlogs } from "../../../lib/api/blogAPI";

const Blogs = () => {
  const [isMore, setIsMore] = useState<boolean>(false);
  const [blogList, setBlogList] = useState<Blog[]>([]);
  const router = useRouter();
  const { blogs } = useSelector((state: RootState) => state.blogs);
  const dispatch: AppDispatch = useDispatch();

  useEffect(() => {
    if (blogs.length === 0) {
      dispatch(fetchBlogs());
    }
    setBlogList(blogs);
  }, [blogs]);

  const isMoreThanThree = blogList.length > 3;

  return (
    <Box my={60}>
      <Title className={classes.main__title} data-aos="zoom-in-up">
        Latest Blogs
      </Title>
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
              style={{ height: "200px !important", objectFit: "cover" }}
              className={classes.fixedHeightImage}
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
              </Flex>
            </Flex>
          </Flex>
        ))}
      </SimpleGrid>
      {isMoreThanThree && (
        <Flex justify="center" mt={20}>
          <Button
            onClick={() => router.push("/blogs")}
            variant="outline"
            color="#14967F"
          >
            See All Blogs
          </Button>
        </Flex>
      )}
    </Box>
  );
};

export default Blogs;
