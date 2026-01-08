"use client";

import { Carousel } from "@mantine/carousel";
import {
  Button,
  Card,
  Flex,
  Grid,
  Group,
  Image,
  List,
  rem,
  Stack,
  Text,
  ThemeIcon,
  Title
} from "@mantine/core";
import { PortableText } from "@portabletext/react";
import {
  IconArrowRight,
  IconBrandWhatsapp,
  IconBriefcase,
  IconCircleCheck,
  IconHeartbeat,
  IconMessages,
  IconStethoscope,
  IconThumbUp,
} from "@tabler/icons-react";
import Link from "next/link";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import CapitalizeFirstLetter from "../../../lib/utils/helper";
import AppointmentForm from "../../components/AppointmentForm/AppointmentForm";
import BackLinks from "../../components/Backlinks/Backlinks";
import BookConsultation from "../../components/BookConsultation/BookConsultation";
import FrequentlyAskedQuestions from "../../components/FAQs/FrequentlyAskedQuestions";
import LoadingScreen from "../../components/Loading/loading";
import Stories from "../../components/Stories/Stories";
import WhyUs from "../../components/WhyUs/WhyUs";
import { Doctor } from "../../doctor/[doctorName]/page";
import NotFound from "../../not-found";

const storiesData = [
  {
    imageUrl: "/assets/stories/stories_1.png",
    highlight: "“Strength to embrace my son and life again”",
    review:
      "We feel like we can finally live a normal life!” I can honestly say my son’s autism related symptoms have reduced tenfold since we started treatment... We feel like we can finally live a normal life!",
    name: "Vanamala Ramesh",
  },
  {
    imageUrl: "/assets/stories/stories_2.png",
    highlight: "“We feel like we can finally live a normal life!”",
    review:
      "I can honestly say my son’s autism related symptoms have reduced tenfold since we started treatment... We feel like we can finally live a normal life!.",
    name: "Stephanie Powell",
  },
  {
    imageUrl: "/assets/stories/stories_1.png",
    highlight: "“Strength to embrace my son and life again”",
    review:
      "We feel like we can finally live a normal life!” I can honestly say my son’s autism related symptoms have reduced tenfold since we started treatment... We feel like we can finally live a normal life!",
    name: "Vanamala Ramesh",
  },
  {
    imageUrl: "/assets/stories/stories_2.png",
    highlight: "“We feel like we can finally live a normal life!”",
    review:
      "I can honestly say my son’s autism related symptoms have reduced tenfold since we started treatment... We feel like we can finally live a normal life!.",
    name: "Stephanie Powell",
  },
];



interface Department {
  title: string;
  header: string;
  imageUrl: string;
  shortDescription: string;
  seoTitle?: string;
  seoDescription?: string;
  specialities: Specialities[];
  doctors: Doctor[];
  content: ContentBlock[];
  infoCards: InfoCard[];
  additionalContent1?: ContentBlock[];

  additionalContent2?: ContentBlock[];

  reviews?: Review[];
  faqs?: FAQ[];
}

export interface Specialities {
  title: string;
  iconUrl: string;
  description: string;
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

interface InfoCard {
  _type: string;
  infoCardTitle: string;
  infoCardBody: string[];
  _key: string;
}

export default function Page() {
  const params = useParams();
  const { cityName } = params;
  const cardBackgrounds = ["#D7E4F2", "#FFEBD9"];

  const [pageData, setPageData] = useState<Department>();
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setIsLoading(true);
    fetch(
      `https://7rljkuk3.api.sanity.io/v2025-06-17/data/query/production?query=*%5B_type+%3D%3D+%27diseaseInCity%27+%26%26+slug.current+%3D%3D+%27${cityName}%27+%5D%7B%0A++title%2C%0A++header%2C%0A++seoTitle%2C%0A++seoDescription%2C%0A++disease-%3E%7B%0A++++title%2C%0A++++slug%2C%0A++++%22imageUrl%22%3A+headerImage.asset-%3Eurl%2C%0A++%7D%2C%0A++city%2C%0A++shortDescription%2C%0A++%22slug%22%3Aslug.current%2C%0A++featuredTreatments%2C%0A++doctors%5B%5D-%3E%7B%0A++++title%2C%0A++++%22imageUrl%22%3Aimage.asset-%3Eurl%2C%0A++++degrees%2C%0A++++speciality%2C%0A++++yearsOfExperience%2C%0A++++%22slug%22%3Aslug.current%0A++++%0A++%7D%2C%0A++content%2C%0A++infoCards%2C%0A++reviews%2C%0A++faqs%2C%0A++additionalContent1%2C%0A++additionalContent2%0A%7D%5B0%5D&perspective=drafts`,
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
  }, [cityName]);



  if (isLoading) return <LoadingScreen />;
  if (error) return <div>Error loading data</div>;
  if (!pageData) return <NotFound/>;

  return (
    <>

      <Group grow p={{ base: "sm", md: "md", lg: "xl" }}>
        <Grid gutter={"md"}>
          <Grid.Col span={{ base: 12, md: 8, lg: 8 }} pos={"relative"}>
            <Grid grow gutter={"sm"}>
              <Grid.Col span={8}>
                <Group my={"lg"}>
                  <Title c={"#1C7ED6"}> {pageData.header}</Title>
                  <Text> {pageData.shortDescription}</Text>
                </Group>
                <Group my={"md"} grow>
                  <Grid gutter={"md"}>
                    <Grid.Col span={4}>
                      <Card style={{ background: "lightblue" }}>
                        <Flex justify={"start"} align={"center"}>
                          <IconHeartbeat
                            style={{ color: "#FF990C", marginRight: "8px" }}
                          ></IconHeartbeat>
                          <Title order={4}>100%</Title>
                        </Flex>
                        <Text size="xs">Advanced Procedures</Text>
                      </Card>
                    </Grid.Col>
                    <Grid.Col span={4}>
                      <Card style={{ background: "lightblue" }}>
                        <Flex justify={"start"} align={"center"}>
                          <IconStethoscope
                            style={{ color: "#FF990C", marginRight: "8px" }}
                          ></IconStethoscope>
                          <Title order={4}>50+</Title>
                        </Flex>
                        <Text size="xs">Expert Surgeons</Text>
                      </Card>
                    </Grid.Col>
                    <Grid.Col span={4}>
                      <Card style={{ background: "lightblue" }}>
                        <Flex justify={"start"} align={"center"}>
                          <IconMessages
                            style={{ color: "#FF990C", marginRight: "8px" }}
                          ></IconMessages>
                          <Title order={4}>1:1</Title>
                        </Flex>
                        <Text size="xs">Personal Support</Text>
                      </Card>
                    </Grid.Col>
                  </Grid>
                </Group>
                <Group my={"xl"}>
                  <Flex gap={"md"} wrap={"wrap"}>
                    <Button size="lg" variant="filled">
                      Book An Appointment
                    </Button>
                    <Button
                      size="lg"
                      variant="outline"
                      leftSection={<IconBrandWhatsapp size={20} />}
                      rightSection={<IconArrowRight size={20} />}
                    >
                      Whatsapp Expert
                    </Button>
                  </Flex>
                </Group>
              </Grid.Col>

              <Grid.Col span={4}>
                <Image
                  src={pageData.imageUrl}
                  maw={250}
                  className="mix-blend-multiply"
                ></Image>
              </Grid.Col>

              <Grid.Col span={8} className="hidden sm:flex ">
                <Group>
                  <div className="w-full">
                    <Image
                      src="/assets/banner mediend.png"
                      className=" object-cover"
                      alt={""}
                    ></Image>
                  </div>
                </Group>
              </Grid.Col>

              {pageData.infoCards && (
                <Card radius={"lg"} shadow="lg" my={"lg"}>
                  <Grid.Col span={6} mt={"lg"}>
                    {/* <hr style={{ margin: "2rem 0" }} /> */}
                    <Grid>
                      {pageData.infoCards.map((card, index) => (
                        <Grid.Col key={card._key} span={{ base: 12, md: 6 }}>
                          <Card
                            style={{
                              background:
                                cardBackgrounds[index % cardBackgrounds.length],
                            }}
                            padding="sm"
                          >
                            <Title order={4}>{card.infoCardTitle}</Title>
                            <Card.Section p="md">
                              <List
                                spacing="xs"
                                size="sm"
                                center
                                icon={
                                  <ThemeIcon
                                    color="#FF990C"
                                    size={24}
                                    radius="xl"
                                  >
                                    <IconCircleCheck
                                      style={{
                                        width: rem(16),
                                        height: rem(16),
                                      }}
                                    />
                                  </ThemeIcon>
                                }
                              >
                                {card.infoCardBody.map((item, itemIndex) => (
                                  <List.Item key={itemIndex}>{item}</List.Item>
                                ))}
                              </List>
                            </Card.Section>
                          </Card>
                        </Grid.Col>
                      ))}
                    </Grid>
                    <hr style={{ margin: "2rem 0", color: "grey" }} />
                  </Grid.Col>
                </Card>
              )}
              { pageData.doctors &&
              <Grid.Col span={8} mt={"lg"}>
                <Stack gap={"lg"}>
                  <Title order={2}>
                    Our Expert Doctors in {CapitalizeFirstLetter(cityName)}
                  </Title>
                  {/* <Carousel slideSize="60%" slideGap="md" loop={true} p={"md"}>
                    {pageData.doctors.map((doctor, idx) => {
                      return (
                        <Carousel.Slide key={idx}>
                          <Link href={`/doctor/${doctor.slug}`}>
                            <Card shadow="lg">
                              <Group gap={"md"}>
                                <Image
                                  src={doctor.imageUrl}
                                  radius={"lg"}
                                  w={150}
                                ></Image>
                                <Stack gap={"lg"} justify="space-between">
                                  <div>
                                    <Title order={4} c={"#3269DB"}>
                                      {doctor.title}
                                    </Title>
                                    <Text size="xs" c={"#5F6D7A"}>
                                      {doctor.degrees}
                                    </Text>
                                    <Text size="xs" c={"#5F6D7A"}>
                                      {doctor.speciality}
                                    </Text>
                                  </div>
                                  <Group>
                                    <div>
                                      <Group gap={"sm"}>
                                        <IconBriefcase
                                          color="#3269DB"
                                          size={20}
                                        />
                                        <Title order={6} c={"#3269DB"}>
                                          {doctor.yearsOfExperience}
                                        </Title>
                                      </Group>
                                      <Text size="xs" c={"#5F6D7A"}>
                                        {" "}
                                        Experience
                                      </Text>
                                    </div>
                                    <hr />
                                    <div>
                                      <Group>
                                        <IconThumbUp
                                          color="#3269DB"
                                          size={20}
                                        />{" "}
                                        <Title order={6} c={"#3269DB"}>
                                          99%
                                        </Title>
                                      </Group>
                                      <Text size="xs" c={"#5F6D7A"}>
                                        {" "}
                                        Recommended
                                      </Text>
                                    </div>
                                  </Group>
                                </Stack>

                                <Button fullWidth variant="outline" size="md">
                                  Book Appointment
                                </Button>
                              </Group>
                            </Card>
                          </Link>
                        </Carousel.Slide>
                      );
                    })}
                  </Carousel> */}
                </Stack>
              </Grid.Col>
              }
              <Grid.Col span={8} mt={"lg"}>
                <Card radius={"lg"} shadow="lg">
                  <div className="prose max-w-full ">
                    <PortableText value={pageData.content} />
                  </div>
                </Card>
                {pageData.additionalContent1 && (
                  <Card shadow="sm" mt={"md"} radius={"lg"}>
                    <div className="prose max-w-full ">
                      <PortableText value={pageData.additionalContent1} />
                    </div>
                  </Card>
                )}
                {pageData.additionalContent2 && (
                  <Card shadow="sm" mt={"md"} radius={"lg"}>
                    <div className="prose max-w-full ">
                      <PortableText value={pageData.additionalContent2} />
                    </div>
                  </Card>
                )}
              </Grid.Col>
            </Grid>
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
              <AppointmentForm pageName={pageData.title}></AppointmentForm>
            </Card>
          </Grid.Col>
        </Grid>
      </Group>

      <WhyUs></WhyUs>
      {pageData.reviews && <Stories reviews={storiesData} />}
      <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
        {pageData.faqs && <FrequentlyAskedQuestions faqs={pageData.faqs} />}
        <BookConsultation />
        {/* <BackLinks
          procedures={procedures}
          header="Procedures in Top Cities"
        ></BackLinks> */}
      </div>
    </>
  );
}
