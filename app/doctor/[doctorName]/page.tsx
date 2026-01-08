"use client";
import Appointment from "../../components/Appointment/Appointment";
import AppointmentForm from "../../components/AppointmentForm/AppointmentForm";
import BookConsultation from "../../components/BookConsultation/BookConsultation";
import FrequentlyAskedQuestions from "../../components/FAQs/FrequentlyAskedQuestions";

import classes from "../../components/Header/Header.module.css";

import {
  Card,
  Container,
  Grid,
  Group,
  Text,
  Title,
  Image,
  Flex,
  Button,
  List,
  Stack,
  ListItem,
  Modal,
} from "@mantine/core";
import Stories from "../../components/Stories/Stories";
import {
  IconArrowRight,
  IconBrandWhatsapp,
  IconBriefcase,
  IconPointFilled,
  IconThumbUp,
} from "@tabler/icons-react";
import { Carousel } from "@mantine/carousel";
import { useEffect, useRef, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import { PortableText } from "@portabletext/react";
import Link from "next/link";
import StickyTabs from "../../components/Doctors/StickyTabs/StickyTabs";
import ArticleCard from "../../components/Doctors/ArticleCard/ArticleCard";
import LoadingScreen from "../../components/Loading/loading";
import NotFound from "../../not-found";
import { useDisclosure } from "@mantine/hooks";
import { Blog } from "../../../lib/utils/blogType";
import { RootState } from "../../../lib/store/store";
import { useDispatch } from "react-redux";
import { fetchBlogs } from "../../../lib/api/blogAPI";
import { AppDispatch } from "../../../lib/store/store";
import { useSelector } from "react-redux";

export interface Treatment {
  treatmentName: string;
  treatmentLink: string;
}

interface ContentBlock {
  _type: string;
  style: string;
  _key: string;
  markDefs?: any[];
  children: ContentChild[];
  level?: number;
  listItem?: string;
}

interface ContentChild {
  _type: string;
  marks: string[];
  text: string;
  _key: string;
}

export interface Review {
  name: string;
  imageUrl: string;
  review: string;
  highlight: string;
}

export interface FAQ {
  question: string;
  answer: string;
}

export interface Doctor {
  title: string;
  slug?: string;
  imageUrl: string;
  speciality: string;
  tags: string[];
  location: string;
  rating: number;
  degrees: string;
  yearsOfExperience: number;
  aboutDoctor: ContentBlock[]; // Sanity block content
  additionalContent1: ContentBlock[]; // Sanity block content
  additionalContent2: ContentBlock[]; // Sanity block content
  treatments: Treatment[];
  reviews: Review[];
  faqs: FAQ[];
}

export default function Page() {
  const params = useParams();
  const { doctorName } = params;

  const headerRef = useRef(null);
  const [isSticky, setIsSticky] = useState(false);
  const [modalOpened, { open: modalOpen, close: modalClose }] =
    useDisclosure(false);
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

  const [pageData, setPageData] = useState<Doctor | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setIsLoading(true);
    fetch(
      `https://7rljkuk3.apicdn.sanity.io/v2022-03-07/data/query/production?query=*%5B_type+%3D%3D+%27doctor%27%26%26slug.current%3D%3D%27${doctorName}%27%5D%7B%0A++++title%2C%0A++%22slug%22%3Aslug.current%2C%0A++speciality%2C%0A++degrees%2C%0A++++++yearsOfExperience%2C%0A++++++%22reviews%22%3A+reviews%5B%5D%7B%0A++++name%2C%0A++++%22imageUrl%22%3A+image.asset-%3Eurl%2C%0A++++review%2C%0A++++highlight%0A++%7D%2C%0A++++++faqs%2C%0A++++++%0A++%22imageUrl%22%3A+image.asset-%3Eurl%2C%0A++treatments%2C%0A++aboutDoctor%2C%0A++additionalContent1%2C%0A++additionalContent2%0A%7D%5B0%5D%0A`,
      {
        method: "GET",
        headers: {
          "Content-type": "application/json",
        },
      }
    )
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        console.log("Fetched data:", data);
        setPageData(data.result);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setError(error);
        setIsLoading(false);
      });
  }, [doctorName]);

  if (isLoading) return <LoadingScreen />;
  if (error) return <div>Error loading data</div>;
  if (!pageData) return <NotFound />;

  return (
    <>
      <Group grow p={{ base: "sm", md: "md", lg: "xl" }}>
        <Grid gutter={"xl"} className="relative">
          <Grid.Col span={{ base: 12, md: 8, lg: 8 }}>
            {/* Hero */}
            <div className="container mx-auto p-4">
              {/* Main container with image and details */}
              <div className="flex flex-row gap-8 mb-6">
                {/* Image section */}
                <div className="w-1/3 md:w-1/4">
                  <Image
                    src={pageData.imageUrl}
                    className="rounded-md max-w-[250px] w-full"
                    alt={pageData.title}
                  />
                </div>

                {/* Details section */}
                <div className="w-2/3 md:w-3/4">
                  <Stack>
                    {/* Doctor name and verification */}
                    <Flex gap="sm" align="center">
                      <Title
                        c="#1C7ED6"
                        className="font-semibold text-sm md:text-2xl"
                      >
                        {pageData.title}
                      </Title>
                      {/* <IconRosetteDiscountCheckFilled color="#1C7ED6" size={24} /> */}
                    </Flex>

                    {/* Credentials */}
                    <div>
                      <Text c="#5B6B7D">{pageData.speciality}</Text>
                      <Text c="#5B6B7D">{pageData.degrees}</Text>
                    </div>

                    {/* Stats */}
                    <div className="md:flex gap-8 p-4 bg-slate-100 rounded-md w-fit hidden">
                      <Stack gap="xs">
                        <Group gap="xs">
                          <IconBriefcase color="#1C7ED6" size={20} />
                          <Title order={4} c="#1C7ED6">
                            {pageData.yearsOfExperience} + Years
                          </Title>
                        </Group>
                        <Text size="xs" c="#5F6D7A">
                          Experience
                        </Text>
                      </Stack>

                      <div className="w-px bg-slate-300" />

                      <Stack gap="xs">
                        <Group gap="xs">
                          <IconThumbUp color="#1C7ED6" size={20} />
                          <Title order={4} c="#1C7ED6">
                            99%
                          </Title>
                        </Group>
                        <Text size="xs" c="#5F6D7A">
                          Recommended
                        </Text>
                      </Stack>
                    </div>
                  </Stack>
                </div>
              </div>

              {/* Buttons section - stacks on mobile */}
              <div className="flex flex-col sm:flex-row gap-4 mt-4">
                <Button size="lg" variant="filled" onClick={() => modalOpen()}>
                  Book An Appointment
                </Button>
                <Modal
                  w={"100%"}
                  size="lg"
                  classNames={{
                    content: classes.modal__content,
                    header: classes.modal__header,
                    title: classes.modal__title,
                    close: classes.modal__close,
                  }}
                  title="Book An Appointment"
                  opened={modalOpened}
                  onClose={modalClose}
                >
                  <Appointment></Appointment>
                </Modal>
                <Link
                  href={
                    typeof process.env.NEXT_PUBLIC_WHATSAPP_LINK == "string"
                      ? process.env.NEXT_PUBLIC_WHATSAPP_LINK
                      : ""
                  }
                >
                  <Button
                    size="lg"
                    variant="outline"
                    leftSection={<IconBrandWhatsapp size={20} />}
                    rightSection={<IconArrowRight size={20} />}
                    className="w-full"
                  >
                    Whatsapp Expert
                  </Button>
                </Link>
              </div>
            </div>

            {/* Description */}
            <Container py={"lg"}>
              <StickyTabs
                slug={typeof doctorName == "string" ? doctorName : " "}
              ></StickyTabs>

              <Stack id="doctor">
                <Card
                  id="aboutDoctor"
                  className="shadow-[0px_0px_40px_-6px_rgba(0,_0,_0,_0.1)]"
                >
                  <div className="prose max-w-full ">
                    <PortableText value={pageData.aboutDoctor} />
                  </div>
                </Card>
                {pageData.additionalContent1 && (
                  <Card shadow="sm" mt={"md"}>
                    <div className="prose max-w-full ">
                      <PortableText value={pageData.additionalContent1} />
                    </div>
                  </Card>
                )}
                {pageData.additionalContent2 && (
                  <Card shadow="sm" mt={"md"}>
                    <div className="prose max-w-full ">
                      <PortableText value={pageData.additionalContent2} />
                    </div>
                  </Card>
                )}
                { pageData.treatments &&
                <Card
                  id="treatment"
                  p={"md"}
                  className="shadow-[0px_0px_40px_-6px_rgba(0,_0,_0,_0.1)]"
                >
                  <Stack>
                    <Title order={2}> Treatments </Title>
                    <List
                      spacing="xs"
                      size="sm"
                      center
                      icon={<IconPointFilled size={10} />}
                    >
                      {pageData.treatments.map((treatment, idx) => {
                        return (
                          <ListItem
                            c={"blue"}
                            className=" underline-offset-1 underline"
                            key={idx}
                          >
                            <Link
                              href={
                                treatment.treatmentLink
                                  ? treatment.treatmentLink
                                  : " "
                              }
                            >
                              <Text>{treatment.treatmentName}</Text>
                            </Link>
                          </ListItem>
                        );
                      })}
                    </List>
                  </Stack>
                </Card>
}
                <Card
                  shadow="sm"
                  id="healthFeed"
                  padding="lg"
                  className="shadow-[0px_0px_40px_-6px_rgba(0,_0,_0,_0.1)]"
                >
                  <Stack>
                    <Title order={2}>Health Articles</Title>

                    <div className="w-full">
                      <Carousel
                        withIndicators
                        slideSize={{ base: "100%", sm: "50%", md: "33.333%" }}
                        slideGap="md"
                        loop
                        align="start"
                        slidesToScroll={2}
                        styles={{
                          root: { width: "100%" },
                          viewport: { padding: "10px 0" },
                          slide: { height: "auto" }, // Ensure slides adapt to content height
                          container: { alignItems: "stretch" },
                        }}
                      >
                        {blogList.map((el, idx) => (
                          <Carousel.Slide key={idx}>
                            <div style={{ height: "100%", padding: "1px" }}>
                              {" "}
                              {/* 1px padding to prevent border overlap */}
                              <ArticleCard mainContent={el.mainContent} />
                            </div>
                          </Carousel.Slide>
                        ))}
                      </Carousel>
                    </div>
                  </Stack>
                </Card>
              </Stack>
            </Container>
          </Grid.Col>
          <Grid.Col span={{ base: 12, md: 4, lg: 4 }} pos={"relative"}>
            <Card
              shadow="sm"
              padding="lg"
              radius="md"
              withBorder
              pos={"sticky"}
              top={24}
            >
              <Title order={3}>Request a callback</Title>
              <Text c={"#5F6D7A"}>
                {" "}
                Speak to one of our representatives by filling the form below
              </Text>
              <AppointmentForm pageName={doctorName}></AppointmentForm>
            </Card>
          </Grid.Col>
        </Grid>
      </Group>
      {pageData.reviews && (
        <Stories
          reviews={pageData.reviews}
          title="Patient Journeys"
          subtitle="Hear from those who have transformed their lives"
        />
      )}

      <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
        <FrequentlyAskedQuestions faqs={pageData.faqs} />
        <BookConsultation />
      </div>
    </>
  );
}
