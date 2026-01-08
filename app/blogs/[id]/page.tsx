"use client";

import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import { useDispatch, useSelector } from "react-redux";
import { Container } from "@mantine/core";
import SingleBlog from "../../components/SingleBlog";
import { AppDispatch, RootState } from "../../../lib/store/store";
import { Blog } from "../../../lib/utils/blogType";
import { fetchBlogs } from "../../../lib/api/blogAPI";
import { sanityblogs } from "../../../lib/sanity";

export default function HomePage() {
  const { id } = useParams();
  const { blogs } = useSelector((state: RootState) => state.blogs);
  const router = useRouter();
  const decodedId = id;

  const [mainBlog, setMainBlog] = useState<Blog>();

  useEffect(() => {
    const fetchBlogByLink = async () => {
      try {
        const response = await sanityblogs.fetch(
          `*[_type == "blogs" && mainContent.blogLink == $blogLink][0]`,
          { blogLink: decodedId }
        );

        if (response) {
          setMainBlog(response);
        } else {
          router.push("/blogs");
        }
      } catch (error) {
        router.push("/blogs");
      }
    };

    if (decodedId) {
      fetchBlogByLink(); // Fetch the blog only if decodedId is available
    }
  }, [blogs, decodedId]);

  return (
    <>
      <Container size="lg" mt={120} mb={100}>
        <SingleBlog data={mainBlog} />
      </Container>
    </>
  );
}
