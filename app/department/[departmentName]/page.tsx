"use client";
import BookConsultation from "../../components/BookConsultation/BookConsultation";
import FrequentlyAskedQuestions from "../../components/FAQs/FrequentlyAskedQuestions";
import AppointmentForm from "../../components/AppointmentForm/AppointmentForm";
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
  ThemeIcon,
  rem,
  Table,
  Stack,
  Modal,
} from "@mantine/core";
import Stories from "../../components/Stories/Stories";
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
import { Carousel } from "@mantine/carousel";
import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import { PortableText } from "@portabletext/react";
import LoadingScreen from "../../components/Loading/loading";
import { Doctor } from "../../doctor/[doctorName]/page";
import Link from "next/link";
import BackLinks from '../../components/Backlinks/Backlinks';
import DoctorCarousel from "../../components/Doctors/DoctorCarousel/DoctorCarousel";
import BG from "../../../app/assets/departmentBg.png"
import Appointment from "../../components/Appointment/Appointment";
import Specialities from "../../components/Specialities/Specialities";
import { useDisclosure } from "@mantine/hooks";
import WhyUs from "../../components/WhyUs/WhyUs";

const storiesData = [
  {
    imageUrl: "/assets/stories/stories_1.png",
    highlight: "“Strength to embrace my son and life again”",
    review: "We feel like we can finally live a normal life!” I can honestly say my son’s autism related symptoms have reduced tenfold since we started treatment... We feel like we can finally live a normal life!",
    name: "Vanamala Ramesh",
  },
  {
    imageUrl: "/assets/stories/stories_2.png",
    highlight: "“We feel like we can finally live a normal life!”",
    review: "I can honestly say my son’s autism related symptoms have reduced tenfold since we started treatment... We feel like we can finally live a normal life!.",
    name: "Stephanie Powell",
  },
  {
    imageUrl: "/assets/stories/stories_1.png",
    highlight: "“Strength to embrace my son and life again”",
    review: "We feel like we can finally live a normal life!” I can honestly say my son’s autism related symptoms have reduced tenfold since we started treatment... We feel like we can finally live a normal life!",
    name: "Vanamala Ramesh",
  },
  {
    imageUrl: "/assets/stories/stories_2.png",
    highlight: "“We feel like we can finally live a normal life!”",
    review: "I can honestly say my son’s autism related symptoms have reduced tenfold since we started treatment... We feel like we can finally live a normal life!.",
    name: "Stephanie Powell",
  },
];

interface Department {
  title: string;
  header: string;
  imageUrl:string,
  shortDescription: string;
  specialities: SpecialitiesT[];
  doctors: Doctor[];
  content: ContentBlock[];
  infoCards: InfoCard[];
  additionalContent1?: ContentBlock[];
  backlinks: Backlinks;
  additionalContent2?: ContentBlock[];
  disease: Disease[];
  reviews?: Review[];
  faqs?: FAQ[];

}

interface Disease{
  title:string;
  slug:string;
  imageUrl:string;
  shortDescription:string;
}

interface Backlink {
  text: string;
  _key: string;
  url: string;
  _type: 'backlink';
}

interface Backlinks {
  links: Backlink[];
  title: string;
}

export interface SpecialitiesT{
  title: string;
  iconUrl:string;
  description:string;
}

export interface Review {
  name: string;
  imageUrl:string;
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
export default function Page() {
  const params = useParams();

  const rawDepartment = params?.departmentName;
  const departmentName =
    typeof rawDepartment === "string"
      ? rawDepartment.toLowerCase()
      : Array.isArray(rawDepartment)
      ? rawDepartment[0].toLowerCase()
      : "";

  const cardBackgrounds = ["#D7E4F2", "#FFEBD9"];


 
const [pageData, setPageData] = useState<Department>()
const [isLoading, setIsLoading] = useState(true)
const [error, setError] = useState(null)

const [modalOpened, { open: modalOpen, close: modalClose }] =
useDisclosure(false);

useEffect(() => {
   if (!departmentName) return;
  setIsLoading(true)
  fetch(`https://7rljkuk3.apicdn.sanity.io/v2022-03-07/data/query/production?query=*%5B_type+%3D%3D+%27department%27+%26%26+slug.current+%3D%3D+%22${departmentName}%22%5D%7B%0A++title%2C%0A++header%2C%0A++shortDescription%2C%0A++backlinks%2C%0A++%22slug%22%3Aslug.current%2C%0A++%22imageUrl%22%3A+headerImage.asset-%3Eurl%2C%0A++%22specialities%22%3Aspecialities%5B%5D%7B%0A++++%22iconUrl%22%3A+icon.asset-%3Eurl%2C%0A++++title%2C%0A++++description%0A++%7D%2C%0A++doctors%5B%5D-%3E%7B%0A++++title%2C%0A++++%22imageUrl%22%3Aimage.asset-%3Eurl%2C%0A++++degrees%2C%0A++++speciality%2C%0A++++yearsOfExperience%2C%0A++++%22slug%22%3Aslug.current%0A++++%0A++%7D%2C%0A++++disease%5B%5D-%3E%7B%0A++++++title%2C%0A++++++%22slug%22%3Aslug.current%2C%0A++++++%22imageUrl%22%3AheaderImage.asset-%3Eurl%2C%0A++++++shortDescription%0A++++%7D%2C%0A++content%2C%0A++infoCards%2C%0A++reviews%2C%0A++faqs%2C%0A++additionalContent1%2C%0A++additionalContent2%0A%7D%5B0%5D%0A`, {
    method: "GET",
    headers: {
      "Content-type": "application/json"
    }
  })
  .then((response) => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json()
  })
  .then((data) => {
    console.log('Fetched data:', data);
    setPageData(data.result);
    setIsLoading(false);
  })
  .catch((error) => {
    console.error('Error fetching data:', error);
    setError(error);
    setIsLoading(false);
  });
}, [departmentName])

const mapDiseasesToSpecialities = (disease: Disease[]): SpecialitiesT[] => {
  return disease.map((disease) => ({
    title: disease.title,
    description: disease.shortDescription,
    iconUrl: disease.imageUrl,
    url: `/disease/${disease.slug}` // Creating a URL using the slug
  }));
};


const specialitiesData = pageData?.specialities.concat(mapDiseasesToSpecialities(pageData?.disease || []))

if (isLoading) return <LoadingScreen/>
if (error) return <div>Error loading data</div>
if (!pageData) return <div>No data found</div>

  return (
    <>
    {/* <div className="absolute -z-10 -translate-y-6 hidden sm:block w-screen">
      <Image src="/assets/ads_bg.png" alt="background"></Image>

    </div>
    <div className="absolute -z-10 sm:hidden block w-screen">
      <Image src="/assets/department_mobile.png" alt="background"></Image>

    </div> */}
      <Group grow p={"xl"} className="relative z-0">
        <Grid gutter={"md"} >
          <Grid.Col span={{base:12,md:9}} pos={"relative"}>
            <Grid grow gutter={"sm"}>
              <Grid.Col span={8}>
                <Group my={"lg"}>
                  <Title c={"#1C7ED6"}>
                    {" "}
                    {pageData.header}
                  </Title>
                  <Text>
                    {" "}
                    {pageData.shortDescription}
                  </Text>
                </Group>


                <Stack my={"xl"}>
                <Text className=" font-bold">Schedule a Free Consultation with Our Expert Doctors in Your Area</Text>
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
                </Stack>
                
              </Grid.Col>

              <Grid.Col span={8} className="hidden sm:flex ">
              <Group >
                  <div className="w-full">
                        <Image src="/assets/banner mediend.png" className=" object-cover"></Image>
                  </div>
                </Group>
              </Grid.Col>

            {
              pageData.infoCards && 
              <Card radius={"lg"} shadow="lg" my={"lg"}>

              <Grid.Col span={6} mt={"lg"}>
                {/* <hr style={{ margin: "2rem 0" }} /> */}
                <Grid>
                { pageData.infoCards.map((card, index) => (
        <Grid.Col key={card._key} span={{base:12, md:6}}>
          <Card 
            style={{ 
              background: cardBackgrounds[index % cardBackgrounds.length] 
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
                  <ThemeIcon color="#FF990C" size={24} radius="xl">
                    <IconCircleCheck
                      style={{ width: rem(16), height: rem(16) }}
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
            }



              <Grid.Col span={8} mt={"lg"} >
                <Stack w={"100%"} h={"100%"}>
                  <Title order={3}> Our Specialities</Title>
                  {
                    specialitiesData &&
                    <Specialities specialitiesData={specialitiesData}/>
                  }
                </Stack>
              </Grid.Col>

              <Grid.Col span={8} mt={"lg"}>
                <Stack gap={"lg"}>
                <Title order={2}>Our Expert Doctors</Title>
                <DoctorCarousel data={pageData.doctors}></DoctorCarousel>
                </Stack>
              </Grid.Col>
              <Grid.Col span={8} mt={"lg"}>
              <Card radius={"lg"} shadow="lg">
                <div className="prose max-w-full ">
                <PortableText value={pageData.content}/>
                </div>
                </Card>
                {
                  pageData.additionalContent1 && 
                  <Card shadow="sm" mt={"md"} radius={"lg"}>
                  <div className="prose max-w-full ">
                <PortableText value={pageData.additionalContent1}/>
                </div>
                </Card>
                }
                {
                  pageData.additionalContent2 && 
                  <Card shadow="sm" mt={"md"} radius={"lg"}>

                  <div className="prose max-w-full ">
                <PortableText value={pageData.additionalContent2}/>
                </div>
                </Card>
                }
                        {
          pageData.faqs &&
        <FrequentlyAskedQuestions faqs={pageData.faqs} />
        }
              </Grid.Col>

            </Grid>
          </Grid.Col>
          <Grid.Col span={{base:12,md:3}} pos={"relative"}>
            <Card shadow="sm" padding="lg" radius="md" withBorder pos={"sticky"} top={24}>
              <Title order={3}>Request a callback</Title>
              <Text c={"#5F6D7A"}>
                {" "}
                
                Speak to one of our representatives by filling the form below
              </Text>
              <AppointmentForm pageName={departmentName}></AppointmentForm>
            </Card>
          </Grid.Col>
        </Grid>
      </Group>

      <WhyUs></WhyUs>
    { pageData.reviews &&

      <Stories reviews={storiesData} />
                  }
      <div style={{ maxWidth: "1100px", margin: "0 auto" }}>

        <BookConsultation />
      </div>

      {
        pageData.backlinks &&
         <BackLinks procedures={pageData.backlinks.links} header={pageData.backlinks.title}></BackLinks>
       } 
    </>
  );
}