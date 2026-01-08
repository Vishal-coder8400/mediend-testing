"use client";
import {
  Button,
  Card,
  Flex,
  Grid,
  Group,
  Image,
  List,
  Modal,
  rem,
  Stack,
  Table,
  Text,
  ThemeIcon,
  Title,
} from "@mantine/core";
import { PortableText } from "@portabletext/react";
import {
  IconArrowRight,
  IconBrandWhatsapp,
  IconCircleCheck,
  IconHeartbeat,
  IconMessages,
  IconStethoscope,
} from "@tabler/icons-react";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import AppointmentForm from "../../components/AppointmentForm/AppointmentForm";
import BackLinks from "../../components/Backlinks/Backlinks";
import BookConsultation from "../../components/BookConsultation/BookConsultation";
import DoctorCarousel from "../../components/Doctors/DoctorCarousel/DoctorCarousel";
import FrequentlyAskedQuestions from "../../components/FAQs/FrequentlyAskedQuestions";
import LoadingScreen from "../../components/Loading/loading";
import Stories from "../../components/Stories/Stories";
import WhyUs from "../../components/WhyUs/WhyUs";
import { Doctor } from "../../doctor/[doctorName]/page";
import Link from "next/link";
import Appointment from "../../components/Appointment/Appointment";
import { useDisclosure } from "@mantine/hooks";
import classes from "../../components/Header/Header.module.css";
import NotFound from "../../not-found";
import Head from "next/head";

interface SurgeryComparison {
  heading1: {
    name: string;
    rows: string[];
  };
  heading2: {
    name: string;
    rows: string[];
  };
  heading3: {
    name: string;
    rows: string[];
  };
  _key: string;
}

interface Backlink {
  text: string;
  _key: string;
  url: string;
  _type: "backlink";
}

interface Backlinks {
  links: Backlink[];
  title: string;
}

interface LipomaSanityDocument {
  title: string;
  header: string;
  imageUrl: string;
  shortDescription: string;
  featuredTreatments: string[];
  content: ContentBlock[];
  infoCards: InfoCard[];
  doctors: Doctor[];
  additionalContent1?: ContentBlock[];

  seoTitle?: string;
  seoDescription?: string;

  additionalContent2?: ContentBlock[];
  backlinksLocation: Backlinks;
  backlinksCosting: Backlinks;
  backlinksOther: Backlinks;
  surgeryComparisons: SurgeryComparison[];
  reviews?: Review[];
  faqs?: FAQ[];
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
  const { disease } = params;
  const cardBackgrounds = ["#D7E4F2", "#FFEBD9"];

  const [pageData, setPageData] = useState<LipomaSanityDocument>();
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  const [modalOpened, { open: modalOpen, close: modalClose }] =
    useDisclosure(false);

  useEffect(() => {
    setIsLoading(true);
    fetch(
      `https://7rljkuk3.apicdn.sanity.io/v2022-03-07/data/query/production?query=*%5B_type+%3D%3D+%27disease%27+%26%26+slug.current+%3D%3D+%22${disease}%22%5D%7B%0A++title%2C%0A++header%2C%0A++seoTitle%2C%0A++seoDescription%2C%0A++shortDescription%2C%0A++%22slug%22%3Aslug.current%2C%0A++%22imageUrl%22%3A+headerImage.asset-%3Eurl%2C%0A++backlinksLocation%2C%0A++backlinksCosting%2C%0A++backlinksOther%2C%0A++doctors%5B%5D-%3E%7B%0A++++title%2C%0A++++%22imageUrl%22%3Aimage.asset-%3Eurl%2C%0A++++degrees%2C%0A++++speciality%2C%0A++++yearsOfExperience%2C%0A++++%22slug%22%3Aslug.current%0A++++%0A++%7D%2C%0A++featuredTreatments%2C%0A++content%2C%0A++infoCards%2C%0A++surgeryComparisons%2C%0A++reviews%2C%0A++faqs%2C%0A++additionalContent1%2C%0A++additionalContent2%0A%7D%5B0%5D%0A`,
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
  }, [disease]);

  useEffect(() => {
    if (pageData) {
      document.title = pageData.seoTitle || pageData.header;
      
      // Update meta description
      let metaDescription = document.querySelector('meta[name="description"]');
      if (!metaDescription) {
        metaDescription = document.createElement('meta');
        metaDescription.setAttribute('name', 'description');
        document.head.appendChild(metaDescription);
      }
      metaDescription.setAttribute(
        'content', 
        pageData.seoDescription || pageData.shortDescription || 'Detailed information about medical procedure'
      );

      let canonicalLink = document.querySelector('link[rel="canonical"]');
      if (!canonicalLink) {
        canonicalLink = document.createElement('link');
        canonicalLink.setAttribute('rel', 'canonical');
        document.head.appendChild(canonicalLink);
      }
      
      // Generate canonical URL using current path
      const canonicalUrl = `https://mediend.com${window.location.pathname}`;
      canonicalLink.setAttribute('href', canonicalUrl);
    }
  }, [pageData]);

  if (isLoading) return <LoadingScreen />;
  if (error) return <div>Error loading data</div>;
  if (!pageData) return <NotFound/>;

  const elements = pageData.surgeryComparisons
    ? pageData.surgeryComparisons.flatMap((item) => {
        const properties = item.heading1.rows;
        const traditionalValues = item.heading2.rows;
        const newValues = item.heading3.rows;

        return properties.map((property, index) => ({
          property: property,
          traditional: traditionalValues[index],
          minimallyInvasive: newValues[index],
        }));
      })
    : null;

  const rows = elements
    ? elements.map((element) => (
        <Table.Tr
          key={element.property}
          style={{ background: "#EEF0F5", margin: "2px" }}
        >
          <Table.Td><Text size="md">{element.property}</Text></Table.Td>
          <Table.Td>
            <div
              style={{
                paddingInline: "1.5rem",
                padding: "0.5rem",
                background: "white",
                borderRadius: "100px",
                textAlign: "center",
              }}
            >
              {element.traditional.toLocaleUpperCase()}
            </div>
          </Table.Td>
          <Table.Td>
            <div
              style={{
                paddingInline: "1.5rem",
                padding: "0.5rem",
                background: "#3269DB",
                borderRadius: "100px",
                color: "white",
                textAlign: "center",
              }}
            >
              {element.minimallyInvasive.toLocaleUpperCase()}
            </div>
          </Table.Td>
        </Table.Tr>
      ))
    : null;

  return (
    <>
          <Head>
        <title>{pageData.seoTitle || pageData.header}</title>
        <meta 
          name="description" 
          content={pageData.seoDescription || pageData.shortDescription} 
        />
      </Head>
      <Group grow p={{ base: "sm", md: "md", lg: "xl" }}>
        <Grid gutter={"xl"} className="relative">
          <Grid.Col span={{ base: 12, md: 8, lg: 8 }}>
            <Grid grow gutter={"sm"}>
              <Grid.Col span={6}>
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
                      >
                        Whatsapp Expert
                      </Button>
                    </Link>
                  </Flex>
                </Group>
              </Grid.Col>

              <Grid.Col span={{ base: 0, md: 2, lg: 2 }} className="hidden md:block">
                <Image
                  src={pageData.imageUrl}
                  maw={250}
                  
                ></Image>
              </Grid.Col>

              <Grid.Col span={8} className="hidden sm:flex ">
                <Group>
                  <div className="w-full">
                    <Image
                      src="/assets/banner mediend.png"
                      className=" object-cover"
                      width={100}
                      height={100}
                    ></Image>
                  </div>
                </Group>
              </Grid.Col>

              {pageData.infoCards && (
                <Card radius={"lg"} shadow="lg" my={"lg"} className="border">
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
                    {/* <hr style={{ margin: "2rem 0", color: "grey" }} /> */}
                  </Grid.Col>
                </Card>
              )}

              {pageData.featuredTreatments && (
                <Grid.Col span={8} mt={"lg"}>
                  <Stack gap={"lg"}>
                    <Title order={2}>Featured Treatments</Title>
                    <Flex wrap={"wrap"} gap={"md"}>
                      {pageData.featuredTreatments.map((treatment, idx) => {
                        return (
                          <Card
                            style={{
                              background:
                                cardBackgrounds[idx % cardBackgrounds.length],
                            }}
                            padding={"lg"}
                            key={idx}
                          >
                            <Text size="md">{treatment}</Text>
                          </Card>
                        );
                      })}
                    </Flex>
                  </Stack>
                </Grid.Col>
              )}

              {pageData.surgeryComparisons && (
                <Card
                  radius={"lg"}
                  shadow="lg"
                  my={"lg"}
                  w={"100%"}
                  className="border"
                >
                  <Grid.Col span={8} mt={"lg"}>
                    <Stack gap={"lg"}>
                      {/* <Title order={2}>Why opt for {disease} Procedure?</Title> */}
                      <Table
                        withRowBorders={false}
                        verticalSpacing={"md"}
                        horizontalSpacing={"md"}
                        striped
                        highlightOnHover
                      >
                        <Table.Thead>
                          <Table.Tr>
                            <Table.Th>
                              {pageData.surgeryComparisons[0].heading1.name}
                            </Table.Th>
                            <Table.Th style={{ textAlign: "center" }}>
                              {pageData.surgeryComparisons[0].heading2.name}
                            </Table.Th>
                            <Table.Th style={{ textAlign: "center" }}>
                              {pageData.surgeryComparisons[0].heading3.name}
                            </Table.Th>
                          </Table.Tr>
                        </Table.Thead>
                        <Table.Tbody>{rows}</Table.Tbody>
                      </Table>
                    </Stack>
                  </Grid.Col>
                </Card>
              )}
              { pageData.doctors &&
              <Grid.Col span={8} mt={"lg"}>
                <Stack gap={"lg"}>
                  <Title order={2}>Our Expert Doctors</Title>
                  <DoctorCarousel data={pageData.doctors}></DoctorCarousel>
                </Stack>
              </Grid.Col>
                }
              <Grid.Col span={8} mt={"lg"}>
                <Card radius={"lg"} shadow="lg" className="border">
                  <div className="prose max-w-full ">
                    <PortableText value={pageData.content} />
                  </div>
                </Card>
                {pageData.additionalContent1 && (
                  <Card shadow="sm" mt={"md"} radius={"lg"} className="border">
                    <div className="prose max-w-full ">
                      <PortableText value={pageData.additionalContent1} />
                    </div>
                  </Card>
                )}
                {pageData.additionalContent2 && (
                  <Card shadow="sm" mt={"md"} radius={"lg"} className="border">
                    <div className="prose max-w-full">
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
              <AppointmentForm pageName={disease}></AppointmentForm>
            </Card>
          </Grid.Col>
        </Grid>
      </Group>

      <WhyUs></WhyUs>
      {pageData.reviews && <Stories reviews={pageData.reviews} />}
      <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
        {pageData.faqs && <FrequentlyAskedQuestions faqs={pageData.faqs} />}
        <BookConsultation />
        {pageData.backlinksLocation && (
          <BackLinks
            procedures={pageData.backlinksLocation.links}
            header={pageData.backlinksLocation.title}
          ></BackLinks>
        )}
        {pageData.backlinksCosting && (
          <BackLinks
            procedures={pageData.backlinksCosting.links}
            header={pageData.backlinksCosting.title}
          ></BackLinks>
        )}
        {pageData.backlinksOther && (
          <BackLinks
            procedures={pageData.backlinksOther.links}
            header={pageData.backlinksOther.title}
          ></BackLinks>
        )}
      </div>
    </>
  );
}
