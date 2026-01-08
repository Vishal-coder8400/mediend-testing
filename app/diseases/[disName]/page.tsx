"use client";
import {
  Box,
  Button,
  Container,
  Divider,
  Flex,
  Group,
  Image,
  Modal,
  Text,
  Title
} from "@mantine/core";
import { useDisclosure, useMediaQuery } from "@mantine/hooks";
import { IconArrowNarrowRight, IconBrandWhatsapp } from "@tabler/icons-react";
import Link from "next/link";
import { useParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { sanityAds, urlForAds } from "../../../lib/sanity";
import { AdsDisease, BenefitsType } from "../../../lib/utils/adsDiseaseType";
import { AboutAds, StickyForm } from "../../components/AboutAds/AboutAds";
import { AdsForm } from "../../components/AdsForm/AdsForm";
import { AdsHerobox } from "../../components/AdsHerobox/AdsHerobox";
import { AdsInfoBox } from "../../components/AdsInfoBox/AdsInfoBox";
import { ExpertDoctors } from "../../components/ExpertDoctors/ExpertDoctors";
import FrequentlyAskedQuestions from "../../components/FAQs/FrequentlyAskedQuestions";
import LoadingScreen from "../../components/Loading/loading";
import { Procedure } from "../../components/Procedure/Procedure";

const benefits = (benefit1: string, benefit2: string, benefit3: string) => [
  {
    info: benefit1,
    bg: "#F2AC4B",
  },
  {
    info: benefit2,
    bg: "#3269DB",
  },
  {
    info: benefit3,
    bg: "#3CBA92",
  },
];

const Benefits = ({ data }: { data: BenefitsType }) => {
  const mobile = useMediaQuery(`(min-width: 600px)`);
  const benefitData = benefits(data?.benefit1, data?.benefit2, data?.benefit3);
  return (
    <Box maw={823} my={50}>
      <Title fz={{ base: 25, sm: 34 }}>{data?.heading}</Title>
      <Flex
        gap={10}
        pos="relative"
        direction={{ base: "column", sm: "row" }}
        align="center"
        justify={{ base: "center", sm: "space-between" }}
        my={40}
      >
        {benefitData?.map(
          ({ info, bg }: { info: string; bg: string }, index: number) => (
            <Flex
              justify="center"
              align="center"
              p={{ base: 15, sm: 20 }}
              w={{ base: 150, sm: 200, md: 240 }}
              h={{ base: 150, sm: 200, md: 240 }}
              style={{ borderRadius: "50%" }}
              key={index}
              bg={bg}
            >
              <Text ta="center" c="white" fz={{ base: 14, sm: 20, md: 26 }} fw="500">
                {info}
              </Text>
            </Flex>
          )
        )}
        <Divider
          orientation={mobile ? "horizontal" : "vertical"}
          h={{ base: "90%", sm: "2px" }}
          pos="absolute"
          w={{ base: "2px", sm: "90%" }}
          left="50%"
          color="#000"
          variant="dashed"
          size="md"
          top="50%"
          style={{ transform: "translate(-50%, -50%)", zIndex: -1 }}
        />
      </Flex>
    </Box>
  );
};

export default function AboutUsPage() {
  const router = useRouter();
  const params = useParams();
  const { disName } = params;
  const [isLoading, setIsLoading] = useState(false);
  const mobile = useMediaQuery(`(min-width: 600px)`);
  const [opened, { open, close }] = useDisclosure(false);
  const [contactUsOpened, { open: openContactUs, close: closeContactUs }] = useDisclosure(false);
  const [data, setData] = useState<AdsDisease>({} as AdsDisease);
  useEffect(() => {
    const fetchDisease = async () => {
      try {
        setIsLoading(true);
        const response = await sanityAds.fetch(`*[_type == "ads"]`);
       const diseaseData = response.filter(
  (el: AdsDisease) =>
    el.diseaseName.toLowerCase().trim() ===
    (disName as string).toLowerCase().trim()
);

if (!diseaseData[0]) {
  router.replace("/404");
  return;
}

setData(diseaseData[0]);

      } catch (error: any) {
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchDisease();
  }, []);
  if (isLoading) return <LoadingScreen />;

  return (
    <>
      <Box bg="#062D4C">
        <Container
          size="xl"
          style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}
          py={10}
        >
          <Box style={{ display: "flex", alignItems: "center" }}>
            <Image
              src="/logo.png"
              h={{ base: 35, sm: 40 }}
              w="auto"
              fit="contain"
              alt="logo"
              className="cursor-pointer"
              onClick={() => router.push("/")}
              style={{ flexShrink: 0, display: "block" }}
            />
          </Box>
          <Group wrap="wrap" gap="xs">
            {data?.header?.isCallLink && (
              <Button
                component={Link}
                href={data?.header?.callLink || ""}
                size={mobile ? "lg" : "sm"}
                variant="default"
              >
                Schedule Call
              </Button>
            )}
            <Button
              onClick={openContactUs}
              size={mobile ? "lg" : "sm"}
              variant="filled"
            >
              Contact Us
            </Button>
          </Group>
        </Container>
      </Box>
      <AdsHerobox data={data?.herobox} slug={disName as string} />
      <Container
        size="xl"
        pos="relative"
        display={{ base: "block", lg: "flex" }}
        style={{ justifyContent: "space-between" }}
      >
        <Box>
          <AboutAds data={data?.about} />
          <AdsInfoBox
            img="/assets/adspage/doctors.png"
            title={
              <Title fz={{ base: 15, sm: 36 }}>
                Book Your{" "}
                <Text span fz="inherit" fw="inherit" c="#34A853">
                  {" "}
                  FREE
                </Text>{" "}
                Consultation Today
              </Title>
            }
            info="Connect with our expert doctors to discuss the best treatment options tailored for you."
            button={
              <Button
                onClick={openContactUs}
                w={{ base: "100%", sm: 300 }}
                size={mobile ? "md" : "sm"}
                fz={{ base: 14, sm: 16 }}
                color="#34A853"
              >
                Contact Us
              </Button>
            }
            bg="#FEF7EF"
          />
          <ExpertDoctors data={data?.doctors} />
          <AdsInfoBox
            type="disease"
            pt={0}
            title={
              <Title ta={{ base: "center", sm: "left" }} c="#3269DB">
                {data?.disease?.diseaseQue}
              </Title>
            }
            img={
              data?.disease?.diseaseImage &&
              urlForAds(data?.disease?.diseaseImage)?.url()
            }
            info={data?.disease?.diseaseans}
            bg="#E9F1FF"
            pb={40}
          />
          <Procedure data={data?.procedure} />
          <AdsInfoBox
            title={
              <Title fz={{ base: 15, sm: 34 }}>
                Verify Your{" "}
                <Text span fz="inherit" fw="inherit" c="#023E8A">
                  {" "}
                  Insurance Coverage
                </Text>
              </Title>
            }
            img="/assets/adspage/insurance.png"
            info="Connect with our expert doctors to discuss the best treatment options tailored for you."
            bg="#EEF3FF"
            button={
              <Button
                onClick={open}
                w={{ base: "100%", sm: 300 }}
                size={mobile ? "md" : "sm"}
                fz={{ base: 14, sm: 16 }}
                color="#4285F4"
              >
                Verify Your Insurance
              </Button>
            }
          />
          <Modal
            opened={opened}
            onClose={close}
            title="Check Insurance Coverage"
          >
            <AdsForm onSuccess={close} slug={disName as string} />
          </Modal>
          <Modal
            opened={contactUsOpened}
            onClose={closeContactUs}
            title="Book Free Consultation"
          >
            <AdsForm onSuccess={closeContactUs} slug={disName as string} />
          </Modal>
          <Benefits data={data?.benefits} />

          {data?.faqs && <FrequentlyAskedQuestions faqs={data?.faqs} />}
        </Box>
        <StickyForm data={data?.diseaseName} slug={disName as string} />
      </Container>
      <Box bg="#0B77A1" py={30}>
        <Text fz={{ base: 20, sm: 32 }} ta="center" c="#fff">
          Need Help ?
        </Text>
        <Group my={20} justify="center">
          {data?.footer?.expertsLink && (
            <Button
              component={Link}
              href={`tel:${data?.footer?.expertsLink}`}
              size="md"
              // color="#FBBC05"
              // c="#000"
              rightSection={<IconArrowNarrowRight />}
            >
              Call our Experts for Free
            </Button>
          )}
          <Button
            onClick={openContactUs}
            size="md"
            variant="outline"
            color="#fff"
          >
            Contact Us
          </Button>
        </Group>
        <Box mt={20} px={{ base: 16, sm: 0 }}>
          <Text fz={{ base: 12, sm: 14 }} ta="center" c="#fff" fw={600} mb={8}>
            * DISCLAIMER:
          </Text>
          <Text fz={{ base: 11, sm: 13 }} ta="center" c="#fff" style={{ opacity: 0.9 }}>
            The result and experience may vary from patient to patient.
          </Text>
          <Text fz={{ base: 11, sm: 13 }} ta="center" c="#fff" style={{ opacity: 0.9 }} mt={4}>
            By submitting the form, you agree to receive important updates and marketing communication.
          </Text>
        </Box>
      </Box>
    </>
  );
}
