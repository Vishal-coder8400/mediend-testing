import { Box, Flex, ScrollArea, SimpleGrid, Title } from "@mantine/core";
import TeamCard from "../TeamCard/TeamCard";

const managementTeam = [
  {
    image: "/assets/team/Nisha Jain - Chief Operating Officer.png",
    name: "Nisha Jain",
    title: "Chief Operating Officer",
    social: {
      google: "",
      facebook: "",
      whatsapp: "",
    },
  },
  {
    image: "/assets/team/Adeeshwar Prakash Jain - Chief Finance Officer.png",
    name: "Adeeshwar Prakash Jain",
    title: "Chief Finance Officer",
    social: {
      google: "",
      facebook: "",
      whatsapp: "",
    },
  },
  {
    image: "/assets/team/Siddartha Garg - Chief Technology Officer.png",
    name: "Siddartha Garg",
    title: "Chief Technology Officer",
    social: {
      google: "",
      facebook: "",
      whatsapp: "",
    },
  },
  {
    image: "/assets/team/Lalman Yadav - Chief Legal Officer.png",
    name: "Lalman Yadav",
    title: "Chief Legal Officer",
    social: {
      google: "",
      facebook: "",
      whatsapp: "",
    },
  },
  {
    image: "/assets/team/Sudesh Grover - Chief Vigilance Officer.png",
    name: "Sudesh Grover",
    title: "Chief Vigilance Officer",
    social: {
      google: "",
      facebook: "",
      whatsapp: "",
    },
  },
  {
    image: "/assets/team/Ajay Tomer - Chief Business Officer.png",
    name: "Ajay Tomer",
    title: "Chief Business Officer",
    social: {
      google: "",
      facebook: "",
      whatsapp: "",
    },
  },
];

const coreTeam = [
  {
    image: "/assets/team/Saurabh Chaudhary - Executive Assistant to Managing Director.png",
    name: "Saurabh Chaudhary",
    title: "Executive Assistant to Managing Director",
    social: {
      google: "",
      facebook: "",
      whatsapp: "",
    },
  },
  {
    image: "/assets/team/Shubham Tyagi - Executive Officer - Business.png",
    name: "Shubham Tyagi",
    title: "Executive Officer - Business",
    social: {
      google: "",
      facebook: "",
      whatsapp: "",
    },
  },
  {
    image: "/assets/team/Wasim Khan - Executive Officer - Technology.png",
    name: "Wasim Raza",
    title: "Executive Officer - Technology",
    social: {
      google: "",
      facebook: "",
      whatsapp: "",
    },
  },
  {
    image: "/assets/team/chetan.png",
    name: "Chetan Pratap Singh",
    title: "Executive Officer - Finance & Accounts",
    social: {
      google: "",
      facebook: "",
      whatsapp: "",
    },
  },
  {
    image: "/assets/team/Vaishali Tomar - Executive Officer - Human Resource.png",
    name: "Vaishali Tomar",
    title: "Executive Officer - Human Resource",
    social: {
      google: "",
      facebook: "",
      whatsapp: "",
    },
  },
  {
    image: "/assets/team/Aanchal Singh - Executive Officer - Customer Support.png",
    name: "Aanchal Singh",
    title: "Executive Officer - Customer Support",
    social: {
      google: "",
      facebook: "",
      whatsapp: "",
    },
  },
  {
    image: "/assets/team/Suneet.png",
    name: "Suneet Sharma",
    title: "Executive Officer - Legal & Compliance",
    social: {
      google: "",
      facebook: "",
      whatsapp: "",
    },
  },
  {
    image: "/assets/team/Anjali Dahiya - Executive Officer - Product Development.png",
    name: "Anjali Dahiya",
    title: "Executive Officer - Product Development",
    social: {
      google: "",
      facebook: "",
      whatsapp: "",
    },
  },
  {
    image: "/assets/team/Chhavi Gupta - Executive Officer - Business Analysis.png",
    name: "Chhavi Gupta",
    title: "Executive Officer - Business Analysis",
    social: {
      google: "",
      facebook: "",
      whatsapp: "",
    },
  },
];

const supportTeam = [
  {
    image: "/assets/team/Hardeep Bhargav - Officer - Sales.png",
    name: "Hardeep Bhargav",
    title: "Officer - Sales",
    social: {
      google: "",
      facebook: "",
      whatsapp: "",
    },
  },
  {
    image: "/assets/team/Mohit Raghav - Officer - Strategy.png",
    name: "Mohit Raghav",
    title: "Officer - Strategy",
    social: {
      google: "",
      facebook: "",
      whatsapp: "",
    },
  },
  {
    image: "/assets/team/Vrushali Suryavanshi - Officer - Diet and Nutrition.png",
    name: "Vrushali Suryavanshi",
    title: "Officer - Diet and Nutrition",
    social: {
      google: "",
      facebook: "",
      whatsapp: "",
    },
  },
  {
    image: "/assets/team/Neha Verma - Officer - Patient Care.png",
    name: "Neha Verma",
    title: "Officer - Patient Care",
    social: {
      google: "",
      facebook: "",
      whatsapp: "",
    },
  },
  {
    image: "/assets/team/Ayan Siddiqui - Officer - Patient Feedback.png",
    name: "Ayan Siddiqui",
    title: "Officer - Patient Feedback",
    social: {
      google: "",
      facebook: "",
      whatsapp: "",
    },
  },
  {
    image: "/assets/team/Shivam Rohilla - Officer - Insurance.png",
    name: "Shivam Rohilla",
    title: "Officer - Insurance",
    social: {
      google: "",
      facebook: "",
      whatsapp: "",
    },
  },
  {
    image: "/assets/team/Juhi Pandey - Officer - Clinical Psychology.png",
    name: "Juhi Pandey",
    title: "Officer - Clinical Psychology",
    social: {
      google: "",
      facebook: "",
      whatsapp: "",
    },
  },
  {
    image: "/assets/team/Raunak Khan - Officer - Medical Content.png",
    name: "Raunak",
    title: "Officer - Medical Content",
    social: {
      google: "",
      facebook: "",
      whatsapp: "",
    },
  },
];

const OurTeam = () => {
  return (
    <>
      <Title
        my={{ base: 40, sm: 80 }}
        c="#2967B0"
        ta="center"
        fz={{ base: 24, sm: 40 }}
      >
        Management Team
      </Title>
      <Box mx="auto" w="fit-content">
        <SimpleGrid
          visibleFrom="lg"
          cols={{ base: 1, sm: 2, lg: 3 }}
          spacing="xl"
        >
          {managementTeam.map((el, index) => (
            <TeamCard key={index} data={el} />
          ))}
        </SimpleGrid>
        <ScrollArea hiddenFrom="lg" scrollbars="x" w="95vw">
          <Flex>
            {managementTeam.map((el, index) => (
              <TeamCard key={index} data={el} />
            ))}
          </Flex>
        </ScrollArea>
      </Box>

      <Title
        my={{ base: 40, sm: 80 }}
        c="#2967B0"
        ta="center"
        fz={{ base: 24, sm: 40 }}
      >
       Core Enablers
      </Title>
      <Box mx="auto" w="fit-content">
        <SimpleGrid
          visibleFrom="lg"
          cols={{ base: 1, sm: 2, lg: 3 }}
          spacing="xl"
        >
          {coreTeam.map((el, index) => (
            <TeamCard key={index} data={el} />
          ))}
        </SimpleGrid>
        <ScrollArea hiddenFrom="lg" scrollbars="x" w="95vw">
          <Flex>
            {coreTeam.map((el, index) => (
              <TeamCard key={index} data={el} />
            ))}
          </Flex>
        </ScrollArea>
      </Box>

      <Title
        my={{ base: 40, sm: 80 }}
        c="#2967B0"
        ta="center"
        fz={{ base: 24, sm: 40 }}
      >
        Execution Team
      </Title>
      <Box mx="auto" w="fit-content">
        <SimpleGrid
          visibleFrom="lg"
          cols={{ base: 1, sm: 2, lg: 3 }}
          spacing="xl"
        >
          {supportTeam.map((el, index) => (
            <TeamCard key={index} data={el} />
          ))}
        </SimpleGrid>
        <ScrollArea hiddenFrom="lg" scrollbars="x" w="95vw">
          <Flex>
            {supportTeam.map((el, index) => (
              <TeamCard key={index} data={el} />
            ))}
          </Flex>
        </ScrollArea>
      </Box>
    </>
  );
};

export default OurTeam;