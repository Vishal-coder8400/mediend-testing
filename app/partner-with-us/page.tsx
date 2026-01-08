"use client"
import { Card, Grid, Group, Text, Title, rem, ThemeIcon, List, ListItem, Stack, Flex, Button } from "@mantine/core"
import DoctorOnboardingForm from "../components/DoctorOnboardingForm/DoctorOnboardingForm"
import WhyUs from "../components/WhyUs/WhyUs"
import Stories from "../components/Stories/Stories";
import FrequentlyAskedQuestions from "../components/FAQs/FrequentlyAskedQuestions";
import BookConsultation from "../components/BookConsultation/BookConsultation";
import { faqs } from "../components/FAQs/faqs";
import { IconCircleCheck } from "@tabler/icons-react";
import Image from "next/image";
import image1 from '../../public/assets/doctor-onboarding/image1.png'
import image2 from '../../public/assets/doctor-onboarding/image2.png'
import image3 from '../../public/assets/doctor-onboarding/image3.png'
import HospitalOnboardingForm from "../components/HospitalOnboardingForm/HospitalOnboardingForm";
import Link from "next/link";

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

const Page = () => {
  return (
    <>
        {/* <div className="absolute -z-10 -translate-y-6 hidden sm:block w-screen">
      <Image src="/assets/adspage/ads_hero.png" alt="background" width={100}></Image>

    </div>
    <div className="absolute -z-10 sm:hidden block w-screen">
      <Image src="/assets/adspage/ads_mobile.png" alt="background" width={100}></Image>

    </div> */}
    <div className="p-4 md:p-16">
        <Grid justify="center" align="center" gutter={"lg"}>
            <Grid.Col span={{base:12,md:6}}>
            <Group my={"lg"}>
                  <Title c={"#1C7ED6"}> Collaborate with the Fastest-Emerging Name in Healthcare.</Title>
                  <Text>Join the mediEND Care Partner Program!</Text>
                  <Flex wrap={"wrap"} gap={"md"}>
                    <Button size="md" bg={"#1C7ED6"} className="hover:bg-[#104e85]">Contact Us: +918750300099 </Button>
                    <Button size="md"><Link href={"mailto:info@mediend.com"}>Email Us at - info@mediend.com</Link></Button>
                    </Flex>
                </Group>    
            </Grid.Col>
            <Grid.Col span={{base:12,md:6}}>
                <Card p={"md"} shadow="md" my={"lg"}>
                    <Card.Section p={"lg"}>
                <Text fw={600} size="lg">Hospital Details</Text>
              <Text c="dimmed" fz={14}>
              Please share your details, and we&apos;ll get back to you with the next steps!
              </Text>
                    </Card.Section>
                    <Card.Section p={"lg"}>
                        <HospitalOnboardingForm></HospitalOnboardingForm>
                    </Card.Section>
                </Card>
        </Grid.Col>  
        <Grid.Col>
            <Card bg={"#F4F7FB"} p={"xl"} >
              <Flex wrap={"wrap"} gap={"md"} justify={"space-between"}>
                <Stack>
                    <Title order={2}> For Doctors </Title>
                    <List
                      spacing={"xl"}
                      size="lg"
                      mt={"lg"}
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
                                {["Transforming Healthcare Together","Pioneers in Elective Surgery Solutions","Collaborate with Leading Hospitals and Healthcare Providers","Fostering an Ethical and Supportive Work Culture"].map((item, itemIndex) => (
                                  <List.Item key={itemIndex}>{item}</List.Item>
                                ))}
                              </List>
                  </Stack>
                  <Image src={image1} alt="happy doctor" height={340}></Image>
                  </Flex> 
            </Card>
          </Grid.Col>  
        <Grid.Col>
            <Card bg={"#FFF8F0"} p={"xl"} >
              <Flex wrap={"wrap"} gap={"md"} justify={"space-between"}>
              <Image src={image3} alt="happy doctor" height={240}></Image>
                <Stack>
                    <Title order={2}> For Hospitals </Title>
                    <List
                      spacing={"xl"}
                      size="lg"
                      mt={"lg"}
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
                                {["Maximize OT Utilization Efficiency ","Zero Patient Acquisition Costs for Surgeons","Hassle-Free Experience for Medical Professionals","Streamlined and Automated Approvals"].map((item, itemIndex) => (
                                  <List.Item key={itemIndex}>{item}</List.Item>
                                ))}
                              </List>
                  </Stack>
                  </Flex> 
            </Card>
          </Grid.Col>  
        <Grid.Col>
            <Card  px={"xl"} py={"lg"} shadow="xl" className="border">
              <Flex wrap={"wrap"} gap={"md"} justify={"space-between"}>
                <Stack>
                    <Title order={2}> Become a Partner </Title>
                    <List
                      spacing={"xl"}
                      size="lg"
                      mt={"lg"}
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
                                {[ "Expand Your Practice Seamlessly", "Boost Patient Visits Effortlessly", "Achieve Greater Success Together", "Provide Smarter, Patient-Centric Care", "Enhance Your Online Reputation with Ease"].map((item, itemIndex) => (
                                  <List.Item key={itemIndex}>{item}</List.Item>
                                ))}
                              </List>
                  </Stack>
                  <Image src={image2} alt="happy doctor" height={340}></Image>
                  </Flex> 
            </Card>
          </Grid.Col>  
        </Grid>
        <WhyUs></WhyUs>
        <Stories reviews={storiesData} />
        <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
        <FrequentlyAskedQuestions faqs={faqs} />
        <BookConsultation />
      </div>
    </div>
    </>
  )
}

export default Page