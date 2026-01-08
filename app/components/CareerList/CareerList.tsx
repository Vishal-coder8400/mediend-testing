"use client";

import { useEffect, useState } from "react";
import {
  IconBriefcase,
  IconCircleCheck,
  IconMapPin,
  IconSchool,
} from "@tabler/icons-react";
import {
  Box,
  Button,
  Divider,
  Flex,
  Modal,
  Paper,
  Text,
  Title,
} from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import CareerForm from "../CareerForm";
import { Career } from "../../../lib/utils/careerType";
import { sanity } from "../../../lib/sanity";

const CareerList = () => {
  const [opened, { open, close }] = useDisclosure(false);

  const [careersList, setCareersList] = useState<Career[]>([]);
  const [openCollapseIndex, setOpenCollapseIndex] = useState<number | null>(
    null
  ); // Track which section is open

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await sanity.fetch(`
          *[_type == "careers"]
        `);
        setCareersList(data);
      } catch (error: any) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  const toggleCollapse = (index: number) => {
    setOpenCollapseIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <Box id="openings">
      <Title ta="center" my={50}>
        Current Job Openings
      </Title>
      {careersList.map((el: Career, index: number) => (
        <Paper my={31} key={index} withBorder p={20}>
          <Box>
            <Flex wrap="wrap" justify="space-between" mb={20}>
              <Box>
                <Text fz={18} fw={600}>
                  {el.jobTitle}
                </Text>
                <Text fz={15} c="dimmed" maw={720}>
                  {el.jobDescription}
                </Text>
              </Box>
              <Flex
                mt={{ base: 10, lg: 0 }}
                direction="column"
                align="center"
                mx={{ base: "auto", lg: 0 }}
              >
                <Text ta="right">
                  {el.isPermanent ? "Permanent" : "Temporary"}
                </Text>
                <Button
                  my={10}
                  size="md"
                  w="fit-content"
                  color="#DA4404"
                  onClick={() => toggleCollapse(index)}
                >
                  {openCollapseIndex === index
                    ? "Hide Details"
                    : "View Details"}
                </Button>
              </Flex>
            </Flex>

            <Box
              style={{
                maxHeight: openCollapseIndex === index ? "500px" : "0",
                overflow: "hidden",
                transition: "max-height 0.3s ease-in-out",
              }}
            >
              <Box mt={20}>
                <Flex my={20}>
                  <IconCircleCheck size={25} color="#585858" />
                  <Box ml={10}>
                    <Text fz={14} fw={700} c="#212529">
                      Skills
                    </Text>
                    <Text c="#212529">{el.skills}</Text>
                  </Box>
                </Flex>
                <Divider />
                <Flex my={20}>
                  <IconSchool size={25} color="#585858" />
                  <Box ml={10}>
                    <Text fz={14} fw={600} c="#212529">
                      Education
                    </Text>
                    <Text c="#212529">{el.education}</Text>
                  </Box>
                </Flex>
                <Divider />
                <Flex my={20}>
                  <IconBriefcase size={25} color="#585858" />
                  <Box ml={10}>
                    <Text fz={14} fw={600} c="#212529">
                      Work Experience
                    </Text>
                    <Text c="#212529">{el.experience}</Text>
                  </Box>
                </Flex>
                <Divider />
                <Flex my={20}>
                  <IconMapPin size={25} color="#585858" />
                  <Box ml={10}>
                    <Text fz={14} fw={600} c="#212529">
                      Work Location
                    </Text>
                    <Text c="#212529">{el.location}</Text>
                  </Box>
                </Flex>
                <Divider />
                <Flex justify="flex-end" my={20}>
                  <Button onClick={open} color="#DA4404" size="md">
                    Apply
                  </Button>
                </Flex>
              </Box>
            </Box>
          </Box>
          <Modal opened={opened} onClose={close} title="Apply Jobs">
            <CareerForm role={el.jobTitle} />
          </Modal>
        </Paper>
      ))}
    </Box>
  );
};

export default CareerList;
