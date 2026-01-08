import { Box, Container, Divider, Flex, Image, Title } from "@mantine/core";
import OurFounder from "../components/OurFounder/OurFounder";
import OurValues from "../components/OurValues/OurValues";
import PrivacyPolicy from "../components/PrivacyPolicy/PrivacyPolicy";
import OurTeam from "../components/OurTeam/OurTeam";
import AboutHerobox from "../components/AboutHerobox/AboutHerobox";
import NotFound from "../not-found";

export default function AboutUsPage() {
  return (
    <>
      <AboutHerobox />
      <Container size="xl">
        <OurFounder />
        <OurValues />
        <OurTeam />

      </Container>
    </>
  );
}
