import Link from "next/link";
import { useSelector } from "react-redux";
import { Anchor, Box, Divider, Paper, ScrollArea, Text } from "@mantine/core";
import { RootState } from "../../../lib/store/store";
import { Blog } from "../../../lib/utils/blogType";

const RecentNews = () => {
  const { blogs } = useSelector((state: RootState) => state.blogs);

  return (
    <Paper m={20} withBorder>
      <Text bg="#e9ecff" fz={18} fw={700} px={5} py={10} mb={10}>
        Recent News
      </Text>
      <ScrollArea
        type="always"
        h={{ base: 300, lg: 400 }}
        scrollbars="y"
        scrollbarSize={10}
      >
        {blogs
          ?.slice()
          .sort(
            (a: Blog, b: Blog) =>
              new Date(a._createdAt).getTime() -
              new Date(b._createdAt).getTime()
          )
          .map((item, index) => (
            <Box key={index} p={10}>
              <Anchor
                component={Link}
                href={`/blogs/${item.mainContent.blogLink}`}
                lineClamp={2}
              >
                {item.mainContent.title}
              </Anchor>
              <Divider mt={5} />
            </Box>
          ))}
      </ScrollArea>
    </Paper>
  );
};

export default RecentNews;
