"use client";
import { Box, Button, Divider, Modal, rem, Text } from "@mantine/core";
import {
  IconBrandTelegram,
  IconBrandWhatsapp,
  IconCircle,
  IconCopyright,
} from "@tabler/icons-react";
import classes from "./Footer.module.css";
import { useDisclosure, useMediaQuery } from "@mantine/hooks";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import Appointment from "../Appointment/Appointment";
import modalclasses from "../../components/Header/Header.module.css";


const surgeryItems = [
  { text: "Gynecomastia", slug: "gynecomastia" },
  { text: "Lipoma", slug: "lipoma" },
  { text: "Lasik", slug: "lasik-eye-surgery" }, 
  { text: "Cataract", slug: "cataract" },
  { text: "Varicose veins", slug: "varicose-veins" }, 
  { text: "Piles", slug: "piles" },
  { text: "Fissure", slug: "fissure" },
  { text: "Fistula", slug: "fistula" },
  { text: "Gallstone", slug: "gallstone" },
  { text: "Circumcision", slug: "circumcision" }, 
  { text: "Cyst", slug: "sebaceous-cyst" }, 
  { text: "Kidney stone", slug: "kidney-stones" }, 
  { text: "Knee replacement", slug: "knee-replacement" },
  { text: "Liposuction", slug: "liposuction" }
];

const quickLinks = [
  // { label: "About Us", link: "/about-us" },
  { label: "Our Doctors", link: "/doctor" },
  { label: "Blogs", link: "/blogs" },
  { label: "Careers", link: "/careers" },
  { label: "Contact Us", link: "/contact-us" },
  { label: "Privacy & Policy", link: "/privacy-policy" },
  {
    label: "Terms & Conditions",
    link: "/terms-and-conditions",
  },
  { label: "Disclaimer", link: "/disclaimer" },
];
const Footer = () => {
  const mobile = useMediaQuery(`(min-width: 700px)`);
  const pathname = usePathname();
  const isDiseasesPage = pathname.startsWith("/diseases");

  const [modalOpened, { open: modalOpen, close: modalClose }] =
  useDisclosure(false);

  
  return (
    <Box
      style={{ display: isDiseasesPage ? "none" : "block" }}
      mt={{ base: 100, sm: 180 }}
    >
      <Box className={classes.main}>
        <Box className={classes.main__box}>
          <Box className={classes.top}>
            <Box my={10}>
            <Button size="sm" variant="filled" mr={"sm"} onClick={() => modalOpen()}>
                  Book An Appointment
                </Button>
                <Modal
                  w={"100%"}
                  size="lg"
                  classNames={{
                    content: modalclasses.modal__content,
                    header: modalclasses.modal__header,
                    title:  modalclasses.modal__title,
                    close:  modalclasses.modal__close,
                  }}
                  title="Book An Appointment"
                  opened={modalOpened}
                  onClose={modalClose}
                >
                  <Appointment></Appointment>
                </Modal>  
              <Button my={5} variant="outline" className={classes.order__btn}>
              Contact Us: +918750300099
              </Button>
            </Box>
            <Box my={10}>
              <Button
                component={Link}
                href="https://twitter.com/medi_end_"
                target="_blank"
                className={classes.social}
                mr={10}
                data-aos="zoom-in"
              >
                <Image
                  src="/assets/social/twitter.png"
                  alt="twitter"
                  width={40}
                  height={40}
                />
              </Button>
              <Button
                component={Link}
                href="https://www.facebook.com/mediend.official"
                target="_blank"
                className={classes.social}
                mr={10}
                data-aos="zoom-out"
              >
                <Image
                  src="/assets/social/facebook.png"
                  alt="facebook"
                  width={40}
                  height={40}
                />
              </Button>
              <Button
                component={Link}
                href="https://www.linkedin.com/company/medi-end/"
                target="_blank"
                className={classes.social}
                mr={10}
                data-aos="zoom-in"
              >
                <Image
                  src="/assets/social/linkedin.png"
                  alt="linkedin"
                  width={40}
                  height={40}
                />
              </Button>{" "}
              <Button
                component={Link}
                href="https://www.instagram.com/mediend_officials/"
                target="_blank"
                className={classes.social}
                mr={10}
                data-aos="zoom-out"
              >
                <Image
                  src="/assets/social/instagram.png"
                  alt="instagram"
                  width={40}
                  height={40}
                />
              </Button>{" "}
              <Button
                component={Link}
                href="https://www.youtube.com/@mediEND"
                target="_blank"
                className={classes.social}
                mr={10}
                data-aos="zoom-in"
              >
                <Image
                  src="/assets/social/youtube.png"
                  alt="youtube"
                  width={40}
                  height={40}
                />
              </Button>
            </Box>
          </Box>
          <Box className={classes.middle__box}>
            {mobile && (
              <>
                <Box className={classes.box_company}>
                  <Box className={classes.middle__box_upper}>
                    <IconCircle size="15px" color="#14967F" />{" "}
                    <Text tt="uppercase" c="#fff" ml={4} fz={10}>
                      Our Company
                    </Text>
                  </Box>
                  <Link href="/about-us">
                    <Text>About Us</Text>
                  </Link>
                  <Link href="/partner-with-us">
                    <Text>Partner With Us</Text>
                  </Link>
                  <Link href="/doctor-onboarding">
                    <Text>Doctor Onboarding</Text>
                  </Link>
                  <Link href="/faqs">
                    <Text>FAQs</Text>
                  </Link>
                </Box>
                <Box className={classes.box__surgery}>
                  <Box className={classes.middle__box_upper}>
                    <IconCircle size="15px" color="#14967F" />
                    <Text tt="uppercase" c="#fff" ml={4} fz={10}>
                      {" "}
                      Surgery
                    </Text>
                  </Box>
                  {surgeryItems.map((el, index: number) => (
                    <Link href={`/disease/${el.slug}`} key={index}>
                      <Text>{el.text}</Text>
                    </Link>
                  ))}
                </Box>
                <Box className={classes.box__surgery}>
                  <Box className={classes.middle__box_upper}>
                    <IconCircle size="15px" color="#14967F" />
                    <Text tt="uppercase" c="#fff" ml={4} fz={10}>
                      {" "}
                      Quick Links
                    </Text>
                  </Box>
                  {quickLinks.map(
                    (el: { label: string; link: string }, index: number) => (
                      <Text
                        component={Link}
                        href={el.link}
                        style={{ display: "block" }}
                        key={index}
                      >
                        {el.label}
                      </Text>
                    )
                  )}
                </Box>
                {/* <Box className={classes.patients}>
                  <Box className={classes.middle__box_upper}>
                    <IconCircle size="15px" color="#14967F" />
                    <Text tt="uppercase" c="#fff" ml={4} fz={10}>
                      {" "}
                      For Patients
                    </Text>
                  </Box>
                  <Text>Certificates</Text>
                  <Text>Testimonials</Text>
                </Box> */}
              </>
            )}
            {!mobile && (
              <>
                <Box className={classes.mobile__links}>
                  <Box className={classes.mobile__links_inner}>
                    <Box className={classes.box__surgery}>
                      <Box className={classes.middle__box_upper}>
                        <IconCircle size="15px" color="#14967F" />
                        <Text tt="uppercase" c="#fff" ml={4} fz={10}>
                          {" "}
                          Quick Links
                        </Text>
                      </Box>
                      {quickLinks.map(
                        (
                          el: { label: string; link: string },
                          index: number
                        ) => (
                          <Text
                            component={Link}
                            href={el.link}
                            style={{ display: "block" }}
                            key={index}
                          >
                            {el.label}
                          </Text>
                        )
                      )}
                    </Box>
                  </Box>
                  <Box className={classes.box__surgery}>
                    <Box className={classes.middle__box_upper}>
                      <IconCircle size="15px" color="#14967F" />
                      <Text tt="uppercase" c="#fff" ml={4} fz={10}>
                        {" "}
                        Surgery
                      </Text>
                    </Box>
                    {surgeryItems.map((el, index: number) => (
                      <Link href={`/disease/${el.slug}`} key={index}>
                        <Text>{el.text}</Text>
                      </Link>
                    ))}
                  </Box>
                </Box>
              </>
            )}
            <Box style={{ display: "flex", justifyContent: "space-between" }}>
              {!mobile && (
                <Box className={classes.box_company}>
                  <Box className={classes.middle__box_upper}>
                    <IconCircle size="15px" color="#14967F" />{" "}
                    <Text tt="uppercase" c="#fff" ml={4} fz={10}>
                      Our Company
                    </Text>
                  </Box>
                  {/* <Link href='/about-us'>
                  <Text>About Us</Text>
                  </Link> */}
                  <Link href="/hospital-onboarding">
                    <Text>Partner With Us</Text>
                  </Link>
                  <Link href="/doctor-onboarding">
                    <Text>Doctor Onboarding</Text>
                  </Link>
                  <Link href="/faqs">
                    <Text>Faqs</Text>
                  </Link>
                </Box>
              )}
              
            </Box>
            <Box className={classes.contact}>
              <Box my={10}>
                <Text component="a" href="tel:+918750300099" fz="20px">
                  +91 8750300099
                </Text>
                <br />
                <Text component="a" href="mailto:info@mediend.com">
                  info@mediend.com
                </Text>
              </Box>
              <Box my={10}>
                <Text fw={700}>Registered Office Address</Text>
                <Text>
                  GF 10A, 81, Vasundhara, Ghaziabad, Uttar Pradesh 201012{" "}
                </Text>
              </Box>
              <Box my={10}>
                <Text fw={700}>Corporate Office Address</Text>
                <Text>
                  H-166, Sector 63 Rd, H Block, Sector 63, Noida, Uttar Pradesh
                  201301
                </Text>
              </Box>
              {/* <Box my={10}>
                <Text c="#A9B1BC" fz={28}>
                  9.00—18.00
                </Text>
                <Text className={classes.dates}>
                  Mo <div className={classes.divider}></div> Fr
                </Text>
              </Box> */}
            </Box>
          </Box>
        </Box>
        <Box className={classes.box__bottom}>
          <Box style={{ display: "flex", alignItems: "center" }}>
            <IconCopyright /> 2025 - Copyright. All Rights Reserved.
          </Box>
          <Text></Text>
        </Box>
      </Box>
      <Box className="justify-center items-center flex">
        <Image src="/assets/footer_logo.png" height={100} width={200} alt="logo"  />
      </Box>
    </Box>
  );
};
export default Footer;
