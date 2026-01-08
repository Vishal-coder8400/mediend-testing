"use client";

import { useEffect, useState } from "react";
import {
  Button,
  Card,
  Flex,
  Grid,
  Group,
  Image,
  List,
  Modal,
  Stack,
  Table,
  Tabs,
  Text,
  ThemeIcon,
  Title,
} from "@mantine/core";
import { useParams } from "next/navigation";
import { useDisclosure } from "@mantine/hooks";
import {
  IconBrandWhatsapp,
  IconHeartbeat,
  IconStethoscope,
  IconMessages,
  IconArrowRight,
} from "@tabler/icons-react";
import Link from "next/link";
import AppointmentForm from "../../components/AppointmentForm/AppointmentForm";
import LoadingScreen from "../../components/Loading/loading";
import Stories, { Review } from "../../components/Stories/Stories";
import FrequentlyAskedQuestions from "../../components/FAQs/FrequentlyAskedQuestions";
import BookConsultation from "../../components/BookConsultation/BookConsultation";
import NotFound from "../../not-found";
import Appointment from "../../components/Appointment/Appointment";
import { Doctor } from "../../doctor/[doctorName]/page";
import { PortableText } from "next-sanity";
import DoctorCarousel from "../../components/Doctors/DoctorCarousel/DoctorCarousel";

const CostingPage = () => {
  const params = useParams<{ slug: string }>();
  const { slug } = params;

  interface Speciality {
    icon: {
      _type: "image";
      asset: Reference;
    };
    title: string;
    description: string;
  }

  interface FAQ {
    question: string;
    answer: string;
  }

  interface BackLink {
    text: string;
    url: string;
  }

  interface BackLinksSection {
    title: string;
    links: BackLink[];
  }

  interface Cost {
    leastCost: number;
    averageCost: number;
    highestCost: number;
  }

  interface Block {
    _type: "block";
    // Add other block content model properties if needed
  }

  interface Costing {
    title: string;
    slug: {
      _type: "slug";
      current: string;
    };
    location: string;
    startingCost: number;
    cost: Cost;
    procedureType?: string;
    anaesthetiaType?: string;
    hospitalDays?: string;
    procedureDuration?: string;
    risk?: string;
    aboutTreatment: Block[];
    doctors: Doctor[];
    additionalContent1?: Block[];
    additionalContent2?: Block[];
    additionalContent3?: Block[];
    additionalContent4?: Block[];
    specialities?: Speciality[];
    reviews?: Review[];
    faqs?: FAQ[];
    backlinksLocation?: BackLinksSection;
    backlinksCosting?: BackLinksSection;
    backlinksOther?: BackLinksSection;
  }

  interface Reference {
    _ref: string;
    _type: "reference";
  }

  const [pageData, setPageData] = useState<Costing>();
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [opened, { open, close }] = useDisclosure(false);

  useEffect(() => {
    setIsLoading(true);
    fetch(
      `https://7rljkuk3.api.sanity.io/v2022-03-07/data/query/production?query=*%5B_type+%3D%3D+%22costing%22+%26%26+slug.current+%3D%3D+%22${slug}%22%5D+%7B%0A++title%2C%0A++%22slug%22%3A+slug.current%2C%0A++location%2C%0A++startingCost%2C%0A++cost+%7B%0A++++leastCost%2C%0A++++averageCost%2C%0A++++highestCost%0A++%7D%2C%0A++procedureType%2C%0A++anaesthetiaType%2C%0A++hospitalDays%2C%0A++procedureDuration%2C%0A++risk%2C%0A++aboutTreatment%2C%0A++%2F%2F+Reference+to+doctors+with+expanded+information%0A++%22doctors%22%3A+doctors%5B%5D-%3E+%7B%0A++++title%2C%0A++++speciality%2C%0A++++yearsOfExperience%2C%0A++++%22imageUrl%22%3A+image.asset-%3Eurl%0A++%7D%2C%0A++additionalContent1%2C%0A++additionalContent2%2C%0A++additionalContent3%2C%0A++additionalContent4%2C%0A++%2F%2F+Specialities+with+resolved+image+URLs%0A++specialities%5B%5D+%7B%0A++++%22imageUrl%22%3A+icon.asset-%3Eurl%2C%0A++++title%2C%0A++++description%0A++%7D%2C%0A++%2F%2F+Reviews+with+resolved+image+URLs%0A++reviews%5B%5D+%7B%0A++++name%2C%0A++++%22imageUrl%22%3A+image.asset-%3Eurl%2C%0A++++review%2C%0A++++highlight%0A++%7D%2C%0A++%2F%2F+FAQs%0A++faqs%5B%5D+%7B%0A++++question%2C%0A++++answer%0A++%7D%2C%0A++%2F%2F+All+backlinks+sections%0A++backlinksLocation+%7B%0A++++title%2C%0A++++links%5B%5D+%7B%0A++++++text%2C%0A++++++url%0A++++%7D%0A++%7D%2C%0A++backlinksCosting+%7B%0A++++title%2C%0A++++links%5B%5D+%7B%0A++++++text%2C%0A++++++url%0A++++%7D%0A++%7D%2C%0A++backlinksOther+%7B%0A++++title%2C%0A++++links%5B%5D+%7B%0A++++++text%2C%0A++++++url%0A++++%7D%0A++%7D%0A%7D%5B0%5D`,
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
  }, [slug]);

  if (isLoading) return <LoadingScreen />;
  if (!pageData) return <NotFound />;

  return (
    <>

    
      <Group grow p={{ base: "sm", md: "md", lg: "xl" }}>
        <Grid gutter="xl" className="relative">
          <Grid.Col span={{ base: 12, md: 8, lg: 8 }}>
            <Grid grow gutter="sm">
              <Grid.Col span={6}>
                <Group my="lg">
                  <Title c="#1C7ED6">
                    {pageData.title} 
                  </Title>
                  <Text c="dimmed" size="lg">
                    Starts from{" "}
                    <span style={{ color: "#4db368" }}>
                      ₹{pageData.startingCost}
                    </span>
                  </Text>
                </Group>

                <Group my="md" grow>
                  <Grid gutter="md">
                    <Grid.Col span={4} >
                      <Card style={{ background: "#F4F7FB" }} className="flex flex-col">
                        <Flex justify="start" align="center">
                          <IconHeartbeat
                            style={{ color: "#FF990C", marginRight: "8px" }}
                          />
                          <Title order={2}>₹{pageData.cost.leastCost}</Title>
                        </Flex>
                        <Text size="xs">Lowest Cost</Text>
                      </Card>
                    </Grid.Col>
                    <Grid.Col span={4}>
                      <Card style={{ background: "#fff8f0" }}>
                        <Flex justify="start" align="center">
                          <IconStethoscope
                            style={{ color: "#FF990C", marginRight: "8px" }}
                          />
                          <Title order={2}>₹{pageData.cost.averageCost}</Title>
                        </Flex>
                        <Text size="xs">Average Cost</Text>
                      </Card>
                    </Grid.Col>
                    <Grid.Col span={4}>
                      <Card style={{ background: "#dcffe5" }}>
                        <Flex justify="start" align="center">
                          <IconMessages
                            style={{ color: "#FF990C", marginRight: "8px" }}
                          />
                          <Title order={2}>₹{pageData.cost.highestCost}</Title>
                        </Flex>
                        <Text size="xs">Highest Cost</Text>
                      </Card>
                    </Grid.Col>
                  </Grid>
                </Group>

                <Group my="xl">
                  <Flex gap="md" wrap="wrap">
                    <Button size="lg" variant="filled" onClick={open}>
                      Get Cost Estimation
                    </Button>
                    <Modal
                      size="lg"
                      title="Book An Appointment"
                      opened={opened}
                      onClose={close}
                    >
                      <Appointment />
                    </Modal>
                    <Button
                      component={Link}
                      href={process.env.NEXT_PUBLIC_WHATSAPP_LINK || ""}
                      size="lg"
                      variant="outline"
                      leftSection={<IconBrandWhatsapp size={20} />}
                      rightSection={<IconArrowRight size={20} />}
                    >
                      WhatsApp Expert
                    </Button>
                  </Flex>
                </Group>
              </Grid.Col>

              <Card
                radius="lg"
                shadow="sm"
                className="border w-full mt-4"
                p="lg"
              >
                <Grid>
                  <Grid.Col span={{ base: 12, sm: 6, md: 4 }}>
                    <Text fw={600} size="lg">
                      Procedure Type
                    </Text>
                    <Text c="dimmed">{pageData.procedureType}</Text>
                  </Grid.Col>
                  <Grid.Col span={{ base: 12, sm: 6, md: 4 }}>
                    <Text fw={600} size="lg">
                      Anesthesia Type
                    </Text>
                    <Text c="dimmed">{pageData.anaesthetiaType}</Text>
                  </Grid.Col>
                  <Grid.Col span={{ base: 12, sm: 6, md: 4 }}>
                    <Text fw={600} size="lg">
                      Hospital Days
                    </Text>
                    <Text c="dimmed">{pageData.hospitalDays}</Text>
                  </Grid.Col>
                  <Grid.Col span={{ base: 12, sm: 6, md: 4 }}>
                    <Text fw={600} size="lg">
                      Duration
                    </Text>
                    <Text c="dimmed">{pageData.procedureDuration}</Text>
                  </Grid.Col>
                  <Grid.Col span={{ base: 12, sm: 6, md: 4 }}>
                    <Text fw={600} size="lg">
                      Risk
                    </Text>
                    <Text c="dimmed">{pageData.risk}</Text>
                  </Grid.Col>
                </Grid>
              </Card>

                  <Stack>
                    <Card className="border" radius="md" my={"xl"}>
                      <Title order={3} mb="md">
                        About {pageData.title}
                      </Title>

                      <div className="prose max-w-full ">
                        <PortableText value={pageData.aboutTreatment} />
                      </div>
                    </Card>

                    
                  </Stack>


                  {pageData.doctors && (
                    <Stack my={"xl"}>
                          <DoctorCarousel data={pageData.doctors}></DoctorCarousel>
                    </Stack>
                  )}

            </Grid>
          </Grid.Col>

          <Grid.Col span={{ base: 12, md: 4 }} pos="relative">
            <Card
              shadow="sm"
              padding="lg"
              radius="md"
              withBorder
              pos="sticky"
              top={24}
            >
              <Title order={3}>Calculate Treatment Cost</Title>
              <Text c="#5F6D7A" mb="md">
                Speak to one of our representatives by filling the form below
              </Text>
              <AppointmentForm pageName={pageData.title} />
            </Card>
          </Grid.Col>
        </Grid>
      </Group>

      {pageData.reviews && <Stories reviews={pageData.reviews} />}
      <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
        {pageData.faqs && <FrequentlyAskedQuestions faqs={pageData.faqs} />}
        <BookConsultation />
      </div>
    </>
  );
};

export default CostingPage;
